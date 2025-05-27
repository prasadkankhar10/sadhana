import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { useAuth } from '../firebase/AuthProvider';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RoughNotation } from 'react-rough-notation'; // NEW: For animated headings
// If you add Doodle.css, you can import it here as well
// import 'doodle.css/doodle.css';

// NOTE: Make sure Patrick Hand is loaded in index.html and tailwind.config.js
// Example for tailwind.config.js:
//   fontFamily: { 'hand': ['"Patrick Hand"', 'cursive'], ... }
// Example for index.html:
//   <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">

interface DailyJournalProps {
  appDate: string | null;
}

const getToday = (appDate: string | null) =>
  appDate ? appDate : new Date().toISOString().slice(0, 10);

const MOODS = [
  { label: '😊 Happy', value: 'happy', emoji: '😊' },
  { label: '😐 Neutral', value: 'neutral', emoji: '😐' },
  { label: '😔 Sad', value: 'sad', emoji: '😔' },
  { label: '😠 Angry', value: 'angry', emoji: '😠' },
  { label: '😴 Tired', value: 'tired', emoji: '😴' },
  { label: '😇 Grateful', value: 'grateful', emoji: '😇' },
];
const PROMPTS = [
  'What are you grateful for today?',
  'Describe a challenge you overcame.',
  'What made you smile today?',
  'What is one thing you want to improve tomorrow?',
  'Write about a small win you had today.',
  'How did you take care of yourself today?',
  'What is something you learned today?',
];

const paperBg = {
  backgroundImage:
    'repeating-linear-gradient(0deg, var(--journal-bg, #fdf6e3) 0px, var(--journal-bg, #fdf6e3) 31px, var(--journal-line, #e0d7c3) 32px, var(--journal-bg, #fdf6e3) 33px)',
  backgroundColor: 'var(--journal-bg, #fdf6e3)',
};

const handDrawnBorder = {
  border: '3px solid #222',
  borderRadius: '32px',
  boxShadow: '0 6px 32px 0 rgba(60,40,10,0.10), 0 0 0 6px #f5e9c6',
};

const DailyJournal: React.FC<DailyJournalProps> = ({ appDate }) => {
  const { user } = useAuth();
  const [date, setDate] = useState(getToday(appDate));
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [history, setHistory] = useState<{
    date: string;
    mood: string;
    text: string;
  }[]>([]);
  const [search, setSearch] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    // Pick a prompt based on date (rotating)
    setPrompt(PROMPTS[new Date(date).getDate() % PROMPTS.length]);
  }, [date]);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    setSaved(false);
    const fetchEntry = async () => {
      const ref = doc(db, 'users', user.uid, 'journal', date);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setEntry(snap.data().text || '');
        setMood(snap.data().mood || '');
      } else {
        setEntry('');
        setMood('');
      }
      setLoading(false);
    };
    fetchEntry();
  }, [user, date]);

  useEffect(() => {
    if (!user || !showHistory) return;
    // Use collectionGroup for all journal entries
    import('firebase/firestore').then(({ collection, getDocs }) => {
      const fetch = async () => {
        const ref = collection(db, 'users', user.uid, 'journal');
        getDocs(ref).then((snap) => {
          const arr: { date: string; mood: string; text: string }[] = [];
          snap.forEach((docSnap) => {
            arr.push({
              date: docSnap.id,
              mood: docSnap.data().mood || '',
              text: docSnap.data().text || '',
            });
          });
          setHistory(arr);
        });
      };
      fetch();
    });
  }, [user, showHistory]);

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);
    await setDoc(doc(db, 'users', user.uid, 'journal', date), {
      text: entry,
      mood,
    });
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const filteredHistory = history.filter((h) =>
    h.text.toLowerCase().includes(search.toLowerCase()) ||
    h.date.includes(search) ||
    h.mood.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="relative max-w-3xl mx-auto mt-8 p-6 md:p-10 overflow-hidden"
      style={{
        ...paperBg,
        ...handDrawnBorder,
        fontFamily: 'Patrick Hand, Caveat, Gloria Hallelujah, cursive',
        position: 'relative',
      }}
    >
      {/* CSS Vars for light/dark mode */}
      <style>{`
        :root {
          --journal-bg: #fdf6e3;
          --journal-line: #e0d7c3;
          --journal-hole-bg: #e0d7c3;
          --journal-hole-border: #b7a77a;
        }
        .dark :root, .dark body {
          --journal-bg: #23272e;
          --journal-line: #3b4252;
          --journal-hole-bg: #3b4252;
          --journal-hole-border: #6b7280;
        }
      `}</style>
      {/* Notebook holes */}
      <div className="absolute left-0 top-8 flex flex-col gap-8 h-[90%] z-10">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="w-4 h-4 rounded-full shadow-inner block ml-[-28px]"
            style={{
              background: 'var(--journal-hole-bg, #e0d7c3)',
              border: '2px solid var(--journal-hole-border, #b7a77a)'
            }}
          />
        ))}
      </div>
      {/* Animated Title */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl md:text-4xl font-extrabold text-sky-700 dark:text-sky-300 tracking-tight drop-shadow-xl uppercase select-none flex items-center gap-2 font-hand">
          <RoughNotation
            type="underline"
            show
            color="#f59e42"
            animationDuration={1200}
            padding={6}
            strokeWidth={3}
          >
            <span>📘 Daily Journal</span>
          </RoughNotation>
        </span>
        <span className="text-2xl md:text-3xl select-none">✏️</span>
      </div>
      {/* Date Picker & History Toggle */}
      <div className="flex flex-col md:flex-row gap-6 mb-6 items-center justify-between">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <label className="text-lg font-bold text-gray-700 dark:text-gray-200 font-hand">
            Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-xl px-4 py-2 border-2 border-dashed border-sky-400 bg-[#fdf6e3] text-gray-900 font-hand focus:outline-none focus:ring-2 focus:ring-sky-400 transition w-full md:w-auto shadow-md font-semibold"
            style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
          />
          <span className="ml-2 text-xl select-none">☀️</span>
        </div>
        <button
          className="px-4 py-2 rounded-xl border-2 border-dashed border-sky-400 bg-[#fffbe6] hover:bg-[#fdf6e3] text-sky-700 font-bold shadow-lg transition w-full md:w-auto tracking-wide font-hand flex items-center gap-2"
          onClick={() => setShowHistory(h => !h)}
          type="button"
        >
          {showHistory ? 'Hide History' : 'Show History'} <span>📖</span>
        </button>
      </div>
      {/* Mood Selector */}
      <div className="mb-6 flex flex-wrap gap-3 items-center justify-center">
        <span className="text-lg font-bold text-gray-700 dark:text-gray-200 font-hand">
          Mood:
        </span>
        {MOODS.map((m) => (
          <button
            key={m.value}
            className={`px-4 py-2 rounded-full text-2xl border-2 border-dashed shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 font-hand ${m.value === mood ? 'bg-sky-200 text-sky-900 border-sky-700 scale-110 ring-2 ring-sky-400' : 'bg-[#fffbe6] text-gray-900 border-sky-300 hover:bg-sky-100'}`}
            onClick={() => setMood(m.value)}
            type="button"
            aria-label={m.label}
            style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
          >
            {m.emoji}
          </button>
        ))}
      </div>
      {/* Animated Prompt */}
      <div className="mb-6 text-center text-sky-700 dark:text-sky-300 italic text-xl font-medium tracking-wide animate-fade-in font-hand">
        <RoughNotation
          type="box"
          show
          color="#f59e42"
          animationDuration={900}
          padding={8}
          strokeWidth={2}
        >
          {prompt}
        </RoughNotation>
      </div>
      {/* Journal Entry Editor */}
      <div
        className="mb-6 rounded-2xl overflow-hidden border-2 border-dashed border-sky-300 shadow-lg bg-[#fffbe6] font-hand"
        style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
      >
        <ReactQuill
          value={entry}
          onChange={setEntry}
          theme="snow"
          className="rounded-2xl min-h-[180px] bg-[#fffbe6] border-none focus:outline-none text-lg font-hand"
          readOnly={isSaving}
          placeholder="Write your thoughts, reflections, or gratitude for today..."
        />
      </div>
      {/* Save Button */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
        <button
          className="px-8 py-3 rounded-xl border-2 border-dashed border-sky-400 bg-gradient-to-r from-[#ffe6b3] to-[#fdf6e3] hover:from-[#fdf6e3] hover:to-[#ffe6b3] text-sky-800 font-extrabold shadow-xl transition w-full md:w-auto text-lg tracking-wider uppercase font-hand flex items-center gap-2"
          onClick={handleSave}
          disabled={isSaving}
          type="button"
        >
          <span>💾</span> {isSaving ? 'Saving...' : 'Save'}
        </button>
        {saved && (
          <span className="text-green-500 font-bold text-lg animate-pulse font-hand">
            Saved!
          </span>
        )}
      </div>
      {/* History Panel */}
      {showHistory && (
        <div
          className="mt-8 bg-[#fffbe6]/90 rounded-2xl p-6 border-2 border-dashed border-sky-200 shadow-2xl max-h-[400px] overflow-y-auto transition-all font-hand"
          style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
        >
          <div className="mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search journal entries..."
              className="rounded-xl px-4 py-2 border-2 border-dashed border-sky-400 bg-[#fffbe6] text-gray-900 font-hand focus:outline-none focus:ring-2 focus:ring-sky-400 transition w-full md:w-auto shadow-md font-semibold"
              style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
            />
            <span className="text-xl select-none">🔍</span>
          </div>
          <div>
            {filteredHistory.length === 0 && (
              <div className="text-center text-gray-500">No entries found.</div>
            )}
            {filteredHistory.map((h) => (
              <div
                key={h.date}
                className="mb-6 p-4 rounded-2xl border-2 border-dashed border-sky-100 bg-gradient-to-br from-[#fffbe6] to-[#fdf6e3] shadow-lg font-hand"
                style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
              >
                <div className="flex items-center gap-4 mb-2">
                  {MOODS.find((m) => m.value === h.mood)?.emoji || '📝'}
                  <span className="text-xs text-gray-500 font-mono">
                    {h.date}
                  </span>
                </div>
                <div
                  className="prose prose-base max-w-none font-hand"
                  dangerouslySetInnerHTML={{ __html: h.text }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Paper lines overlay for notebook effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[1px]"
            style={{
              background: 'var(--journal-line, #e0d7c3)',
              opacity: 0.6,
              position: 'absolute',
              top: `${(i + 1) * 32}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyJournal;

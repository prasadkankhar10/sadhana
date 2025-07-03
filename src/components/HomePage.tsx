import React, { useState, useEffect, useMemo } from 'react';
import { useCheatMenu } from '../App';
import HabitList from './habits/HabitList';
import TimeBlockScheduler from './habits/TimeBlockScheduler';
import HabitAnalytics from './habits/HabitAnalytics';
import DailyJournal from './DailyJournal';
import { db } from '../firebase/firebase';
import { useAuth } from '../firebase/AuthProvider';
import { doc, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';

// --- PLACEHOLDERS ---

const HomePage: React.FC = () => {
  const [tab, setTab] = useState<
    'home' | 'habits' | 'timeblocks' | 'analytics' | 'journal'
  >('home');
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [quickTasks, setQuickTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const { habits } = useCheatMenu();
  const streak =
    habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0;
  const totalHabits = habits.length;
  const doneToday = habits.filter((h) => h.doneToday).length;

  function getLongestStreak(history: string[]): number {
    if (!history || history.length === 0) return 0;
    const dates = history
      .map((d) => new Date(d))
      .sort((a, b) => a.getTime() - b.getTime());
    let maxStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < dates.length; i++) {
      const diff =
        (dates[i].getTime() - dates[i - 1].getTime()) / (1000 * 60 * 60 * 24);
      if (diff === 1) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 1;
      }
    }

    return maxStreak;
  }

  const longestStreak =
    habits.length > 0
      ? Math.max(
          ...habits.map((h) => Math.max(h.streak, getLongestStreak(h.history))),
        )
      : 0;
  const nextHabit = habits.find((h) => !h.doneToday)?.name;
  const { user } = useAuth();
  const [blocks, setBlocks] = useState<
    {
      id: number;
      name: string;
      start?: string;
      end?: string;
      label?: string;
    }[]
  >([]);

  // Function to fetch the user's schedule blocks for the day.
  // If removed, the app will lose the ability to display time blocks for the user.
  useEffect(() => {
    if (!user) return;
    const today = new Date().toISOString().slice(0, 10);
    const docRef = doc(db, 'users', user.uid, 'schedule', today);
    const unsub = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      setBlocks(data?.blocks || []);
    });
    return () => unsub();
  }, [user]);

  // Find next block (guard against undefined start/end)
  const now = useMemo(() => new Date(), []);
  const nextBlock = useMemo(() => {
    if (!blocks || !blocks.length) return null;
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    return (
      blocks.find((b) => {
        if (!b.start || typeof b.start !== 'string') return false;
        const [startH, startM] = b.start.split(':').map(Number);
        return startH * 60 + startM > nowMinutes;
      }) || blocks[0]
    );
  }, [blocks, now]);

  // --- Journal summary ---
  const [journal, setJournal] = useState<string | null>(null);
  // Function to fetch the user's journal entry for the day.
  // If removed, the app will lose the ability to display the journal entry for the user.
  useEffect(() => {
    if (!user) return;
    const today = new Date().toISOString().slice(0, 10);
    const docRef = doc(db, 'users', user.uid, 'journal', today);
    const unsub = onSnapshot(docRef, (snapshot) => {
      setJournal(snapshot.data()?.entry || null);
    });
    return () => unsub();
  }, [user]);

  // --- Quick Tasks (Add an do) ---
  // Function to add a quick task to the list.
  // If removed, users will lose the ability to add quick tasks dynamically.
  const addQuickTask = () => {
    if (newTask.trim()) setQuickTasks([...quickTasks, newTask.trim()]);
    setNewTask('');
  };
  // Function to mark a quick task as complete and remove it from the list.
  // If removed, users will lose the ability to manage quick tasks effectively.
  const completeQuickTask = (idx: number) => {
    setQuickTasks(quickTasks.filter((_, i) => i !== idx));
  };

  // --- User Avatar ---
  let userAvatarContent;
  if (user?.photoURL) {
    userAvatarContent = (
      <img
        src={user.photoURL}
        alt={user.displayName || 'User Avatar'}
        className="w-10 h-10 rounded-full object-cover"
      />
    );
  } else if (user?.displayName) {
    userAvatarContent = (
      <span style={{ fontSize: 24 }}>{user.displayName.charAt(0)}</span>
    );
  } else {
    userAvatarContent = <span style={{ fontSize: 24 }}>👤</span>;
  }

  const tipOfTheDay = 'Keep learning!';

  // --- Motivational Message ---
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    async function fetchMotivationalMessage() {
      try {
        const response = await fetch('/api/fetchMotivationalMessage');
        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data && data.quote) {
            setMotivationalMessage(data.quote);
            setAuthor(data.author);
          } else {
            setMotivationalMessage('Stay positive and keep moving forward!');
            setAuthor('Unknown');
          }
        } else {
          const responseBody = await response.text();
          console.error('Unexpected response format:', contentType, responseBody);
          setMotivationalMessage('Stay positive and keep moving forward!');
          setAuthor('Unknown');
        }
      } catch (error) {
        console.error('Error fetching motivational message:', error);
        setMotivationalMessage('Stay positive and keep moving forward!');
        setAuthor('Unknown');
      }
    }

    fetchMotivationalMessage();
  }, []);

  // --- Home Dashboard ---
  if (tab !== 'home') {
    if (tab === 'habits')
      return <HabitList appDate={null} setAppDate={() => {}} />;
    if (tab === 'timeblocks') return <TimeBlockScheduler />;
    if (tab === 'analytics') return <HabitAnalytics />;
    if (tab === 'journal') return <DailyJournal appDate={null} />;
  }

  return (
    <div>
      {/* Correct JSX structure */}
      <div className="relative max-w-5xl mx-auto p-0 overflow-hidden">
        {/* Spiral binding */}
        <div className="absolute left-0 top-8 flex flex-col gap-8 h-[90%] z-10">
          {[...Array(7)].map((_, i) => (
            <span
              key={i}
              className="w-6 h-6 rounded-full shadow-inner block ml-[-36px] border-2 border-gray-400 bg-[#fdf6e3]"
              style={{ boxShadow: '0 2px 0 #e0d7c3' }}
            />
          ))}
        </div>
        {/* Header and nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-8 pt-6 pb-2 gap-2 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-bold tracking-tight hover:underline bg-transparent border-none"
              style={{ letterSpacing: '1px' }}
            >
              SADHANA
            </Link>
          </div>
          <nav className="flex flex-wrap gap-4 sm:gap-8 text-lg sm:text-xl font-hand mt-2 sm:mt-0">
            <Link
              to="/habits"
              className="hover:underline bg-transparent border-none"
            >
              Habits
            </Link>
            <Link
              to="/timeblocks"
              className="hover:underline bg-transparent border-none"
            >
              Time-blocks
            </Link>
            <Link
              to="/analytics"
              className="hover:underline bg-transparent border-none"
            >
              Analytics
            </Link>
            <Link
              to="/journal"
              className="hover:underline bg-transparent border-none"
            >
              Journal
            </Link>
          </nav>
          <div className="mt-2 sm:mt-0">
            <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center bg-gray-100 overflow-hidden">
              {userAvatarContent}
            </div>
          </div>
        </div>
        {/* Main grid */}
        <div className="relative z-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-8 mt-4">
            {/* HABITS card */}
            <div className="bg-white/90 border-2 border-dashed border-gray-400 rounded-2xl p-3 sm:p-4 shadow-md flex flex-col items-center min-h-[100px] sm:min-h-[120px] cursor-pointer">
              <Link
                to="/habits"
                className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2"
              >
                <span>🍪</span> HABITS
              </Link>
              <div className="text-sm sm:text-base mb-1">
                ⏱ <span className="font-bold">{streak} day streak</span>
              </div>
              <div className="text-xs sm:text-sm mb-1 text-gray-700">
                ✅ {doneToday}/{totalHabits} done today
              </div>
              <div className="text-xs sm:text-sm mb-1 text-yellow-700">
                🏆 Longest streak: {longestStreak}
              </div>
              {nextHabit && (
                <div className="text-xs sm:text-sm mb-1 text-blue-700">
                  Next: {nextHabit}
                </div>
              )}
              <div className="h-8 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs sm:text-sm">
                {totalHabits} habits
              </div>
            </div>
            {/* TIME-BLOCK card */}
            <div className="bg-white/90 border-2 border-dashed border-gray-400 rounded-2xl p-3 sm:p-4 shadow-md flex flex-col items-center min-h-[100px] sm:min-h-[120px] cursor-pointer">
              <Link
                to="/timeblocks"
                className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2"
              >
                <span>⏰</span> TIME-BLOCK
              </Link>
              {blocks.length > 0 ? (
                <>
                  <div className="text-sm sm:text-base mb-1">
                    Next:{' '}
                    <span className="font-bold">
                      {nextBlock
                        ? `${nextBlock.start} - ${nextBlock.end}`
                        : '—'}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm mb-1 text-gray-700">
                    {blocks.length} block{blocks.length > 1 ? 's' : ''} today
                  </div>
                  {nextBlock?.label && (
                    <div className="text-xs sm:text-sm mb-1 text-blue-700">
                      {nextBlock.label}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-sm sm:text-base mb-2 text-gray-400">
                  No blocks today
                </div>
              )}
              <div className="h-8 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs sm:text-sm">
                (time-block details)
              </div>
            </div>
            {/* Sticky note */}
            <div className="relative flex flex-col items-center min-h-[100px] sm:min-h-[120px]">
              <div
                className="absolute -top-4 right-0 bg-yellow-200 border-2 border-dashed border-yellow-400 rounded-lg px-2 sm:px-4 py-1 sm:py-2 shadow text-base sm:text-lg font-bold rotate-2"
                style={{
                  boxShadow: '2px 2px 0 #e0d7c3',
                  minWidth: 120,
                  maxWidth: 200,
                }}
              >
                <div>{motivationalMessage}</div>
                <div className="text-sm text-gray-600">- {author}</div>
              </div>
            </div>
          </div>
          {/* Lower grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-8 mt-6">
            {/* JOURNAL card */}
            <div
              className="bg-white/90 border-2 border-dashed border-gray-400 rounded-2xl p-3 sm:p-4 shadow-md flex flex-col items-center min-h-[100px] sm:min-h-[120px] cursor-pointer"
              onClick={() => setTab('journal')}
            >
              <div className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                <span>📝</span> JOURNAL
              </div>
              {journal ? (
                <>
                  <div className="text-sm sm:text-base mb-1 text-green-700">
                    Entry written
                  </div>
                  <div className="text-xs sm:text-sm mb-1 text-gray-700">
                    {journal.slice(0, 40)}
                    {journal.length > 40 ? '...' : ''}
                  </div>
                </>
              ) : (
                <div className="text-sm sm:text-base mb-2 text-gray-400">
                  No entry yet
                </div>
              )}
              <div className="h-8 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs sm:text-sm">
                (journal placeholder)
              </div>
            </div>
            {/* Add an do card */}
            <div className="bg-white/90 border-2 border-dashed border-gray-400 rounded-2xl p-3 sm:p-4 shadow-md flex flex-col items-center min-h-[100px] sm:min-h-[120px]">
              <div className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                <span>🗂️</span> Add an do
              </div>
              <div className="text-sm sm:text-base mb-2">
                Break tasks into smaller steps ✨
              </div>
              <div className="h-8 w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-400 text-xs sm:text-sm">
                {quickTasks.length === 0 && (
                  <span>(task breakdown placeholder)</span>
                )}
                {quickTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-center w-full justify-between px-2 py-1"
                  >
                    <span className="text-gray-700">{task}</span>
                    <button
                      className="ml-2 text-green-600"
                      onClick={() => completeQuickTask(idx)}
                    >
                      ✓
                    </button>
                  </div>
                ))}
                <div className="flex w-full mt-1">
                  <input
                    className="flex-1 rounded-l px-2 py-1 text-xs border border-gray-300"
                    placeholder="Add step..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addQuickTask()}
                  />
                  <button
                    className="rounded-r bg-blue-200 px-2 text-xs"
                    onClick={addQuickTask}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Tip of the day */}
          <div className="w-full text-center text-lg sm:text-xl font-hand mt-8 sm:mt-12 mb-2 px-2">
            Tip of the day ✨ {tipOfTheDay}
          </div>
          <div className="absolute right-4 sm:right-8 bottom-2 text-gray-400 font-hand text-xs sm:text-sm">
            v0.1
          </div>
          {/* Add Habit Modal */}
          {showAddHabit && (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 shadow-xl max-w-xs w-full">
                <h2 className="text-xl font-bold mb-4">Add a new habit</h2>
                <HabitList appDate={null} setAppDate={() => {}} />
                <button
                  className="mt-4 px-4 py-2 bg-blue-400 text-white rounded"
                  onClick={() => setShowAddHabit(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

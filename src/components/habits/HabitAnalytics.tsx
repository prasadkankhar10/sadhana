import React from 'react';
import { useAuth } from '../../firebase/AuthProvider';
import { db } from '../../firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

interface Habit {
  id: number;
  name: string;
  doneToday: boolean;
  streak: number;
  lastCompleted: string | null;
  history: string[];
}

const HabitAnalytics: React.FC = () => {
  const { user } = useAuth();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    const habitsRef = collection(db, 'users', user.uid, 'habits');
    const unsub = onSnapshot(habitsRef, (snapshot) => {
      setHabits(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: typeof doc.id === 'string' ? parseInt(doc.id) : doc.id,
            name: data.name,
            doneToday: data.doneToday,
            streak: data.streak,
            lastCompleted: data.lastCompleted,
            history: data.history || [],
          } as Habit;
        }),
      );
      setLoading(false);
    });
    return () => unsub();
  }, [user]);

  // Analytics calculations
  const totalHabits = habits.length;
  const totalCompletions = habits.reduce((acc, h) => acc + h.history.length, 0);
  const avgStreak =
    habits.length > 0
      ? Math.round(habits.reduce((acc, h) => acc + h.streak, 0) / habits.length)
      : 0;
  const bestStreak = Math.max(0, ...habits.map((h) => h.streak));
  const perfectDays = (() => {
    // Count days where all habits were completed
    const allDates = habits.flatMap((h) => h.history);
    const uniqueDates = Array.from(new Set(allDates));
    return uniqueDates.filter((date) =>
      habits.every((h) => h.history.includes(date)),
    ).length;
  })();

  return (
    <div
      className="w-full max-w-2xl mx-auto p-4 relative animate-fade-in-down"
      style={{
        fontFamily: 'Patrick Hand, Caveat, Gloria Hallelujah, cursive',
        background:
          'repeating-linear-gradient(0deg, var(--journal-bg, #fdf6e3) 0px, var(--journal-bg, #fdf6e3) 31px, var(--journal-line, #e0d7c3) 32px, var(--journal-bg, #fdf6e3) 33px)',
        border: '3px solid #222',
        borderRadius: '32px',
        boxShadow: '0 6px 32px 0 rgba(60,40,10,0.10), 0 0 0 6px #f5e9c6',
        position: 'relative',
      }}
    >
      <style>{`
        :root {
          --journal-bg: #fdf6e3;
          --journal-line: #e0d7c3;
        }
        .dark :root, .dark body {
          --journal-bg: #23272e;
          --journal-line: #3b4252;
        }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-slow { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pop-in { 0% { transform: scale(0.7); opacity: 0; } 80% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        .animate-fade-in { animation: fade-in 0.7s ease; }
        .animate-fade-in-down { animation: fade-in-down 0.7s cubic-bezier(.4,2,.6,1); }
        .animate-fade-in-slow { animation: fade-in-slow 1.2s ease; }
        .animate-pop-in { animation: pop-in 0.5s cubic-bezier(.4,2,.6,1); }
        .animate-wiggle { animation: wiggle 1.2s infinite alternate; }
      `}</style>
      {/* Animated Title */}
      <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
        <span className="text-3xl md:text-4xl font-extrabold text-sky-700 dark:text-sky-300 tracking-tight drop-shadow-xl uppercase select-none flex items-center gap-2 font-hand animate-wiggle">
          <span>📊 Habit Analytics</span>
        </span>
        <span className="text-2xl md:text-3xl select-none animate-bounce">
          📈
        </span>
      </div>
      {/* Micro-instructions */}
      <div className="mb-2 text-center text-xs text-gray-500 dark:text-gray-300 font-hand animate-fade-in">
        <span>
          Tip: Track your progress and celebrate your streaks!{' '}
          <span className="ml-1">🎉</span>
        </span>
      </div>
      {loading ? (
        <div className="text-center text-sky-400 font-semibold animate-fade-in">
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-slow">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center border-2 border-dashed border-sky-200 animate-pop-in">
            <span className="text-3xl font-bold text-sky-500 animate-wiggle">
              {totalHabits}
            </span>
            <span className="text-xs text-gray-500 mt-1">Total Habits</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center border-2 border-dashed border-green-200 animate-pop-in">
            <span className="text-3xl font-bold text-green-500 animate-wiggle">
              {totalCompletions}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Total Completions
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center border-2 border-dashed border-indigo-200 animate-pop-in">
            <span className="text-3xl font-bold text-indigo-500 animate-wiggle">
              {avgStreak}
            </span>
            <span className="text-xs text-gray-500 mt-1">Average Streak</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center border-2 border-dashed border-yellow-200 animate-pop-in">
            <span className="text-3xl font-bold text-yellow-500 animate-wiggle">
              {bestStreak}
            </span>
            <span className="text-xs text-gray-500 mt-1">Best Streak</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center border-2 border-dashed border-pink-200 animate-pop-in">
            <span className="text-3xl font-bold text-pink-500 animate-wiggle">
              {perfectDays}
            </span>
            <span className="text-xs text-gray-500 mt-1">Perfect Days</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitAnalytics;

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
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-sky-600 dark:text-sky-300">
        📊 Habit Analytics
      </h2>
      {loading ? (
        <div className="text-center text-sky-400 font-semibold">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-sky-500">
              {totalHabits}
            </span>
            <span className="text-xs text-gray-500 mt-1">Total Habits</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-green-500">
              {totalCompletions}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Total Completions
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-500">
              {avgStreak}
            </span>
            <span className="text-xs text-gray-500 mt-1">Average Streak</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-yellow-500">
              {bestStreak}
            </span>
            <span className="text-xs text-gray-500 mt-1">Best Streak</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-pink-500">
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

import React, { createContext, useContext, useState } from 'react';
import { AuthProvider, useAuth } from './firebase/AuthProvider';
import { db } from './firebase/firebase';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import Layout from './components/layout/Layout';
import HabitList from './components/habits/HabitList';
import TimeBlockScheduler from './components/habits/TimeBlockScheduler';
import HabitAnalytics from './components/habits/HabitAnalytics';
import DeveloperCheatMenu from './components/common/DeveloperCheatMenu';
import DailyJournal from './components/DailyJournal';
import './index.css';

// --- CheatMenuContext ---
interface CheatMenuContextType {
  habits: Habit[];
  reminders: Reminder[];
  habitsCount: number;
  remindersCount: number;
  onResetHabits: () => void;
  onMarkAllDone: () => void;
  onClearReminders: () => void;
  onAddTestHabit: () => void;
  onAddTestReminder: () => void;
  appDate: string | null;
  setAppDate: (date: string) => void;
}
export const CheatMenuContext = createContext<CheatMenuContextType | undefined>(
  undefined,
);
export const useCheatMenu = () => {
  const ctx = useContext(CheatMenuContext);
  if (!ctx)
    throw new Error(
      'useCheatMenu must be used within CheatMenuContext.Provider',
    );
  return ctx;
};

// Define Habit and Reminder types here for context
interface Habit {
  id: number;
  name: string;
  doneToday: boolean;
  streak: number;
  lastCompleted: string | null;
  history: string[];
}
interface Reminder {
  id: number;
  hour: number;
  minute: number;
  message: string;
  sound: boolean;
  vibrate: boolean;
}

function SadhanaApp() {
  const [tab, setTab] = useState<
    'habits' | 'schedule' | 'analytics' | 'journal'
  >('habits');
  const [appDate, setAppDate] = React.useState<string | null>(null);
  const [habits, setHabits] = React.useState<Habit[]>([]);
  const [reminders, setReminders] = React.useState<Reminder[]>([]);

  // --- Firestore integration ---
  const { user } = useAuth();
  React.useEffect(() => {
    if (!user) return;
    // Habits
    const habitsRef = collection(db, 'users', user.uid, 'habits');
    const unsubHabits = onSnapshot(habitsRef, (snapshot) => {
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
    });
    // Reminders
    const remindersRef = collection(db, 'users', user.uid, 'reminders');
    const unsubReminders = onSnapshot(remindersRef, (snapshot) => {
      setReminders(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: typeof doc.id === 'string' ? parseInt(doc.id) : doc.id,
            hour: data.hour,
            minute: data.minute,
            message: data.message,
            sound: data.sound,
            vibrate: data.vibrate,
          } as Reminder;
        }),
      );
    });
    return () => {
      unsubHabits();
      unsubReminders();
    };
  }, [user]);

  // --- Counts ---
  const habitsCount = habits.length;
  const remindersCount = reminders.length;

  // --- Cheat menu handlers ---
  const onResetHabits = async (): Promise<void> => {
    if (!user) return;
    for (const habit of habits) {
      await setDoc(doc(db, 'users', user.uid, 'habits', habit.id.toString()), {
        ...habit,
        doneToday: false,
        streak: 0,
        lastCompleted: null,
        history: [],
      });
    }
  };
  const onMarkAllDone = async (): Promise<void> => {
    if (!user) return;
    const today = appDate || new Date().toISOString().slice(0, 10);
    for (const habit of habits) {
      await setDoc(doc(db, 'users', user.uid, 'habits', habit.id.toString()), {
        ...habit,
        doneToday: true,
        streak: habit.streak + 1,
        lastCompleted: today,
        history: [...habit.history, today],
      });
    }
  };
  const onClearReminders = async (): Promise<void> => {
    if (!user) return;
    for (const reminder of reminders) {
      await deleteDoc(
        doc(db, 'users', user.uid, 'reminders', reminder.id.toString()),
      );
    }
  };
  const onAddTestHabit = async (): Promise<void> => {
    if (!user) return;
    const habit: Habit = {
      id: Date.now(),
      name: 'Test Habit ' + Math.floor(Math.random() * 1000),
      doneToday: false,
      streak: 0,
      lastCompleted: null,
      history: [],
    };
    await setDoc(
      doc(db, 'users', user.uid, 'habits', habit.id.toString()),
      habit,
    );
  };
  const onAddTestReminder = async (): Promise<void> => {
    if (!user) return;
    const reminder: Reminder = {
      id: Date.now() + Math.floor(Math.random() * 10000),
      hour: 12,
      minute: 0,
      message: 'Test Reminder',
      sound: true,
      vibrate: true,
    };
    await setDoc(
      doc(db, 'users', user.uid, 'reminders', reminder.id.toString()),
      reminder,
    );
  };
  const onDeleteAllData = async (): Promise<void> => {
    if (!user) return;
    const confirmed = window.confirm(
      'Are you absolutely sure you want to delete ALL your data? This cannot be undone! Type DELETE in the next prompt to confirm.',
    );
    if (!confirmed) return;
    const doubleCheck = window.prompt(
      'Type DELETE to confirm you want to erase all your data. This action is irreversible.',
    );
    if (doubleCheck !== 'DELETE') {
      alert('Data deletion cancelled.');
      return;
    }
    // Delete all habits
    for (const habit of habits) {
      await deleteDoc(
        doc(db, 'users', user.uid, 'habits', habit.id.toString()),
      );
    }
    // Delete all reminders
    for (const reminder of reminders) {
      await deleteDoc(
        doc(db, 'users', user.uid, 'reminders', reminder.id.toString()),
      );
    }
    alert('All your data has been deleted. The app is now reset.');
  };

  return (
    <CheatMenuContext.Provider
      value={{
        habits,
        reminders,
        habitsCount,
        remindersCount,
        onResetHabits,
        onMarkAllDone,
        onClearReminders,
        onAddTestHabit,
        onAddTestReminder,
        appDate,
        setAppDate,
      }}
    >
      <div
        className="min-h-screen bg-[#fdf6e3] dark:bg-[#23272e] font-hand animate-fade-in-down"
        style={{
          background:
            'repeating-linear-gradient(0deg, var(--journal-bg, #fdf6e3) 0px, var(--journal-bg, #fdf6e3) 31px, var(--journal-line, #e0d7c3) 32px, var(--journal-bg, #fdf6e3) 33px)',
          fontFamily: 'Patrick Hand, Caveat, Gloria Hallelujah, cursive',
          minHeight: '100vh',
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
        <Layout>
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex justify-center gap-4 mb-6 mt-2">
              <button
                className={`px-4 py-2 rounded-t-lg font-semibold transition-colors focus:outline-none ${tab === 'habits' ? 'bg-sky-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
                onClick={() => setTab('habits')}
              >
                Habits
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg font-semibold transition-colors focus:outline-none ${tab === 'schedule' ? 'bg-sky-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
                onClick={() => setTab('schedule')}
              >
                Time-blocks
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg font-semibold transition-colors focus:outline-none ${tab === 'analytics' ? 'bg-sky-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
                onClick={() => setTab('analytics')}
              >
                Analytics
              </button>
              <button
                className={`px-4 py-2 rounded-t-lg font-semibold transition-colors focus:outline-none ${tab === 'journal' ? 'bg-sky-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
                onClick={() => setTab('journal')}
              >
                Journal
              </button>
            </div>
            {tab === 'habits' && (
              <HabitList appDate={appDate} setAppDate={setAppDate} />
            )}
            {tab === 'schedule' && <TimeBlockScheduler />}
            {tab === 'analytics' && <HabitAnalytics />}
            {tab === 'journal' && <DailyJournal appDate={appDate} />}
          </div>
          <DeveloperCheatMenu
            habitsCount={habitsCount}
            remindersCount={remindersCount}
            onResetHabits={onResetHabits}
            onMarkAllDone={onMarkAllDone}
            onClearReminders={onClearReminders}
            onAddTestHabit={onAddTestHabit}
            onAddTestReminder={onAddTestReminder}
            appDate={appDate}
            setAppDate={setAppDate}
            onDeleteAllData={onDeleteAllData}
          />
        </Layout>
      </div>
    </CheatMenuContext.Provider>
  );
}

function App() {
  return (
    <AuthProvider>
      <SadhanaApp />
    </AuthProvider>
  );
}

export default App;

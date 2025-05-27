import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { useAuth } from '../../firebase/AuthProvider';
import { useCheatMenu } from '../../App';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
import { RoughNotation } from 'react-rough-notation';

interface Habit {
  id: number;
  name: string;
  doneToday: boolean;
  streak: number;
  lastCompleted: string | null; // ISO date string
  history: string[]; // Array of ISO date strings when completed
}

// Reminder type
interface Reminder {
  id: number;
  hour: number;
  minute: number;
  message: string;
  sound: boolean;
  vibrate: boolean;
}

// --- App Date Override for Testing ---
interface HabitListProps {
  appDate: string | null;
  setAppDate: (date: string) => void;
}

const HabitList: React.FC<HabitListProps> = ({ appDate }) => {
  const cheatMenu = useCheatMenu();
  const { user } = useAuth();
  const [newHabit, setNewHabit] = useState('');
  const [showHistory, setShowHistory] = useState<number | null>(null);
  const [reminderForm, setReminderForm] = useState({
    hour: 20,
    minute: 0,
    message: '',
    sound: false,
    vibrate: false,
  });

  // Use cheatMenu.habits as the source of truth for habits
  const habits = cheatMenu.habits;
  const reminders = cheatMenu.reminders;

  // Update add/edit/delete logic to sync with Firestore
  const addHabit = async () => {
    // Add null check for user before using in Firestore calls
    if (newHabit.trim() && user) {
      const habit = {
        id: Date.now(),
        name: newHabit.trim(),
        doneToday: false,
        streak: 0,
        lastCompleted: null,
        history: [],
      };
      await setDoc(
        doc(db, 'users', user.uid, 'habits', habit.id.toString()),
        habit,
      );
      setNewHabit('');
    }
  };

  const editHabit = async (id: number, newName: string) => {
    const habit = habits.find((h) => h.id === id);
    if (habit) {
      await saveHabitToFirestore({ ...habit, name: newName });
    }
  };

  const deleteHabit = async (id: number) => {
    const habit = habits.find((h) => h.id === id);
    if (
      habit &&
      window.confirm(
        `Are you sure you want to delete the habit "${habit.name}"?`,
      )
    ) {
      await deleteHabitFromFirestore(id);
    }
  };

  const toggleHabit = async (id: number) => {
    const today = getToday();
    const habit = habits.find((h) => h.id === id);
    if (habit && !habit.doneToday) {
      let newStreak = habit.streak;
      if (habit.lastCompleted === getYesterday()) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
      await saveHabitToFirestore({
        ...habit,
        doneToday: true,
        streak: newStreak,
        lastCompleted: today,
        history: [...habit.history, today],
      });
    }
  };

  // Progress calculation
  const completedCount = habits.filter((h) => h.doneToday).length;
  const progress =
    habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;

  // Filter habits (all, completed, incomplete)
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all',
  );
  const filteredHabits = habits.filter((habit) => {
    if (filter === 'completed') return habit.doneToday;
    if (filter === 'incomplete') return !habit.doneToday;
    return true;
  });

  // Schedule notifications for all reminders
  useEffect(() => {
    if (typeof window === 'undefined' || Notification.permission === 'denied')
      return;
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
    const now = new Date();
    const timers: NodeJS.Timeout[] = [];
    reminders.forEach((reminder) => {
      const reminderTime = new Date();
      reminderTime.setHours(reminder.hour, reminder.minute, 0, 0);
      let msUntilReminder = reminderTime.getTime() - now.getTime();
      if (msUntilReminder < 0) msUntilReminder += 24 * 60 * 60 * 1000;
      timers.push(
        setTimeout(() => {
          if (habits.some((h) => !h.doneToday)) {
            const notif = new Notification('SADHANA Reminder', {
              body:
                reminder.message ||
                'You have unfinished habits today! Keep your streak going! 🌟',
            });
            // Sound
            if (reminder.sound) {
              const audio = new Audio(
                'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
              );
              audio.play();
            }
            // Vibration
            if (reminder.vibrate && navigator.vibrate) {
              navigator.vibrate([200, 100, 200]);
            }
            // Snooze (show browser confirm)
            notif.onclick = () => {
              if (window.confirm('Snooze this reminder for 10 minutes?')) {
                setTimeout(
                  () => {
                    new Notification('SADHANA Snoozed Reminder', {
                      body:
                        reminder.message ||
                        'You have unfinished habits today! (Snoozed)',
                    });
                    if (reminder.sound) {
                      const audio = new Audio(
                        'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
                      );
                      audio.play();
                    }
                    if (reminder.vibrate && navigator.vibrate) {
                      navigator.vibrate([200, 100, 200]);
                    }
                  },
                  10 * 60 * 1000,
                );
              }
            };
          }
        }, msUntilReminder),
      );
    });
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [habits, reminders]);

  // Reminder management handlers (Firestore)
  const addReminder = async () => {
    if (!user) return;
    const reminder = {
      id: Date.now() + Math.floor(Math.random() * 10000),
      hour: reminderForm.hour,
      minute: reminderForm.minute,
      message: reminderForm.message,
      sound: reminderForm.sound,
      vibrate: reminderForm.vibrate,
    };
    await setDoc(
      doc(db, 'users', user.uid, 'reminders', reminder.id.toString()),
      reminder,
    );
    setReminderForm({
      hour: 20,
      minute: 0,
      message: '',
      sound: false,
      vibrate: false,
    });
  };
  const deleteReminder = async (id: number) => {
    await deleteReminderFromFirestore(id);
  };
  const updateReminder = async (id: number, changes: Partial<Reminder>) => {
    const reminder = reminders.find((r) => r.id === id);
    if (reminder) {
      await saveReminderToFirestore({ ...reminder, ...changes });
    }
  };

  // Motivational quote of the day
  const quotes = [
    'Small steps every day lead to big results.',
    'Discipline is the bridge between goals and accomplishment.',
    'Consistency is more important than perfection.',
    'You don’t have to be extreme, just consistent.',
    'Success is the sum of small efforts repeated day in and day out.',
    'The secret of your future is hidden in your daily routine.',
    'Motivation gets you going, but discipline keeps you growing.',
  ];
  const todayIdx = new Date().getDate() % quotes.length;
  const quoteOfTheDay = quotes[todayIdx];
  const perfectDay = habits.length > 0 && habits.every((h) => h.doneToday);

  // Loading and error state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Firestore: Load habits and reminders for the user
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    setError(null);
    // Listen for habits
    const habitsRef = collection(db, 'users', user.uid, 'habits');
    const unsubHabits = onSnapshot(habitsRef, () => {
      setLoading(false);
    });
    // Listen for reminders
    const remindersRef = collection(db, 'users', user.uid, 'reminders');
    const unsubReminders = onSnapshot(remindersRef, () => {
      // Only use reminders from context
    });
    return () => {
      unsubHabits();
      unsubReminders();
    };
  }, [user]);

  // Firestore: Save habit changes
  const saveHabitToFirestore = async (habit: Habit) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.uid, 'habits', habit.id.toString());
    await setDoc(docRef, habit);
  };
  // Firestore: Delete habit
  const deleteHabitFromFirestore = async (id: number) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.uid, 'habits', id.toString());
    await deleteDoc(docRef);
  };
  // Firestore: Save reminder changes
  const saveReminderToFirestore = async (reminder: Reminder) => {
    if (!user) return;
    const docRef = doc(
      db,
      'users',
      user.uid,
      'reminders',
      reminder.id.toString(),
    );
    await setDoc(docRef, reminder);
  };
  // Firestore: Delete reminder
  const deleteReminderFromFirestore = async (id: number) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.uid, 'reminders', id.toString());
    await deleteDoc(docRef);
  };

  // --- Daily Reset Logic ---
  useEffect(() => {
    if (!user || habits.length === 0) return;
    const today = getToday();
    // If any habit.doneToday is true but lastCompleted is not today, reset it
    habits.forEach((habit) => {
      if (habit.doneToday && habit.lastCompleted !== today) {
        saveHabitToFirestore({
          ...habit,
          doneToday: false,
        });
      }
    });
    // eslint-disable-next-line
  }, [habits, user, appDate]);

  // --- App Date Override for Testing ---
  // getToday and getYesterday helpers (needed for logic)
  const getToday = React.useCallback(
    () => (appDate ? appDate : new Date().toISOString().slice(0, 10)),
    [appDate],
  );
  const getYesterday = React.useCallback(() => {
    const d = appDate ? new Date(appDate) : new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }, [appDate]);

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

  return (
    <div
      className="relative max-w-3xl mx-auto mt-8 p-4 md:p-10 overflow-hidden"
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pop-in {
          0% { transform: scale(0.7); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes progress {
          from { width: 0; }
          to { width: var(--tw-progress, 100%); }
        }
        .animate-fade-in { animation: fade-in 0.7s ease; }
        .animate-fade-in-down { animation: fade-in-down 0.7s cubic-bezier(.4,2,.6,1); }
        .animate-fade-in-slow { animation: fade-in-slow 1.2s ease; }
        .animate-pop-in { animation: pop-in 0.5s cubic-bezier(.4,2,.6,1); }
        .animate-wiggle { animation: wiggle 1.2s infinite alternate; }
        .animate-progress { animation: progress 1.2s cubic-bezier(.4,2,.6,1); }
      `}</style>
      {/* Notebook holes */}
      <div className="absolute left-0 top-8 flex flex-col gap-8 h-[90%] z-10">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="w-4 h-4 rounded-full shadow-inner block ml-[-28px]"
            style={{
              background: 'var(--journal-hole-bg, #e0d7c3)',
              border: '2px solid var(--journal-hole-border, #b7a77a)',
            }}
          />
        ))}
      </div>
      {/* Animated Title */}
      <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
        <span className="text-3xl md:text-4xl font-extrabold text-sky-700 dark:text-sky-300 tracking-tight drop-shadow-xl uppercase select-none flex items-center gap-2 font-hand animate-wiggle">
          <RoughNotation
            type="underline"
            show
            color="#f59e42"
            animationDuration={1200}
            padding={6}
            strokeWidth={3}
          >
            <span>📝 Your Habits</span>
          </RoughNotation>
        </span>
        <span className="text-2xl md:text-3xl select-none animate-bounce">🌱</span>
      </div>
      {/* Micro-instructions */}
      <div className="mb-2 text-center text-xs text-gray-500 dark:text-gray-300 font-hand animate-fade-in">
        <span>Tip: Click a habit name to edit. Mark as done to keep your streak! <span className="ml-1">✨</span></span>
      </div>
      {/* Motivational Quote */}
      <div className="mb-4 text-center italic text-sky-600 dark:text-sky-300 text-base font-hand animate-fade-in-slow">
        <RoughNotation
          type="highlight"
          show
          color="#fffbe6"
          animationDuration={900}
          padding={4}
          strokeWidth={2}
        >
          {quoteOfTheDay}
        </RoughNotation>
      </div>
      {/* Perfect Day Badge */}
      {perfectDay && (
        <div className="mb-4 flex justify-center animate-pop-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-400 text-white text-xs font-bold shadow font-hand animate-wiggle">
            🌟 Perfect Day! All habits completed! 🌟
          </span>
        </div>
      )}
      {/* Progress Bar */}
      <div className="mb-6 animate-fade-in">
        <div className="flex justify-between items-center mb-1 font-hand">
          <span className="text-base text-gray-700 dark:text-gray-200">
            Progress
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-300">
            {progress}%
          </span>
        </div>
        <div
          className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 border-2 border-dashed border-sky-300 shadow-inner"
          style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
        >
          <div
            className="bg-sky-400 h-3 rounded-full transition-all font-hand animate-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 font-hand animate-fade-in">
        <button
          className={`px-3 py-1 rounded-full border-2 border-dashed text-xs font-bold shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 font-hand ${
            filter === 'all'
              ? 'bg-sky-200 text-sky-900 border-sky-700 scale-110 ring-2 ring-sky-400'
              : 'bg-[#fffbe6] text-gray-900 border-sky-300 hover:bg-sky-100'
          }`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-full border-2 border-dashed text-xs font-bold shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400 font-hand ${
            filter === 'completed'
              ? 'bg-green-200 text-green-900 border-green-700 scale-110 ring-2 ring-green-400'
              : 'bg-[#fffbe6] text-gray-900 border-green-300 hover:bg-green-100'
          }`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className={`px-3 py-1 rounded-full border-2 border-dashed text-xs font-bold shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400 font-hand ${
            filter === 'incomplete'
              ? 'bg-red-200 text-red-900 border-red-700 scale-110 ring-2 ring-red-400'
              : 'bg-[#fffbe6] text-gray-900 border-red-300 hover:bg-red-100'
          }`}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
      {/* Add Habit Input */}
      <div className="flex flex-col sm:flex-row mb-6 gap-2 font-hand animate-fade-in">
        <input
          className="flex-1 rounded-l-xl px-3 py-2 border-2 border-dashed border-sky-400 bg-[#fffbe6] text-gray-900 font-hand focus:outline-none focus:ring-2 focus:ring-sky-400 transition min-w-0 shadow-md font-semibold"
          type="text"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addHabit()}
          style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
        />
        <button
          className="rounded-r-xl bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 font-bold w-full sm:w-auto shadow font-hand border-2 border-dashed border-sky-400"
          onClick={addHabit}
        >
          ➕ Add
        </button>
      </div>
      {/* Habits List */}
      <ul className="mb-8 animate-fade-in-slow">
        {filteredHabits.length === 0 && (
          <li className="text-center text-gray-500 dark:text-gray-300 font-hand">
            No habits to show.
          </li>
        )}
        {filteredHabits.map((habit) => (
          <li
            key={habit.id}
            className="flex flex-col md:flex-row items-stretch md:items-center justify-between py-3 border-b-2 border-dashed border-sky-100 last:border-b-0 gap-2 md:gap-0 font-hand bg-[#fffbe6] rounded-xl mb-2 shadow-md"
            style={{ boxShadow: '2px 2px 0 #e0d7c3' }}
          >
            <span
              className={
                habit.doneToday
                  ? 'line-through text-gray-400 dark:text-gray-400 font-hand'
                  : 'text-gray-900 dark:text-gray-100 font-hand'
              }
            >
              <input
                className="bg-transparent border-none outline-none font-semibold text-base w-auto max-w-xs dark:bg-transparent font-hand"
                value={habit.name}
                onChange={(e) => editHabit(habit.id, e.target.value)}
                disabled={habit.doneToday}
                aria-label="Edit habit name"
              />
              <span className="ml-2 text-xs text-sky-500 dark:text-sky-300 font-semibold font-hand">
                🔥 Streak: {habit.streak}
              </span>
            </span>
            <div className="flex flex-wrap gap-2 md:gap-2 items-center justify-end">
              <button
                className={`px-3 py-1 rounded-xl border-2 border-dashed font-bold transition-colors w-full md:w-auto font-hand shadow ${
                  habit.doneToday
                    ? 'bg-green-400 text-white cursor-not-allowed opacity-60 border-green-700'
                    : 'bg-[#fffbe6] text-gray-900 border-sky-300 hover:bg-sky-100 border-sky-400'
                }`}
                onClick={() => toggleHabit(habit.id)}
                disabled={habit.doneToday}
              >
                {habit.doneToday ? '✅ Done!' : 'Mark as Done'}
              </button>
              <button
                className="px-2 py-1 rounded-xl bg-red-400 hover:bg-red-500 text-white text-xs font-bold w-full md:w-auto font-hand border-2 border-dashed border-red-400 shadow"
                onClick={() => deleteHabit(habit.id)}
                title="Delete habit"
              >
                🗑️
              </button>
              <button
                className="px-2 py-1 rounded-xl bg-indigo-400 hover:bg-indigo-500 text-white text-xs font-bold w-full md:w-auto font-hand border-2 border-dashed border-indigo-400 shadow"
                onClick={() => setShowHistory(habit.id)}
                title="View history"
              >
                📅
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Paper lines overlay for notebook effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 animate-fade-in"
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
      {/* Habit History Modal */}
      {showHistory !== null && (
        <HabitHistoryModal
          habit={habits.find((h) => h.id === showHistory)!}
          onClose={() => setShowHistory(null)}
          appDate={appDate}
          getToday={getToday}
        />
      )}
    </div>
  );
};

// Calendar/History Modal
const HabitHistoryModal: React.FC<{
  habit: Habit;
  onClose: () => void;
  appDate?: string | null;
  getToday?: () => string;
}> = ({ habit, onClose, appDate, getToday }) => {
  // Build a set of completed dates for quick lookup
  const completedSet = new Set(habit.history);
  // Show the last 30 days
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = appDate ? new Date(appDate) : new Date();
    d.setDate(d.getDate() - (29 - i));
    return d;
  });
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-2 sm:p-0 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="text-lg font-bold mb-4 text-center">
          {habit.name} - Last 30 Days
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {days.map((date) => {
            const iso = date.toISOString().slice(0, 10);
            const isToday = getToday ? iso === getToday() : false;
            return (
              <div
                key={iso}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold border transition-colors
                  ${
                    completedSet.has(iso)
                      ? 'bg-green-400 text-white border-green-500'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600'
                  }
                  ${isToday ? 'ring-2 ring-sky-400' : ''}
                `}
                title={iso}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Green = completed, Gray = not completed, Blue ring = today
        </div>
      </div>
    </div>
  );
};

export default HabitList;

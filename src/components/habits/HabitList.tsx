import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { useAuth } from '../../firebase/AuthProvider';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

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

const getToday = () => new Date().toISOString().slice(0, 10);

const HabitList: React.FC = () => {
  const { user } = useAuth();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [newHabit, setNewHabit] = useState('');
  const [showHistory, setShowHistory] = useState<number | null>(null);
  // Add reminderForm state for new reminder input
  const [reminderForm, setReminderForm] = useState({
    hour: 20,
    minute: 0,
    message: '',
    sound: false,
    vibrate: false,
  });

  // Update add/edit/delete logic to sync with Firestore
  const addHabit = async () => {
    if (newHabit.trim()) {
      const habit: Habit = {
        id: Date.now(),
        name: newHabit.trim(),
        doneToday: false,
        streak: 0,
        lastCompleted: null,
        history: [],
      };
      await saveHabitToFirestore(habit);
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

  function getYesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }

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
    const reminder: Reminder = {
      id: Date.now() + Math.floor(Math.random() * 10000),
      hour: reminderForm.hour,
      minute: reminderForm.minute,
      message: reminderForm.message,
      sound: reminderForm.sound,
      vibrate: reminderForm.vibrate,
    };
    await saveReminderToFirestore(reminder);
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
      setLoading(false);
    });
    // Listen for reminders
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

  // Developer cheat menu handlers
  const onResetHabits = async () => {
    for (const habit of habits) {
      await saveHabitToFirestore({
        ...habit,
        doneToday: false,
        streak: 0,
        lastCompleted: null,
        history: [],
      });
    }
  };
  const onMarkAllDone = async () => {
    const today = getToday();
    for (const habit of habits) {
      await saveHabitToFirestore({
        ...habit,
        doneToday: true,
        streak: habit.streak + 1,
        lastCompleted: today,
        history: [...habit.history, today],
      });
    }
  };
  const onClearReminders = async () => {
    for (const reminder of reminders) {
      await deleteReminderFromFirestore(reminder.id);
    }
  };
  const onAddTestHabit = async () => {
    const habit: Habit = {
      id: Date.now(),
      name: 'Test Habit ' + Math.floor(Math.random() * 1000),
      doneToday: false,
      streak: 0,
      lastCompleted: null,
      history: [],
    };
    await saveHabitToFirestore(habit);
  };
  const onAddTestReminder = async () => {
    const reminder: Reminder = {
      id: Date.now() + Math.floor(Math.random() * 10000),
      hour: 12,
      minute: 0,
      message: 'Test Reminder',
      sound: true,
      vibrate: true,
    };
    await saveReminderToFirestore(reminder);
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 mt-4 sm:mt-6 transition-all text-gray-900 dark:text-gray-100">
      {/* Loading and error states */}
      {loading && (
        <div className="mb-4 text-center text-sky-500 dark:text-sky-300 font-semibold">
          Loading...
        </div>
      )}
      {error && (
        <div className="mb-4 text-center text-red-500 dark:text-red-400 font-semibold">
          {error}
        </div>
      )}
      {/* Motivational Quote */}
      <div className="mb-4 text-center">
        <span className="italic text-sky-600 dark:text-sky-300 text-sm">
          {quoteOfTheDay}
        </span>
      </div>
      {/* Perfect Day Badge */}
      {perfectDay && (
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow">
            🌟 Perfect Day! All habits completed! 🌟
          </span>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        Your Habits
      </h2>
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Progress
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-300">
            {progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-sky-400 h-2.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          className={`px-2 py-1 rounded text-xs font-semibold ${filter === 'all' ? 'bg-sky-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`px-2 py-1 rounded text-xs font-semibold ${filter === 'completed' ? 'bg-green-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className={`px-2 py-1 rounded text-xs font-semibold ${filter === 'incomplete' ? 'bg-red-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
      <div className="flex flex-col sm:flex-row mb-4 gap-2">
        <input
          className="flex-1 rounded-l sm:rounded-l px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none min-w-0"
          type="text"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addHabit()}
        />
        <button
          className="rounded-r sm:rounded-r bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 font-semibold w-full sm:w-auto"
          onClick={addHabit}
        >
          Add
        </button>
      </div>
      {/* Reminders Management */}
      <div className="mb-4">
        <h3 className="text-sm font-bold mb-2 text-center">Reminders</h3>
        <ul className="mb-2">
          {reminders.map((reminder) => (
            <li
              key={reminder.id}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-1"
            >
              <input
                type="time"
                value={`${reminder.hour.toString().padStart(2, '0')}:${reminder.minute.toString().padStart(2, '0')}`}
                onChange={(e) => {
                  const [h, m] = e.target.value.split(':').map(Number);
                  updateReminder(reminder.id, { hour: h, minute: m });
                }}
                className="rounded px-2 py-1 text-xs border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none w-full sm:w-20"
              />
              <input
                type="text"
                placeholder="Message"
                value={reminder.message}
                onChange={(e) =>
                  updateReminder(reminder.id, { message: e.target.value })
                }
                className="rounded px-2 py-1 text-xs border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none flex-1 min-w-0"
              />
              <div className="flex gap-2">
                <label className="flex items-center text-xs gap-1 text-gray-900 dark:text-gray-100">
                  <input
                    type="checkbox"
                    checked={reminder.sound}
                    onChange={(e) =>
                      updateReminder(reminder.id, { sound: e.target.checked })
                    }
                  />
                  Sound
                </label>
                <label className="flex items-center text-xs gap-1 text-gray-900 dark:text-gray-100">
                  <input
                    type="checkbox"
                    checked={reminder.vibrate}
                    onChange={(e) =>
                      updateReminder(reminder.id, { vibrate: e.target.checked })
                    }
                  />
                  Vibrate
                </label>
              </div>
              <button
                className="px-2 py-1 rounded bg-red-400 hover:bg-red-500 text-white text-xs font-semibold w-full md:w-auto"
                onClick={() => deleteReminder(reminder.id)}
                title="Delete reminder"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
        {/* Add new reminder form */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-sm">
          <input
            type="time"
            value={`${reminderForm.hour.toString().padStart(2, '0')}:${reminderForm.minute.toString().padStart(2, '0')}`}
            onChange={(e) => {
              const [h, m] = e.target.value.split(':').map(Number);
              setReminderForm((f) => ({ ...f, hour: h, minute: m }));
            }}
            className="rounded px-2 py-2 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 transition w-full sm:w-20"
          />
          <input
            type="text"
            placeholder="Message"
            value={reminderForm.message}
            onChange={(e) =>
              setReminderForm((f) => ({ ...f, message: e.target.value }))
            }
            className="rounded px-2 py-2 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 transition flex-1 min-w-0"
          />
          <div className="flex gap-3 items-center px-1">
            <label className="flex items-center text-xs gap-1 cursor-pointer select-none text-gray-900 dark:text-gray-100">
              <input
                type="checkbox"
                checked={reminderForm.sound}
                onChange={(e) =>
                  setReminderForm((f) => ({ ...f, sound: e.target.checked }))
                }
                className="accent-sky-400 focus:ring-2 focus:ring-sky-400"
              />
              <span>Sound</span>
            </label>
            <label className="flex items-center text-xs gap-1 cursor-pointer select-none text-gray-900 dark:text-gray-100">
              <input
                type="checkbox"
                checked={reminderForm.vibrate}
                onChange={(e) =>
                  setReminderForm((f) => ({ ...f, vibrate: e.target.checked }))
                }
                className="accent-sky-400 focus:ring-2 focus:ring-sky-400"
              />
              <span>Vibrate</span>
            </label>
          </div>
          <button
            className="px-3 py-2 rounded bg-sky-400 hover:bg-sky-500 focus:ring-2 focus:ring-sky-400 text-white text-xs font-semibold w-full sm:w-auto transition shadow"
            onClick={addReminder}
            title="Add reminder"
          >
            +
          </button>
        </div>
      </div>
      <ul>
        {filteredHabits.length === 0 && (
          <li className="text-center text-gray-500 dark:text-gray-300">
            No habits to show.
          </li>
        )}
        {filteredHabits.map((habit) => (
          <li
            key={habit.id}
            className="flex flex-col md:flex-row items-stretch md:items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0 gap-2 md:gap-0"
          >
            <span
              className={
                habit.doneToday
                  ? 'line-through text-gray-400 dark:text-gray-400'
                  : 'text-gray-900 dark:text-gray-100'
              }
            >
              <input
                className="bg-transparent border-none outline-none font-semibold text-base w-auto max-w-xs dark:bg-transparent"
                value={habit.name}
                onChange={(e) => editHabit(habit.id, e.target.value)}
                disabled={habit.doneToday}
                aria-label="Edit habit name"
              />
              <span className="ml-2 text-xs text-sky-500 dark:text-sky-300 font-semibold">
                Streak: {habit.streak}
              </span>
            </span>
            <div className="flex flex-wrap gap-2 md:gap-2 items-center justify-end">
              <button
                className={`px-3 py-1 rounded font-semibold transition-colors w-full md:w-auto ${
                  habit.doneToday
                    ? 'bg-green-400 text-white cursor-not-allowed opacity-60'
                    : 'bg-gray-200 hover:bg-sky-400 hover:text-white dark:bg-gray-700 dark:hover:bg-sky-500 dark:text-gray-100'
                }`}
                onClick={() => toggleHabit(habit.id)}
                disabled={habit.doneToday}
              >
                {habit.doneToday ? 'Done!' : 'Mark as Done'}
              </button>
              <button
                className="px-2 py-1 rounded bg-red-400 hover:bg-red-500 text-white text-xs font-semibold w-full md:w-auto"
                onClick={() => deleteHabit(habit.id)}
                title="Delete habit"
              >
                Delete
              </button>
              <button
                className="px-2 py-1 rounded bg-indigo-400 hover:bg-indigo-500 text-white text-xs font-semibold w-full md:w-auto"
                onClick={() => setShowHistory(habit.id)}
                title="View history"
              >
                History
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showHistory !== null && (
        <HabitHistoryModal
          habit={habits.find((h) => h.id === showHistory)!}
          onClose={() => setShowHistory(null)}
        />
      )}
      <DeveloperCheatMenu
        habits={habits}
        reminders={reminders}
        onResetHabits={onResetHabits}
        onMarkAllDone={onMarkAllDone}
        onClearReminders={onClearReminders}
        onAddTestHabit={onAddTestHabit}
        onAddTestReminder={onAddTestReminder}
      />
    </div>
  );
};

// Calendar/History Modal
const HabitHistoryModal: React.FC<{ habit: Habit; onClose: () => void }> = ({
  habit,
  onClose,
}) => {
  // Build a set of completed dates for quick lookup
  const completedSet = new Set(habit.history);
  // Show the last 30 days
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
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
            const isToday = iso === getToday();
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

// DeveloperCheatMenu component for quick testing/dev tools
const DeveloperCheatMenu: React.FC<{
  habits: Habit[];
  reminders: Reminder[];
  onResetHabits: () => void;
  onMarkAllDone: () => void;
  onClearReminders: () => void;
  onAddTestHabit: () => void;
  onAddTestReminder: () => void;
}> = ({
  habits,
  reminders,
  onResetHabits,
  onMarkAllDone,
  onClearReminders,
  onAddTestHabit,
  onAddTestReminder,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-full">
      <button
        className="bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-sky-500 transition"
        onClick={() => setOpen((o) => !o)}
        title="Developer Cheat Menu"
      >
        🛠️
      </button>
      {open && (
        <div className="mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 w-72 max-w-xs border border-gray-300 dark:border-gray-700">
          <div className="font-bold mb-2 text-sky-600 dark:text-sky-300">
            Developer Cheat Menu
          </div>
          <div className="mb-2 text-xs text-gray-500">
            Quick test/dev actions
          </div>
          <button
            className="w-full mb-1 px-2 py-1 rounded bg-sky-400 hover:bg-sky-500 text-white text-xs font-semibold"
            onClick={onResetHabits}
          >
            Reset All Habits
          </button>
          <button
            className="w-full mb-1 px-2 py-1 rounded bg-green-400 hover:bg-green-500 text-white text-xs font-semibold"
            onClick={onMarkAllDone}
          >
            Mark All Done
          </button>
          <button
            className="w-full mb-1 px-2 py-1 rounded bg-indigo-400 hover:bg-indigo-500 text-white text-xs font-semibold"
            onClick={onAddTestHabit}
          >
            Add Test Habit
          </button>
          <button
            className="w-full mb-1 px-2 py-1 rounded bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-semibold"
            onClick={onAddTestReminder}
          >
            Add Test Reminder
          </button>
          <button
            className="w-full mb-1 px-2 py-1 rounded bg-red-400 hover:bg-red-500 text-white text-xs font-semibold"
            onClick={onClearReminders}
          >
            Clear All Reminders
          </button>
          <div className="mt-2 text-xs text-gray-700 dark:text-gray-300">
            <div>Habits: {habits.length}</div>
            <div>Reminders: {reminders.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitList;

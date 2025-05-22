import React, { useState } from 'react';

interface DeveloperCheatMenuProps {
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

const DeveloperCheatMenu: React.FC<DeveloperCheatMenuProps> = ({
  habitsCount,
  remindersCount,
  onResetHabits,
  onMarkAllDone,
  onClearReminders,
  onAddTestHabit,
  onAddTestReminder,
  appDate,
  setAppDate,
}) => {
  const [open, setOpen] = useState(false);
  const [dateInput, setDateInput] = useState(
    appDate || new Date().toISOString().slice(0, 10),
  );
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
            <div>Habits: {habitsCount}</div>
            <div>Reminders: {remindersCount}</div>
          </div>
          <div className="mt-4">
            <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">
              Set App Date (for testing):
            </label>
            <input
              type="date"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="rounded px-2 py-1 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none w-full"
            />
            <button
              className="mt-2 w-full px-2 py-1 rounded bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold"
              onClick={() => setAppDate(dateInput)}
            >
              Set App Date
            </button>
            <button
              className="mt-1 w-full px-2 py-1 rounded bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs font-semibold"
              onClick={() => {
                setAppDate('');
                setDateInput(new Date().toISOString().slice(0, 10));
              }}
            >
              Reset to Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperCheatMenu;

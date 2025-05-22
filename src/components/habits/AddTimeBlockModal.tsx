import React, { useState } from 'react';
import { TimeBlock } from './TimeBlockCard';

interface AddTimeBlockModalProps {
  open: boolean;
  initial?: Partial<TimeBlock>;
  onSave: (block: TimeBlock) => void;
  onClose: () => void;
}

const defaultColors = [
  '#FFD700', // gold
  '#87CEEB', // sky blue
  '#90EE90', // light green
  '#FFB6C1', // light pink
  '#FFA07A', // light salmon
];
const defaultIcons = ['🌅', '📘', '💪', '🧘', '📝', '🍎', '🌙'];

const AddTimeBlockModal: React.FC<AddTimeBlockModalProps> = ({ open, initial = {}, onSave, onClose }) => {
  const [title, setTitle] = useState(initial.title || '');
  const [startTime, setStartTime] = useState(initial.startTime || '06:00');
  const [endTime, setEndTime] = useState(initial.endTime || '07:00');
  const [color, setColor] = useState(initial.color || defaultColors[0]);
  const [icon, setIcon] = useState(initial.icon || defaultIcons[0]);
  const [notes, setNotes] = useState(initial.notes || '');
  const [type, setType] = useState(initial.type || 'routine');
  const [repeat, setRepeat] = useState<'none' | 'daily' | 'weekly'>(initial.repeat || 'none');

  if (!open) return null;

  const handleSave = () => {
    if (!title.trim()) return;
    onSave({
      id: initial.id || Date.now().toString(),
      title,
      startTime,
      endTime,
      color,
      icon,
      notes,
      type,
      completed: initial.completed || false,
      repeat,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 text-2xl font-bold transition-colors" aria-label="Close" onClick={onClose}>×</button>
        <h3 className="text-2xl font-extrabold mb-6 text-center text-sky-500 dark:text-sky-300 tracking-tight drop-shadow">Add Time Block</h3>
        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">Title</label>
          <input
            className="w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base shadow-sm transition"
            placeholder="e.g. Morning Ritual"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">Start</label>
            <input type="time" className="w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm transition" value={startTime} onChange={e => setStartTime(e.target.value)} />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">End</label>
            <input type="time" className="w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm transition" value={endTime} onChange={e => setEndTime(e.target.value)} />
          </div>
        </div>
        <div className="mb-4 flex gap-3 items-center">
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-200">Color</label>
          <select value={color} onChange={e => setColor(e.target.value)} className="rounded-lg px-2 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm transition">
            {defaultColors.map(c => (
              <option key={c} value={c} style={{ backgroundColor: c }}>{c}</option>
            ))}
          </select>
          <label className="block text-xs font-semibold ml-2 text-gray-700 dark:text-gray-200">Icon</label>
          <select value={icon} onChange={e => setIcon(e.target.value)} className="rounded-lg px-2 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm transition">
            {defaultIcons.map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-200">Notes</label>
          <input
            className="w-full rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base shadow-sm transition"
            placeholder="e.g. Gratitude, water, light"
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
        </div>
        <div className="mb-4 flex gap-3 items-center">
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-200">Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="rounded-lg px-2 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm transition">
            <option value="routine">Routine</option>
            <option value="study">Study</option>
            <option value="work">Work</option>
            <option value="health">Health</option>
            <option value="reflection">Reflection</option>
            <option value="other">Other</option>
          </select>
          <label className="block text-xs font-semibold ml-2 text-gray-700 dark:text-gray-200">Repeat</label>
          <select value={repeat} onChange={e => setRepeat(e.target.value as any)} className="rounded-lg px-2 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-sm transition">
            <option value="none">None</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        <button className="w-full mt-4 px-3 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white text-base font-bold shadow-lg transition-all duration-200" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTimeBlockModal;

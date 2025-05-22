import React, { useState, useEffect } from 'react';
import TimeBlockCard, { TimeBlock } from './TimeBlockCard';
import AddTimeBlockModal from './AddTimeBlockModal';
import { db } from '../../firebase/firebase';
import { useAuth } from '../../firebase/AuthProvider';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

const TimeBlockScheduler: React.FC = () => {
  const { user } = useAuth();
  const [blocks, setBlocks] = useState<TimeBlock[]>([]);
  const [selectedDate, setSelectedDate] = useState(() =>
    new Date().toISOString().slice(0, 10),
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [editBlock, setEditBlock] = useState<TimeBlock | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [overlapError, setOverlapError] = useState<string | null>(null);

  // Load blocks from Firestore for selected date
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    setError(null);
    const docRef = doc(db, 'users', user.uid, 'schedule', selectedDate);
    const unsub = onSnapshot(
      docRef,
      (snapshot) => {
        const data = snapshot.data();
        setBlocks(data?.blocks || []);
        setLoading(false);
      },
      () => {
        setError('Failed to load schedule.');
        setLoading(false);
      },
    );
    return () => unsub();
  }, [user, selectedDate]);

  // Save blocks to Firestore for selected date
  const saveBlocks = async (newBlocks: TimeBlock[]) => {
    if (!user) return;
    try {
      setError(null);
      const docRef = doc(db, 'users', user.uid, 'schedule', selectedDate);
      await setDoc(docRef, {
        userId: user.uid,
        date: selectedDate,
        blocks: newBlocks,
      });
    } catch {
      setError('Failed to save schedule.');
    }
  };

  // Overlap validation helper
  function isOverlap(newBlock: TimeBlock, ignoreId?: string) {
    const toMinutes = (t: string) => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    };
    const newStart = toMinutes(newBlock.startTime);
    const newEnd = toMinutes(newBlock.endTime);
    return blocks.some((b) => {
      if (ignoreId && b.id === ignoreId) return false;
      const bStart = toMinutes(b.startTime);
      const bEnd = toMinutes(b.endTime);
      return newStart < bEnd && newEnd > bStart;
    });
  }

  // Add, edit, delete, toggle complete handlers
  const handleAdd = async (block: TimeBlock) => {
    setOverlapError(null);
    if (isOverlap(block)) {
      setOverlapError('Block overlaps with another.');
      return;
    }
    const newBlocks = [...blocks, block];
    setBlocks(newBlocks);
    await saveBlocks(newBlocks);
  };
  const handleEdit = async (block: TimeBlock) => {
    setOverlapError(null);
    if (isOverlap(block, block.id)) {
      setOverlapError('Block overlaps with another.');
      return;
    }
    const newBlocks = blocks.map((x) => (x.id === block.id ? block : x));
    setBlocks(newBlocks);
    await saveBlocks(newBlocks);
  };
  const handleDelete = async (id: string) => {
    setOverlapError(null);
    const newBlocks = blocks.filter((x) => x.id !== id);
    setBlocks(newBlocks);
    await saveBlocks(newBlocks);
  };
  const handleToggleComplete = async (id: string) => {
    setOverlapError(null);
    const newBlocks = blocks.map((x) =>
      x.id === id ? { ...x, completed: !x.completed } : x,
    );
    setBlocks(newBlocks);
    await saveBlocks(newBlocks);
  };

  // For editing
  const openEdit = (block: TimeBlock) => {
    setEditBlock(block);
    setModalOpen(true);
  };

  // Progress bar calculation
  const completedCount = blocks.filter((b) => b.completed).length;
  const progress =
    blocks.length > 0 ? Math.round((completedCount / blocks.length) * 100) : 0;

  // Current time marker (in minutes since 00:00)
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">🗓️</span>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="rounded px-2 py-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
          />
        </div>
        <button
          className="px-3 py-2 rounded bg-sky-400 hover:bg-sky-500 text-white text-xs font-semibold"
          onClick={() => {
            setEditBlock(null);
            setModalOpen(true);
          }}
        >
          ➕ Add Block
        </button>
      </div>
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
      {overlapError && (
        <div className="mb-4 text-center text-red-500 dark:text-red-400 font-semibold">
          {overlapError}
        </div>
      )}
      <div className="relative min-h-[600px] bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-y-auto">
        {/* Current time marker */}
        <div
          className="absolute left-0 right-0 h-0.5 bg-sky-500 animate-pulse"
          style={{ top: `${((nowMinutes - 300) / (1140 - 300)) * 100}%` }}
        />
        {/* Time blocks */}
        {blocks
          .sort((a, b) => a.startTime.localeCompare(b.startTime))
          .map((block) => (
            <TimeBlockCard
              key={block.id}
              block={block}
              onEdit={openEdit}
              onDelete={handleDelete}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        {blocks.length === 0 && !loading && (
          <div className="text-center text-gray-400 mt-8">
            No blocks for this day.
          </div>
        )}
      </div>
      <AddTimeBlockModal
        open={modalOpen}
        initial={editBlock || {}}
        onSave={editBlock ? handleEdit : handleAdd}
        onClose={() => {
          setModalOpen(false);
          setEditBlock(null);
        }}
      />
    </div>
  );
};

export default TimeBlockScheduler;

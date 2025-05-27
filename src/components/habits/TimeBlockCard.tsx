import React from 'react';

export interface TimeBlock {
  id: string;
  startTime: string; // 'HH:mm'
  endTime: string; // 'HH:mm'
  title: string;
  type: string; // e.g., 'routine', 'study'
  completed: boolean;
  color: string;
  icon: string;
  notes?: string;
  repeat?: 'none' | 'daily' | 'weekly';
}

interface TimeBlockCardProps {
  block: TimeBlock;
  onEdit: (block: TimeBlock) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TimeBlockCard: React.FC<TimeBlockCardProps> = ({
  block,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <div
      className={
        'flex items-center gap-2 p-2 rounded-lg shadow mb-2 font-hand animate-fade-in' +
        (block.completed ? ' opacity-60' : '')
      }
      style={{
        backgroundColor: block.color,
        border: '2px dashed #222',
        boxShadow: '2px 2px 0 #e0d7c3',
        fontFamily: 'Patrick Hand, Caveat, Gloria Hallelujah, cursive',
      }}
    >
      <span className="text-2xl mr-2 animate-wiggle" title={block.type}>
        {block.icon}
      </span>
      <div className="flex-1">
        <div className="font-bold text-base animate-fade-in-down">
          {block.title}
        </div>
        <div className="text-xs text-gray-700 animate-fade-in">
          {block.startTime} - {block.endTime}
        </div>
        {block.notes && (
          <div className="text-xs text-gray-600 italic animate-fade-in-slow">
            {block.notes}
          </div>
        )}
      </div>
      <button
        className={`px-2 py-1 rounded text-xs font-semibold font-hand border-2 border-dashed shadow animate-pop-in ${block.completed ? 'bg-green-600 text-white border-green-800' : 'bg-gray-200 text-gray-800 border-gray-400 hover:bg-green-100'}`}
        onClick={() => onToggleComplete(block.id)}
        title="Mark as done"
      >
        {block.completed ? '✓' : 'Mark'}
      </button>
      <button
        className="px-2 py-1 rounded bg-yellow-300 text-xs font-semibold font-hand border-2 border-dashed border-yellow-400 shadow animate-fade-in"
        onClick={() => onEdit(block)}
        title="Edit"
      >
        ✎
      </button>
      <button
        className="px-2 py-1 rounded bg-red-400 text-white text-xs font-semibold font-hand border-2 border-dashed border-red-400 shadow animate-fade-in"
        onClick={() => onDelete(block.id)}
        title="Delete"
      >
        ×
      </button>
    </div>
  );
};

export default TimeBlockCard;

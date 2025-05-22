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
      className="flex items-center gap-2 p-2 rounded-lg shadow mb-2"
      style={{ backgroundColor: block.color }}
    >
      <span className="text-2xl mr-2">{block.icon}</span>
      <div className="flex-1">
        <div className="font-bold text-base">{block.title}</div>
        <div className="text-xs text-gray-700">
          {block.startTime} - {block.endTime}
        </div>
        {block.notes && (
          <div className="text-xs text-gray-600 italic">{block.notes}</div>
        )}
      </div>
      <button
        className={`px-2 py-1 rounded text-xs font-semibold ${block.completed ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => onToggleComplete(block.id)}
        title="Mark as done"
      >
        {block.completed ? '✓' : 'Mark'}
      </button>
      <button
        className="px-2 py-1 rounded bg-yellow-300 text-xs font-semibold"
        onClick={() => onEdit(block)}
        title="Edit"
      >
        ✎
      </button>
      <button
        className="px-2 py-1 rounded bg-red-400 text-white text-xs font-semibold"
        onClick={() => onDelete(block.id)}
        title="Delete"
      >
        ×
      </button>
    </div>
  );
};

export default TimeBlockCard;

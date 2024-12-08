import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Trash2, Clock } from 'lucide-react';
import { Class } from '../types/schedule';
import { useScheduleStore } from '../store/useScheduleStore';

interface ClassCardProps {
  classItem: Class;
  day: number;
  time: string;
}

export const ClassCard: React.FC<ClassCardProps> = ({ classItem, day, time }) => {
  const deleteClass = useScheduleStore((state) => state.deleteClass);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${classItem.id}-${day}-${time}`,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 50,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`class-card ${classItem.color} cursor-move group relative`}
    >
      <div className="text-sm font-medium text-gray-800">{classItem.name}</div>
      <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
        <Clock size={12} />
        {classItem.startTime} - {classItem.endTime}
      </div>
      <div className="text-xs text-gray-500 mt-1">{classItem.instructor}</div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteClass(classItem.id);
        }}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 size={16} className="text-gray-400 hover:text-red-500" />
      </button>
    </div>
  );
};
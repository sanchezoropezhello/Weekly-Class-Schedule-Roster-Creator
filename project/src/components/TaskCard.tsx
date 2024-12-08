import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Trash2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Task } from '../types/schedule';
import { useScheduleStore } from '../store/useScheduleStore';

interface TaskCardProps {
  task: Task;
  day: number;
  time: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, day, time }) => {
  const deleteTask = useScheduleStore((state) => state.deleteTask);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${task.id}-${day}-${time}`,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`task-card ${task.color} group`}
    >
      <div className="text-white font-medium">{task.name}</div>
      <div className="text-white/80 text-sm flex items-center gap-1 mt-1">
        <Clock className="w-3 h-3" />
        {task.startTime} - {task.endTime}
      </div>
      <div className="text-white/60 text-sm mt-1">{task.description}</div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="w-4 h-4 text-white/60 hover:text-white" />
      </button>
    </motion.div>
  );
};
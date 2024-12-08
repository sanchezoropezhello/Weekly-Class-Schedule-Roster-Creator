import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface TimeSlotDropZoneProps {
  id: string;
  children: React.ReactNode;
}

export const TimeSlotDropZone: React.FC<TimeSlotDropZoneProps> = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="time-slot relative hover:bg-white/5 transition-colors"
    >
      {children}
    </div>
  );
};
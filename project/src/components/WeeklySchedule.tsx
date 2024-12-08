import React from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { useScheduleStore } from '../store/useScheduleStore';
import { getWeekDays, getTimeSlots } from '../utils/helpers';
import { WeeklyHeader } from './WeeklyHeader';
import { TimeColumn } from './TimeColumn';
import { DayColumn } from './DayColumn';

export const WeeklySchedule: React.FC = () => {
  const updateTaskPosition = useScheduleStore((state) => state.updateTaskPosition);
  const weekDays = getWeekDays();
  const timeSlots = getTimeSlots();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const [taskId, currentDay, currentTime] = active.id.toString().split('-');
    const [newDay, newTime] = over.id.toString().split('-');

    updateTaskPosition(taskId, parseInt(newDay), newTime);
  };

  return (
    <div className="glass-card overflow-hidden">
      <WeeklyHeader weekDays={weekDays} />
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="flex">
              <TimeColumn timeSlots={timeSlots} />
              {weekDays.map((day) => (
                <DayColumn key={day.dayOfWeek} day={day} timeSlots={timeSlots} />
              ))}
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { WeekDay } from '../types/schedule';
import { TimeSlotDropZone } from './TimeSlotDropZone';
import { TaskCard } from './TaskCard';
import { useScheduleStore } from '../store/useScheduleStore';

interface DayColumnProps {
  day: WeekDay;
  timeSlots: string[];
}

export const DayColumn: React.FC<DayColumnProps> = ({ day, timeSlots }) => {
  const tasks = useScheduleStore((state) => state.tasks);

  return (
    <div className="flex-1">
      {timeSlots.map((time) => (
        <TimeSlotDropZone key={`${day.dayOfWeek}-${time}`} id={`${day.dayOfWeek}-${time}`}>
          {tasks
            .filter((t) => t.dayOfWeek === day.dayOfWeek && t.startTime === time)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                day={day.dayOfWeek}
                time={time}
              />
            ))}
        </TimeSlotDropZone>
      ))}
    </div>
  );
};
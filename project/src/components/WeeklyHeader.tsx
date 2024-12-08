import React from 'react';
import { WeekDay } from '../types/schedule';

interface WeeklyHeaderProps {
  weekDays: WeekDay[];
}

export const WeeklyHeader: React.FC<WeeklyHeaderProps> = ({ weekDays }) => {
  return (
    <div className="grid grid-cols-8 border-b border-white/10">
      <div className="p-4">
        <span className="text-white/60 text-sm font-medium">Time</span>
      </div>
      {weekDays.map((day) => (
        <div key={day.dayOfWeek} className="p-4">
          <span className="text-white/60 text-sm font-medium">
            {day.shortName}
          </span>
          <br />
          <span className="text-white/40 text-xs">
            {day.date.toLocaleDateString()}
          </span>
        </div>
      ))}
    </div>
  );
};
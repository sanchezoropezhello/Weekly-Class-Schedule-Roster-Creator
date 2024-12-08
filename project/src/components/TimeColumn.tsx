import React from 'react';

interface TimeColumnProps {
  timeSlots: string[];
}

export const TimeColumn: React.FC<TimeColumnProps> = ({ timeSlots }) => {
  return (
    <div className="w-24 flex-shrink-0">
      {timeSlots.map((time) => (
        <div key={time} className="time-slot">
          <span className="text-sm text-white/60">{time}</span>
        </div>
      ))}
    </div>
  );
};
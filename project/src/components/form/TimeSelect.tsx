import React from 'react';
import { getTimeSlots } from '../../utils/helpers';

interface TimeSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const TimeSelect: React.FC<TimeSelectProps> = ({ label, value, onChange }) => {
  const timeSlots = getTimeSlots();

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};
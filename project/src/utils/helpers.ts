import { format, addDays, startOfWeek } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const getTimeSlots = () => {
  const slots = [];
  for (let hour = 7; hour <= 22; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

export const getCurrentPSTTime = () => {
  const timeZone = 'America/Los_Angeles';
  const utcDate = new Date();
  return utcToZonedTime(utcDate, timeZone);
};

export const getWeekDays = () => {
  const today = getCurrentPSTTime();
  const weekStart = startOfWeek(today);
  
  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(weekStart, i);
    return {
      date,
      name: format(date, 'EEEE'),
      shortName: format(date, 'EEE'),
      dayOfWeek: i,
    };
  });
};

export const generateTaskColor = () => {
  const colors = [
    'bg-blue-500/20',
    'bg-purple-500/20',
    'bg-pink-500/20',
    'bg-indigo-500/20',
    'bg-teal-500/20',
    'bg-emerald-500/20',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
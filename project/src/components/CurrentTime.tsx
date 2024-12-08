import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { getCurrentPSTTime } from '../utils/helpers';

export const CurrentTime: React.FC = () => {
  const [time, setTime] = useState(getCurrentPSTTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentPSTTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-white/60">
      <Clock className="w-4 h-4" />
      <span className="text-sm">
        {time.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
        {' PST'}
      </span>
    </div>
  );
};
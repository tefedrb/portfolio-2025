import { useEffect, useState } from 'react';
import './Clock.css';
import { getFormattedTime } from './utils/clock-utils';

const Clock = () => {
  const [time, setTime] = useState(getFormattedTime());
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = getFormattedTime();
      if (currentTime !== time) {
        setTime(currentTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="clock">
      <div className="clock-text">
        {time}
      </div>
    </div>
  );
};

export default Clock;
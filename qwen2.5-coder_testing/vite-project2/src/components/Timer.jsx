import { useState, useEffect } from 'react';
import '/src/styles/Timer.css';

const Timer = ({ startTime, endTime, wpm }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (startTime && !endTime) {
      intervalId = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);

  return (
    <div className="timer">
      <div className="time">Time: {elapsedTime}s</div>
      {endTime && <div className="wpm">WPM: {wpm}</div>}
    </div>
  );
};

export default Timer;

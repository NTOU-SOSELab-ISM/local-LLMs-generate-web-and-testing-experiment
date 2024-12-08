import { useState, useEffect, useCallback } from 'react';
import '../styles/Timer.css';

const Timer = ({ isStarted, isFinished, totalWords }) => {
  const [time, setTime] = useState(0);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    let interval;
    if (isStarted && !isFinished) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    if (isFinished) {
      clearInterval(interval);
      // 计算 WPM：(字数 / 5) / (时间 / 60)
      const minutes = time / 60;
      const wordsPerMinute = Math.round((totalWords / 5) / minutes);
      setWpm(wordsPerMinute);
    }

    return () => clearInterval(interval);
  }, [isStarted, isFinished, time, totalWords]);

  return (
    <div className="timer">
      <div className="time">时间: {time}秒</div>
      {isFinished && <div className="wpm">WPM: {wpm}</div>}
    </div>
  );
};

export default Timer; 
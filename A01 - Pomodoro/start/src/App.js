import React, { useState, useRef } from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(0.1 * 60);
  const minutes = padTime(Math.floor(timeLeft / 60));
  const [title, setTitle] = useState('Let the countdown begin !!!');
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const seconds = padTime(timeLeft - minutes * 60);

  const startTimer = () => {
    setIsRunning(true);
    if (intervalRef.current != null) return;
    setTitle(`Your time starts now!!!`);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  };
  const stopTimer = () => {
    setIsRunning(false);
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(`Keep going, don't stop!!!`);
  };
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(`Ready to go another round!!!`);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

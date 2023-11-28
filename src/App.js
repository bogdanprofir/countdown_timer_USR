import React, { useState, useEffect } from 'react';
import Logo from './logo.png';
import './App.css';

function App() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2023-12-04T10:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const totalSeconds = Math.floor(difference / 1000);

      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      // If the target date is past, return 0 for all fields
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundColor: '#002a59',
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Lansare Site Oficial Filiala Iași</h1>
        <div className="text-5xl font-bold flex flex-row justify-center">
          <div className="timer-digit p-2">{String(timeLeft.days).padStart(2, '0')}d </div>:
          <div className="timer-digit p-2">{String(timeLeft.hours).padStart(2, '0')}h </div> :
          <div className="timer-digit p-2">{String(timeLeft.minutes).padStart(2, '0')}m </div>:
          <div className="timer-digit p-2">{String(timeLeft.seconds).padStart(2, '0')}s</div>
        </div>
      </div>
      <div className="mt-8">
        <img src={Logo} alt="Logo" className="w-70 h-32" />
      </div>
    </div>
  );
}

export default App;

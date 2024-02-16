// CountdownTimer.jsx
import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div class='container'>
      <label className='countdown-timer'>
        <label className='timer-item'>
          <label className='timer-value'>{timeLeft.days}</label>
          <label className='timer-label'>Days</label>
        </label>
        <label className='timer-item'>
          <label className='timer-value'>{timeLeft.hours}</label>
          <label className='timer-label'>Hours</label>
        </label>
        <label className='timer-item'>
          <label className='timer-value'>{timeLeft.minutes}</label>
          <label className='timer-label'>Minutes</label>
        </label>
        <label className='timer-item'>
          <label className='timer-value'>{timeLeft.seconds}</label>
          <label className='timer-label'>Seconds</label>
        </label>
      </label>
    </div>
  );
};

export default CountdownTimer;

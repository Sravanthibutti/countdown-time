// App.js
import React from 'react';
import CountdownTimer from './CountdownTimer'; // Adjust the import path

const App = () => {
  const targetDate = new Date('2024-12-31T23:59:59');

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;

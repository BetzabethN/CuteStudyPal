import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      
      {/* title and pic (changes based on state of timer) */}
      <h1 id="pomodoro-title">Ready?</h1>
      <img id="pomodoro-pic" src="https://cute-study-pal.s3.us-east-2.amazonaws.com/before-start.png" alt="Ready?" />

      {/* pomodoro timer */}
      <div id="timer">00:00</div>

      {/* start, pause, and restart */}
      <div id="timer-buttons">
        <button className="bg-ldthistle hover:bg-dthistle font-bolf py-1 px-3 rounded-full">
          Start
        </button>
        <div className="divider"/>
        <button className="bg-ldthistle hover:bg-dthistle font-bolf py-1 px-3 rounded-full">
          Pause
        </button>
        <div className="divider"/>
        <button className="bg-ldthistle hover:bg-dthistle font-bolf py-1 px-3 rounded-full">
          Restart
        </button>
      </div>

      {/* to do list */}

    </div>
  );
}

export default App;

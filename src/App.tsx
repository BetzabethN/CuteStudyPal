import React from 'react';
import startButton from './components/startButton';
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
        <button className="bg-ldthistle hover:bg-dthistle font-bolf py-1 px-3 rounded-full" onClick={() => {window.location.reload() }}>
          Restart
        </button>
      </div>

      <div className="divider" />

      {/* to do list */}
      <div className="bg-ldthistle">
        <div className="bg-ldthistle rounded shadow px-4 py-2" x-data="todo()">
          <div className="bg-ldthistle title fond-bold text-lg">To Do</div>

          <input type="text" placeholder="Enter Task" className="rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4" x-model="todoTitle" x-ref="addTask" onKeyDownCapture={() => {"addTodo()"}} />

          <ul className="todo-list mt-4">
            
          </ul>

        </div>
      </div>

    </div>
  );
}

export default App;

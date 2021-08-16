import React from 'react';
import { start } from 'repl';
import StudyTimer from './pages/TimerPages/StudyTimer';
import './styles/App.css';
import {BEFORE_START_IMAGE_URL, IN_SESSION_IMAGE_URL} from "./utils/constants";


function App() {

  // define functions up here



  return (
    <div className="App">
      
      {/* title and pic (changes based on state of timer) */}
      <h1 id="pomodoro-title">Ready?</h1>
      <img id="pomodoro-pic" src={BEFORE_START_IMAGE_URL} alt="Ready?" />

      {/* pomodoro timer */}
      <StudyTimer minutes={25} seconds={0}/>

      {/* start, pause, and restart */}
      <div id="timer-buttons">
        <button className="bg-ldthistle hover:bg-dthistle font-bolf py-1 px-3 rounded-full" onClick={() => {window.location.reload() }}>
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
      
        <div className="bg-ldthistle rounded shadow px-4 py-2" x-data="todo()">
          <p className="title fond-bold text-lg">To Do</p>

          <input type="text" placeholder="Enter Task" className="rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4" x-model="todoTitle" x-ref="addTask" onKeyDownCapture={() => {"addTodo()"}} />

          <ul className="todo-list mt-4">
            
          </ul>

        </div>
      

    </div>
  );
}

export default App;

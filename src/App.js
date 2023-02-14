import React from 'react'
import './App.css';
import IntervalClassCounter from "./components/IntervalClassCounter"
import HookIntervalCounter from "./components/HookIntervalCounter"

function App() {
  return (
    <div className="App">
      <IntervalClassCounter />
      <HookIntervalCounter />
    </div>
  )
}

export default App;

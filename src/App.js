import './App.css';
import ClickCounterTwo from "./components/ClickCounterTwo"
import HoverCounterTwo from "./components/HoverCounterTwo"
import CounterTwo from "./components/CounterTwo"

function App() {
  return (
    <div className="App">
      <CounterTwo>
        {(count, incrementCounter) => (
          <ClickCounterTwo count={count} incrementCounter={incrementCounter} />
        )} 
      </ CounterTwo>

      <CounterTwo>
        {(count, incrementCounter) => (
          <HoverCounterTwo count={count} incrementCounter={incrementCounter} />
        )} 
      </ CounterTwo>
    </div>
  )
}

export default App;

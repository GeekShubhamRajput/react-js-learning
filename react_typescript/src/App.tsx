import {Person} from "./components/Person"
import './App.css';

function App() {
  const personName = {
    first: "Shubham",
    last: "Rajput",
  }

  return (
    <div className="App">
      <Person name={personName} />
    </div>
  );
}

export default App;

import {Greet} from "./components/Greet"
import {Person} from "./components/Person"
import {PersonList} from "./components/PersonList"
import './App.css';

function App() {

  const personName = {
    first: "Shubham",
    last: "Rajput",
  }

  const nameList = [
    { 
      first: 'John',
      last: 'Wayne'
    },
    { 
      first: 'B',
      last: 'Putin'
    },
    { 
      first: 'Bella',
      last: 'T'
    }
  ]
  
  return (
    <div className="App">
      <Greet name="Shubham" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;

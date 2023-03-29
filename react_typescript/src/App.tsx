import {PersonList} from "./components/PersonList"
import './App.css';

function App() {
  
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
      <PersonList names={nameList} />
    </div>
  );
}

export default App;

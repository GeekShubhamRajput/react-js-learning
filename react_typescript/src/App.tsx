import {Container} from "./components/Container"
import './App.css';

function App() {
  return (
    <div className="App">
      <Container styles={{ border: '1px solid black', padding: '1rem', display: 'inline' }} />
    </div>
  );
}

export default App;

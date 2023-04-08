import {DomRef} from "./components/ref/DomRef"
import {MutableRef} from "./components/ref/MutableRef"
import './App.css';

function App() {
  return (
    <div className="App">
      <DomRef />
      <br />
      <MutableRef />
    </div>
  );
}

export default App;

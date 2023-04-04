import {LoggedIn} from "./components/LoggedIn"
import {User} from "./components/User"
import './App.css';

function App() {
  return (
    <div className="App">
      <LoggedIn />
      <br />
      <User />
    </div>
  );
}

export default App;

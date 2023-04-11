import {Private} from "./components/auth/Private"
import {Profile} from "./components/auth/Profile"
import './App.css';

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={false} component={Profile} />
    </div>
  );
}

export default App;

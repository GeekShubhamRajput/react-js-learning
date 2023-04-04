import {LoggedIn} from "./components/LoggedIn"
import {User} from "./components/User"
import {AuthUser} from "./components/AuthUser"

import './App.css';

function App() {
  return (
    <div className="App">
      <LoggedIn />
      <br />
      <User />
      <br />
      <AuthUser />
    </div>
  );
}

export default App;

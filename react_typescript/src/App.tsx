import './App.css';
import {CustomComponent} from './components/html/CustomComponent'

function App() {
  return (
    <div className="App">
      <CustomComponent isLoggedIn={true} name="Shubham" />
    </div>
  );
}

export default App;

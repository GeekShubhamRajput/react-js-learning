import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HookCakeContainer from './components/HookCakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;

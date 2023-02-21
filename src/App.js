import React, {useReducer} from 'react'
import './App.css';
import ComponentAA from "./components/ComponentAA"
import ComponentBB from "./components/ComponentBB"
import ComponentCC from "./components/ComponentCC"

const initialState = 0;
const reducer=(state, action)=>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state -1
    case 'reset':
      return initialState
    default: 
      return state
  }
}

export const CountContext = React.createContext()

function App() {
  const [counter, dispatch] = useReducer(reducer, initialState) 

  return(
    <CountContext.Provider value={{countState: counter, countDispatch: dispatch}}>
    <div className="App">
      Count - {counter}  
      <ComponentAA />
      <ComponentBB />
      <ComponentCC />
    </div>
    </CountContext.Provider>
  )
}

export default App;

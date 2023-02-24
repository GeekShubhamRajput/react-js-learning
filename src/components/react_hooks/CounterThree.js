import React, {useReducer} from "react"

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

const reducer=(state, action)=>{
  switch (action.type){
    case 'reset':
      return initialState
    case 'increment':
      return ({firstCounter: state.firstCounter + 1})
    case 'decrement':
      return ({firstCounter: state.firstCounter - 1})
    case 'increment2':
      return ({secondCounter: state.secondCounter + 1})
    case 'decrement2':
      return ({secondCounter: state.secondCounter - 1})
    default: 
      return state
  }
}

function CounterThree(){
  const [counter, dispatch] = useReducer(reducer, initialState)
  const [counterTwo, dispatchTwo] = useReducer(reducer, initialState)

  return(
    <div>
      <h4>Counter One - {counter.firstCounter}</h4>
      <button onClick={()=>{dispatch({type: 'increment', value: 1})}}>Increment</button>
      <button onClick={()=>{dispatch({type: 'decrement', value: 1})}}>Decrement</button>
      <button onClick={()=>{dispatch({type: 'reset', value: 1})}}>Reset</button>

      <h4>Counter Two - {counterTwo.secondCounter}</h4>
      <button onClick={()=>{dispatchTwo({type: 'increment2', value: 1})}}>Increment Counter 2</button>
      <button onClick={()=>{dispatchTwo({type: 'decrement2', value: 1})}}>Decrement Counter 2</button>
      <button onClick={()=>{dispatchTwo({type: 'reset', value: 1})}}>Reset</button>
    </div>
  )
}

export default CounterThree

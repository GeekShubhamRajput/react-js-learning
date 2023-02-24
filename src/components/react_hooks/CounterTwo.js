import React, {useReducer} from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducer=(state, action)=>{
  switch(action.type){
    case 'increment':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'decrement':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'increment2':
      return {...state, secondCounter: state.secondCounter + action.value}
    case 'decrement2':
      return {...state, secondCounter: state.secondCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterTwo(){
  const [count, dispatch] = useReducer(reducer, initialState)

  return(
    <div>
      <h4>First Counter - {count.firstCounter}</h4>
      <h4>Second - {count.secondCounter}</h4>

      <button onClick={()=>dispatch({type: 'increment', value: 1})}>Increment 1</button>
      <button onClick={()=>dispatch({type: 'decrement', value: 1})}>Decrement 1</button>

      <button onClick={()=>dispatch({type: 'increment', value: 5})}>Increment 5</button>
      <button onClick={()=>dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
      <br />
      <button onClick={()=>dispatch({type: 'increment2', value: 1})}>Increment Counter2</button>
      <button onClick={()=>dispatch({type: 'decrement2', value: 1})}>Decrement Counter2</button>
      <br />
      <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo

import React, {useReducer} from 'react'

const initialValue = 0

const reducer=(state, action)=>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
     return state - 1
    case 'reset':
      return initialValue
    default:
      return state
  }
} 

function CounterOne(){
  const [count, dispatch] = useReducer(reducer, initialValue)

  return(
    <div>
      <h4>Count : {count}</h4>
      <br />
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <button onClick={()=>dispatch('increment')}>Increment </button>
    </div>
  )
}

export default CounterOne

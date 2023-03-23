import {useState} from 'react'

function CounterOneOne(initialState, step){
  const [counter, setCounter] = useState(initialState)

  const increment=()=>{
    setCounter(prevCount=>prevCount + step)
  }

  const decrement=()=>{
    setCounter(prevCount=>prevCount - step)
  }

  const reset=()=>{
    setCounter(initialState)
  }

  return [counter, increment, decrement, reset]
}

export default CounterOneOne

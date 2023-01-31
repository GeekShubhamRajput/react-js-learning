import React, {useState} from 'react'

function HookCounter(){
  const initialState = 0;
  const [count, setCount] = useState(initialState)

  const incrementFive = () => {
    for(let i=0; i<5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }
  return(
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment 1</button>
      <button onClick={() => setCount(count - 1)}>Decrement 1</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounter

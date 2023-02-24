import React, {useState, useMemo} from 'react'

function MemoHookCounter(){
  const [counterOne, setCounterOne] = useState(10)
  const [counterTwo, setCounterTwo] = useState(10)

  const incrementCounterOne=()=>{
    console.log("Increment Counter One")
    setCounterOne(counterOne + 1)
  }

  const incrementCounterTwo=()=>{
    console.log("Increment Counter Two")
    setCounterTwo(counterTwo + 1)
  }

  const isEven=useMemo(()=>{
    console.log("inside isEven function")
    return counterOne % 2===0; 
  }, [counterOne])

  return(
    <div>
      <div>
        <button onClick={incrementCounterOne}>CounterOne - {counterOne}</button>
        <span> Counter One value is :  {isEven ? "Even" : "Odd"}</span>
      </div>
      <br />
      <div>
        <button onClick={incrementCounterTwo}>CounterTwo - {counterTwo}</button>
      </div>
    </div>
  )
}

export default MemoHookCounter

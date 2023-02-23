import React, {useState, useEffect, useRef} from 'react'

function HookTimer(){
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  
  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      setTimer(prevTimer=>(prevTimer + 1))
    }, 1000)
    return (()=>{clearInterval(intervalRef.current)})
  }, [])

  return(
    <div>
      <h4>Hook Timer - {timer}</h4>
      <button onClick={()=>clearInterval(intervalRef.current)}>Stop Hook Timer</button>
    </div>
  )
}

export default HookTimer

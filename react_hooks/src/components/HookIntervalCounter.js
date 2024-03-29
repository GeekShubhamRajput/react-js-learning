import React, {useState, useEffect} from 'react'

function HookIntervalCounter(){
  const [count, setCount] = useState(0)

  const tick = () =>{
    setCount(prevCount => prevCount + 1)
  }

  useEffect(()=>{
    const interval = setInterval(tick, 1000)
  
    return ()=>{
      clearInterval(interval)
    }
  }, [])

  return(
    <div>
      <h1>Via: Hooks <br /> {count}</h1>
    </div>
  )
}

export default HookIntervalCounter

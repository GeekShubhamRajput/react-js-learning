import React, {useEffect, useRef} from 'react'

function FocusRefHook(){  
  const inputRef = useRef(null)

  useEffect(()=>{
    return inputRef.current.focus();
  }, [])

  return(
    <input type="text" ref={inputRef} />
  )
}

export default FocusRefHook

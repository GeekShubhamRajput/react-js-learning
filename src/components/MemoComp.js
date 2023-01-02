import React from "react"

function MemoComp({name}){
  console.log("Memo component " + name);
  return(
    <div>
      Memo component - {name}
    </div>
  )
}

export default React.memo(MemoComp)

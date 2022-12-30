import React from 'react'

function FragmentDemo(){
  return(
    <React.Fragment>
      <h4>Fragment</h4>
      <p>A common pattern in React is for a component to return multiple elements.<br />
        Fragments let you group a list of children without adding extra nodes to the DOM.
      </p>
    </React.Fragment>
  )

}

export default FragmentDemo

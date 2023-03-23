import React from 'react'

// const Hello = () => {
//   return <div> <h1> Hello Shubham (JSX) </h1> </div>
// }

const Hello = () => {
  return React.createElement('div', {className: "myDummy"}, React.createElement('h1', null, "Shubham"))
}

export default Hello

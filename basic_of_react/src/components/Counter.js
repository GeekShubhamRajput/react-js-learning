import React, {Component} from 'react'

class Counter extends Component{

  constructor(props){
    super(props)

    this.state = { count: 0 } 
  }

  increment(){
    this.setState(prevState =>({count: prevState.count + 1}))
  }

  decrement(){
    this.setState(prevState =>({count: prevState.count - 1}))
  }

  incrementFive(){
    this.setState(prevState => ({count: prevState.count + 5}))
  }

  decrementFive(){
    this.setState(prevState => ({count: prevState.count - 5}))
  }

  render(){
    return(
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.incrementFive()}>Increment by 5</button>
        <button onClick={() => this.decrementFive()}>Decrement by 5</button>
      </div>
    )
  }
}

export default Counter

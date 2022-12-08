import React, {Component} from 'react'

class ReactState extends Component{
  constructor(){
    super()
    
    this.state = { message: "Welcome Visitor" }
  }

  changeState() {
    this.setState({ message: "Thank you for subscribe"})
  }

  render(){
    return(
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeState() } >Subscribe</button>
      </div>
    ) 
  }
}

export default ReactState

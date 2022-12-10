import React, {Component} from 'react'

class BindEvent extends Component{
  

  constructor(props){
    super(props)

    this.state = { 
      message: "Hello" 
    }
  }

  changeMessage = () => {
    this.setState({ message: "Good Bye" })
  }

  render(){
    return(
      <div>
        <p> {this.state.message} </p>
        <button onClick={ this.changeMessage }>Click</button>
      </div>
    )
  }
}

export default BindEvent

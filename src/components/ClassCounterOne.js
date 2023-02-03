import React, {Component} from 'react'

class ClassCounterOne extends Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCounter=()=>{
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  componentDidMount(){
    document.title = `Clicked button ${this.state.count} times`
  }

  componentDidUpdate(){
    document.title = `Clicked button ${this.state.count} times`  
  }

  render(){
    return(
      <div>
        <button onClick={this.incrementCounter}>Clicked counter {this.state.count} times</button>
      </div>
    )
  }

}

export default ClassCounterOne

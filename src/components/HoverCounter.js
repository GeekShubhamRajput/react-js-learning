import React, {Component} from "react"

class HoverCounter extends Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0 
    }
  }

  incrementCounter =()=>{
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render(){
    const count = this.state.count
    return <h4 onMouseOver={this.incrementCounter}>Hover heading {count} times</h4>
  }
}

export default HoverCounter

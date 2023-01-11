import React, {Component} from 'react'

class HoverCounterTwo extends Component{
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCounter =()=>{
    this.setState(
      prevState => {
        return {count: prevState.count + 1}
      }
    )
  }

  render(){
    const {count} = this.state
    return <h4 onMouseOver={this.incrementCounter}>HoveredMouce {count} times</h4>
  }
}

export default HoverCounterTwo

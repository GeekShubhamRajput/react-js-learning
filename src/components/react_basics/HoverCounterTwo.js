import React, {Component} from 'react'

class HoverCounterTwo extends Component{

  render(){
    const {count, incrementCounter} = this.props
    return <h4 onMouseOver={incrementCounter}>HoveredMouce {count} times</h4>
  }
}

export default HoverCounterTwo

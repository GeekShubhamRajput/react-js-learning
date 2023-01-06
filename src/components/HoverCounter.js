import React, {Component} from "react"
import withCounter from "./withCounter"

class HoverCounter extends Component{
  render(){
    const {count, increasedCounter } = this.props
    return <h4 onMouseOver={increasedCounter}>Hover heading {count} times</h4>
  }
}

export default withCounter(HoverCounter, 10)

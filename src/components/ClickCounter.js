import React,{Component} from 'react'
import withCounter from "./withCounter"

class ClickCounter extends Component{

  render(){
    const {count, increasedCounter } = this.props
    return <button onClick={increasedCounter}>Clicked {count} times {this.props.name}</button>
  }
}

export default withCounter(ClickCounter, 5)

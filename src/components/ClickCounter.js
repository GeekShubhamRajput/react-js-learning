import React,{Component} from 'react'

class ClickCounter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increasedCounter=()=>{
    this.setState(prevState => {
      return {count: prevState.count + 1 }
    })
  }

  render(){
    const count = this.state.count
    return <button onClick={this.increasedCounter}>Clicked {count} times</button>
  }
}

export default ClickCounter

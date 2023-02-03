import React, {Component} from 'react'

class ClassCounterOne extends Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0,
      name: ""
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

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      console.log("called - componentDidUpdate")
      document.title = `Clicked button ${this.state.count} times` 
    }
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.name} onChange={(e)=> {this.setState({name: e.target.value} )}} />
        <button onClick={this.incrementCounter}>Clicked counter {this.state.count} times</button>
      </div>
    )
  }

}

export default ClassCounterOne

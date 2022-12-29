import React, {Component} from 'react'

class LifecycleA extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: "Shubham"
    }

    console.log("Lifecycle A constructor")
  }

  static getDerivedStateFromProps(props, state){
    console.log("Lifecycle A getDerivedStateFromProps")
    return null
  }

  componentDidMount(){
    console.log("Lifecycle A componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Lifecycle A shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Lifecycle A getSnapshotBeforeUpdate")
    return true
  }

  componentDidUpdate(prevState, prevProps){
    console.log("Lifecycle A componentDidUpdate")
  }

  changeState = () =>{
    this.setState({
      name: "John Doe"
    })
  }

  render(){
    console.log("Lifecycle A render")
    return(
      <div>
        <h4>Component Lifecycle A</h4>
        <button onClick={this.changeState}>Change Name</button> 
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}

export default LifecycleA

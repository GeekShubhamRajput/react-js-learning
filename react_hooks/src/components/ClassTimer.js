import React, {Component} from 'react'

class ClassTimer extends Component{
  constructor(){
    super();
    this.state = {
      timer: 0, 
    }
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      this.setState(prevState=>({timer: prevState.timer + 1})) 
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    return(
      <div>
        <h3>Timer : {this.state.timer}</h3>
        <button onClick={()=>clearInterval(this.interval)}>Stop timer</button>
      </div>
    )
  }
}

export default ClassTimer

import React,{Component} from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {

  class WithCounter extends Component{
    constructor(props){
      super(props)
      this.state = {
        count: 0
      }
    }

    increasedCounter=()=>{
      this.setState(prevState => {
        return {count: prevState.count + incrementNumber }
      })
    }

    render(){
      return <WrappedComponent count={this.state.count} increasedCounter={this.increasedCounter} {...this.props}/>
    }
  }
  return WithCounter
}

export default withCounter

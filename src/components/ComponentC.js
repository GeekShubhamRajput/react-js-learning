import React from 'react'
import {ChannelContext, UserContext} from '../App'

function ComponentC(){
  return(
    <UserContext.Consumer>
      {
        (user_name) => {
          return(
            <ChannelContext.Consumer>
              {
                (channel_name) => {
                  return <h3>Hi {user_name}, My youtube channel name is {channel_name}</h3>   
                }
              }
            </ChannelContext.Consumer>
          )
        } 
      }
    </UserContext.Consumer>
  )
}

export default ComponentC

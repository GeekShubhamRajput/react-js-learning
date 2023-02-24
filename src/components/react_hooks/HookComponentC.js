import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../App'

function HookComponentC(){
  const username = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return(
    <h1>{username} - {channel}</h1>
  )
}

export default HookComponentC

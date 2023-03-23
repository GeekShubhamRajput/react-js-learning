import React from 'react'

function StyleSheet(props){
  let className = props.primary ? 'primary' : 'secondary' 
  
  return <h2 className={`${className} lucida-font`}> This is my Heading</h2>
}

export default StyleSheet

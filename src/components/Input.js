import React from 'react'

export const Input = (props) => {
  return(
  <input
    type="text"
    onKeyDown={props.handleKeyPress}
    onChange={props.handleInputChange}
    value={props.inputText}
  />)
}

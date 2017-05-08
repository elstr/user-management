import React from 'react'

export const Checkbox = (props) => {
  onChange = e => {
   event.preventDefault();
   this.props.onChange(e.target.value);
 }
  return(
  <input
    type="checkbox"
    onChange={this.onChange}
    value={props.value}
  />)
}

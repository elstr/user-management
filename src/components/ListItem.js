import React from 'react'

export const ListItem = (props) => {
  return(
    <li key={props.i} className={props.className}>
      <input type="checkbox" value={props.value} checked={!props.checked} onChange={props.handleCheckChange} />
      {props.name}
    </li>)
  )
}

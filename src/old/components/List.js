import React from 'react'
import '../styles.css'
const List = props => {
  return(
    <ul>
    {props.list.map((item, i) =>
      <li key={i} className={item.isActive ? 'isActive' : 'isInactive'}>
        <input type="checkbox" value={item.id} checked={!item.isActive} onChange={props.onChange} />
        {item.name}
      </li>)}
    </ul>
  )
}

export default List;

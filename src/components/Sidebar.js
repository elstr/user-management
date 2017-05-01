import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

export const Sidebar = (props) => {
  return (
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.key}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

Sidebar.propTypes = {
  items: PropTypes.array.isRequired
};

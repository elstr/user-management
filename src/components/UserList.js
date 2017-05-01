import React from 'react'
import { PropTypes } from 'prop-types'

export const UserList = (props) => {
  return (
    <div>
      <p>Users</p>
      <ul>
        {props.users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

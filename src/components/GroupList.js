import React from 'react'
import { PropTypes } from 'prop-types'

export const GroupList = (props) => {
  return (
    <ul>
      {props.groups.map(group => {
        return <li key={group.id}>{group.name}</li>
      })}
    </ul>
  )
}

GroupList.propTypes = {
  groups: PropTypes.array.isRequired
}

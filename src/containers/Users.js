import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {removeUser} from '../actions/users';

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Groups</th>
            <th>Actions</th>
          </tr>
          {this.props.users.map((user,i) => (
            <tr key={i}>
              <td>
                {user.name}
              </td>
              <td>
                <ul>
                  {
                    user.groups.map((group,i) => (
                      <li key={i}>{group}</li>
                    ))
                  }
                </ul>
              </td>
              <td>
                <Link to={`/users/${user.name}`}>Edit</Link>
                <button onClick={() => this.props.removeUser(user)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
    removeUser: user => dispatch(removeUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

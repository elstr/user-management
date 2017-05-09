import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeUser} from '../actions/users';
import Button from '../components/Button/Button'
import './styles.css'

class Users extends React.Component {
  render() {
    const {groups, users} = this.props;

    return (
      <div>
        <h1>Users</h1>
        { users.length !== 0
          ?
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Groups</th>
                <th>Actions</th>
              </tr>
              {
                users.map((user,i) => (
                  <tr key={i}>
                    <td>
                      {user.name}
                    </td>
                    <td>
                      <ul>
                        {
                          user.groups.map((group, i) => (
                            <li key={i}>
                              {
                                groups.find(grp => grp.id === group.id).name
                              }
                            </li>
                          ))
                        }
                      </ul>
                    </td>
                    <td>
                      <Link to={`/users/${user.name}`}>
                        <Button className={'remove-button'} icon={' fa-pencil-square-o'} />
                      </Link>
                      <Button className={'remove-button'} icon={'trash-o'} onClick={() => this.props.removeUser(user)} />
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          : <div><p>Sorry... there are no users created</p></div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  groups: state.groups
})

const mapDispatchToProps = dispatch => ({
    removeUser: user => dispatch(removeUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

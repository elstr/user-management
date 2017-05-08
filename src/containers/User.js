import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'


import './styles.css'

import {editUser} from '../actions/users';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      editedUser: {
        name:'',
        groups:[]
      }
    }
  }
  getUser = name => {
    const {users} = this.props;
    return users.filter(user => user.name === name)
  }

  handleChangeUserInput = e => {
    const {value} = e.target;
    this.setState(state => ({
      ...state,
      editedUser: {
        ...state.editedUser,
        name: value
      }
    }))
  }

  isGroupAssigned = group => {
    const {groups} = this.state.editedUser;
    console.log(groups.indexOf(group));
    return groups.indexOf(group) !== -1;
  }

  handleGroupChange = (e, group) => {
    const {checked} = e.target;
    if (checked) {
      this.addGroupToUser(group)
    } else {
      this.removeGroupFromUser(group)
    }
  }

  removeGroupFromUser = (group = '') => {
    const {groups} = this.state.editedUser;
    const idx = groups.indexOf(group);

    if (idx !== -1) {
      this.setState(state => ({
        ...state,
        editedUser: {
          ...state.editedUser,
          groups: [
            ...groups.slice(0, idx),
            ...groups.slice(idx + 1)
          ]
        }
      }))
    }
  }

  addGroupToUser = (group = '') => {
    this.setState(state => ({
      ...state,
      editedUser: {
        ...state.editedUser,
        groups: [...state.editedUser.groups, group]
      }
    }))
  }

  cleanEditedUser = () => {
    this.setState({
      editedUser: {
        name: '',
        groups: []
      }
    })
  }

  editUser(editedUser) {
    const userName = this.props.match.params.name;
    const user = this.getUser(userName)[0];
    const idx = this.props.users.indexOf(user);
    this.props.editUser(idx, editedUser);
  }

  render() {
    const userName = this.props.match.params.name;
    const user = this.getUser(userName)[0];
    const {groups} = this.props;
    const {editedUser} = this.state;

    return (
      <div>
        {
          user ? (
            <div>
              <h1>User: {user.name}</h1>
              <label>Name: {user.name} </label>
              <div>
                <label>Groups Assigned:</label>
                  <ul>
                    {user.groups && user.groups.map((group, i) => (
                      <li key={i}>
                        <label>
                          {group.name}
                        </label>
                        </li>
                    ))}
                  </ul>
              </div>
              <hr />
              <div>
                <h3>Update with values:</h3>
                <label>New name:</label>
                <input type="text" onChange={this.handleChangeUserInput} value={editedUser.name}/>
                <div>
                  <h4>Assign Groups:</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>Group</th>
                        <th>Assign</th>
                      </tr>
                      {groups.map((group, i) => (
                        <tr key={i}>
                          <td>
                            <label>
                              {group.name}
                            </label>
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={ e => this.handleGroupChange(e, group)}
                              checked={this.isGroupAssigned(group)}
                              />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="button-container">
                  <button style={{padding :8}} onClick={() => this.editUser(editedUser)}>
                    Save
                  </button>
                </div>

              </div>
            </div>
          ) : <Redirect to={{
                pathname: '/users'
              }}/>
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
    editUser: (idx, editedUser) => dispatch(editUser(idx, editedUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

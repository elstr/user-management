import React, {Component} from 'react'

class Manager extends Component {
  constructor(){
    super();

    this.state = {
      users: [],
      groups: ['admin', 'dev'],
      newUser: {
        name: '',
        groups: []
      },
      newGroup: ''
    };
  }

  isGroupAssigned = group => {
    const {groups} = this.state.newUser;
    return groups.indexOf(group) !== -1;
  }

  addUser = user => {
    this.setState(state => ({
      ...state,
      users: [...state.users, user]
    }), () => {
      this.cleanNewUser()
    })
  }

  addGroupToNewUser = (group = '') => {
    // Chequear si el groupo ya esta
    this.setState(state => ({
      ...state,
      newUser: {
        ...state.newUser,
        groups: [...state.newUser.groups, group]
      }
    }))
  }

  removeGroupFromNewUser = (group = '') => {
    const {groups} = this.state.newUser;
    const idx = groups.indexOf(group);

    if (idx !== -1) {
      this.setState(state => ({
        ...state,
        newUser: {
          ...state.newUser,
          groups: [
            ...groups.slice(0, idx),
            ...groups.slice(idx + 1)
          ]
        }
      }))
    }
  }

  cleanNewUser = () => {
    this.setState({
      newUser: {
        name: '',
        groups: []
      }
    })
  }

  handleChangeUserInput = e => {
    const {value} = e.target;
    this.setState(state => ({
      ...state,
      newUser: {
        ...state.newUser,
        name: value
      }
    }))
  }

  handleGroupChange = (e, group) => {
    const {checked} = e.target;

    if (checked) {
      this.addGroupToNewUser(group)
    } else {
      this.removeGroupFromNewUser(group)
    }
  }

  addGroup = group => {
    this.setState(state => ({
      ...state,
      groups: [...state.groups, group]
    }), () => {
      this.cleanNewGroup()
    })
  }

  cleanNewGroup = () => {
    this.setState({
      newGroup: {
        name: '',
      }
    })
  }

  render() {
    const {newUser, groups} = this.state;
    return(
      <div>
        <section>
          <h2>Add User</h2>
          <label>
            Name:
            <input type="text"
              value={newUser.name}
              onChange={this.handleChangeUserInput}
               />

             <h3>Assign group</h3>
             <ul>
               {groups.map(group => (
                 <li>
                   <label>
                     {group}
                     <input
                       type="checkbox"
                       onChange={ e => this.handleGroupChange(e, group)}
                       checked={this.isGroupAssigned(group)}
                       />
                   </label>
                   </li>
               ))}
             </ul>
          </label>
          <button onClick={() => this.addUser(newUser)}>
            Add User
          </button>
        </section>
        <section>
          <h2>Add groups</h2>
          <input type="text" onChange={this.handleChangeGroupInput} value={this.newGroup} />
          <ul>
            {groups.map(group => (
              <li>
                <label>
                  {group}
                </label>
                </li>
            ))}
          </ul>
        </section>



      </div>
    )
  }
}

export default Manager

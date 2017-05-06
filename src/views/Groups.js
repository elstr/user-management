import React, {Component} from 'react';
import {addItem, addItems, getById, removeItem, getDiffs} from '../Commons';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGroup: {},
      groups: this.props.getState('groups'),
      users: this.props.getState('users'),
      selectedUsers: [],
      selectedGroups: [],
      inputText:''
    };

  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      const newId = this.props.generateId();
      const newGroup = {id:newId, name: e.target.value, isActive:true}
      this.props.updateState(state => ({
        groups: [...state.groups, newGroup]
      }));
      this.setState({newUser: newGroup, inputText:''});
    }
  };

  handleInputChange = e => {
    this.setState({
      inputText: e.target.value,
      newGroup: {name: e.target.value, users:[], isActive:true},
    })
  };

  showUsers = () => {
    this.props.updateState(state => ({
      ...state,
      configuration: {
        ...state.configuration,
        showUsers: !state.configuration.showUsers
      }
    }));
  }

  isSelected = (id, list) => list.find(item => item.id === id)

  updateList = (list, item) => {
    if (this.isSelected(item.id, list)) {
      list = removeItem(list, item.id);
    } else {
      list = addItem(list, item);
    }
    return list
  }

  selectGroup = e => {
    const groupId = parseInt(e.target.value,10)
    const selectedGroup = getById(this.state.groups, groupId);
    const selectedGroups = this.updateList(this.state.selectedGroups, selectedGroup)
    this.setState({selectedGroups: selectedGroups})
  }

  selectUser = e => {
    const userId = parseInt(e.target.value,10)
    const selectedUser = getById(this.state.users, userId);
    const selectedUsers = this.updateList(this.state.selectedUsers, selectedUser)
    this.setState({selectedUsers: selectedUsers})
  }

  addUsers = () => {
    let usersToAdd,
        usersSelectedIds = [];

    const users = this.state.selectedUsers;
    const groups = [...this.state.selectedGroups];

    usersSelectedIds = users.map(user => user.id).concat()

    groups.map(group => {
      usersToAdd = getDiffs(usersSelectedIds, group.users)
      console.log(group.users);
      group.users = addItems(group.users, usersToAdd)
    })

    this.props.updateState(state => ({
      groups: [...groups]
    }));

  }


  render() {
    const {showUsers} = this.props.getState('configuration');
    const {groups, users} = this.props.getState();
    return (
      <div className="Groups">
        <h1>Groups</h1>
        <input
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
          value={this.state.inputText}
        />

      <ul>
        {groups.map((group, i) =>
          <li key={group.id}>
            <input type='checkbox' onChange={this.selectGroup} value={group.id}/> {group.name}
            {showUsers
              ? <div>
                  <ul>
                    {group.users.map((userId, i) =>
                      <li key={i}>
                        {users.find(user => user.id === userId).name}
                      </li>
                    )}
                  </ul>
                </div>
              : null
            }

          </li>
        )}
      </ul>
        <button onClick={this.showUsers}>
          {!showUsers ? 'Show Users' : 'Hide Users'}
        </button>

        {showUsers
          ? <div>
              <ul>
                {users.map((user,i) =>
                  user.isActive
                  ?
                    <li key={i}>
                      <input type='checkbox' onChange={this.selectUser} value={user.id} />{user.name}
                    </li>
                  : null )
                }
              </ul>
              <button onClick={this.addUsers}>
                Add Users
              </button>
            </div>
          : null}
      </div>
    );
  }
}

export default Groups;

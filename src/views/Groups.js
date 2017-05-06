import React, {Component} from 'react';
import {addItem, addItems, getById, removeItem, updateList, getDiffs} from '../Commons'
// import {Checkbox} from '../components/Checkbox'

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

  isSelected = (id, list) => {
    return list.find(item => item.id === id)
  }

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
    let addUsers,
        usersIds,
        usersSelectedIds = [];

    const users = this.state.selectedUsers;
    const groups = this.state.selectedGroups;

    usersSelectedIds = users.map(user => user.id).concat()

    groups.map(group => {
      addUsers = getDiffs(usersSelectedIds, group.users)
      const usersGroup = addItems(group.users, addUsers)
      group.users = usersGroup;
      this.props.updateState(state => ({
        groups: [...state.groups, group]
      }));
    })

  }


  render() {
    const {showUsers} = this.props.getState('configuration');
    return (
      <div className="Groups">
        <h1>Groups</h1>
        <input
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
          value={this.state.inputText}
        />

      <ul>
        {this.state.groups.map((group, i) =>
          <li key={group.id}>
            <input type='checkbox' onChange={this.selectGroup} value={group.id}/> {group.name}
            {showUsers
              ? <div>
                  <ul>
                    {group.users.map(user =>
                      <li key={user.id}>
                        {user.name}
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
                {this.state.users.map(user =>
                  user.isActive
                  ?
                    <li key={user.id}>
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

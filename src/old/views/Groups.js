import React, {Component} from 'react';
import ButtonIcon from '../components/Button/ButtonIcon'
import Message from '../components/Message/Message'
import {addItem, addItems, getById, removeItem, getDiffs, updateList} from '../Commons';
import {Link} from 'react-router';
import './styles.css'
class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGroup: {},
      groups: this.props.getState('groups'),
      users: this.props.getState('users'),
      selectedUsers: [],
      selectedGroups: [],
      inputText:'',
      messageText: ''
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
      let addUsers,
          usersSelectedIds = [];

      const selectedUsers = [...this.state.selectedUsers];
      const selectedGroups = [...this.state.selectedGroups];

      if (selectedUsers.length > 0 && selectedGroups.length > 0) {

        usersSelectedIds = selectedUsers.map(user => user.id).concat()

        selectedGroups.map(group => {
          addUsers = getDiffs(usersSelectedIds, group.users)
          const usersGroup = addItems(group.users, addUsers)
          group.users = usersGroup;
        })

        if (selectedGroups.length > 1) {
          this.props.updateState(state => ({
            groups: [...selectedGroups]
          }));
        } else {
          this.props.updateState(state => ({
            groups: updateList(this.state.groups, selectedGroups[0])
          }));
        }
      } else {
        this.setState({messageText: 'Please select at least one group and one user'})
        this.props.updateState(state => ({
          ...state,
          configuration: {
            ...state.configuration,
            showMessage: !state.configuration.showMessage
          }
        }));
      }

    }

  editGroup = (group) => {
    console.log('Edit Group', group);
  }

  deleteGroup = (group) => {
    const newGroup = {...group, isActive:false}
    this.props.updateState(state => ({
      groups: updateList(this.state.groups, newGroup)
    }));
  }

  // pasar a message
  closeMessage = () => {
    this.props.updateState(state => ({
      ...state,
      configuration: {
        ...state.configuration,
        showMessage: !state.configuration.showMessage
      }
    }));
  }

  render() {
    const {groups, users, configuration} = this.props.getState();
    const {showUsers, showMessage} = configuration;
    return (
      <div className="Groups">
        <h1>Groups</h1>
        <input
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
          value={this.state.inputText}
        />
      {showMessage
        ? <div>
            <ButtonIcon
               className='remove-button'
               icon='times'
               onClick={() => {this.closeMessage()}}
               type='secondary'
             />
            <p>{this.state.messageText}</p>
          </div>
        : null
      }
      <ul>
        {groups.map((group, i) =>
          group.isActive
          ?
            <li key={i}>
            <input type='checkbox' onChange={this.selectGroup} value={group.id} />
            <label>
              {group.name}
            </label>

            <ButtonIcon
               className='remove-button'
               icon=' fa-pencil-square-o'
               onClick={() => {this.editGroup(group)}}
               type='secondary'
             />

            {!!group.users && group.users.length === 0
             ?  <ButtonIcon
                  className="remove-button"
                  icon='trash-o'
                  onClick={() => {this.deleteGroup(group)}}
                  type='secondary'
                />
             :  null
            }
            {showUsers
              ? <div>
                  <ul>
                    {group.isActive && !!group.users
                      ?
                        group.users.map((userId, i) =>
                            <li key={i}>
                              {users.find(user => user.id === userId).name}
                            </li>
                          )
                      :
                        null
                    }
                  </ul>
                </div>
              : null
            }

          </li>
          :
            null
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

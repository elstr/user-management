import React, {Component} from 'react';
import {updateList,  getById} from '../Commons';
import {Users} from '../views'

class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {},
      inputText: '',
      users: props.route.users
    };
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      const newId = this.props.generateId();
      const newUser = {id:newId, name: e.target.value, isActive:true}

      this.props.updateState(state =>({
           users: [...state.users, newUser]
       }));


      this.setState({newUser: newUser, inputText:''});

    }
  };

  handleInputChange = e => {
    this.setState({inputText: e.target.value})
  }

  handleUserChange = e => {
    const {users} = this.props.getState();
    const userId = parseInt(e.target.value, 10);
    const user = getById(users,userId);
    const updatedUser = ({...user, isActive: !user.isActive});
    const updatedList = updateList(users, updatedUser);

    this.props.updateState(state => ({
      users: [...updatedList]
    }));

  }

  render() {
    return (
      <Users
        onKeyPress={this.handleKeyPress}
        onInputChange={this.handleInputChange}
        onUserChange={this.handleUserChange}
        users={this.state.users}
        inputValue={this.state.inputValue}
      />
    )
  }

}

export default UsersContainer;

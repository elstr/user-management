import React, {Component} from 'react';
import { updateList,  getById } from '../Commons';
import {Input} from '../components/Input'
import {List} from '../components/List'

import '../styles.css'
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {},
      inputText: ''
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
    const {users} = this.props.getState();
    return (
      <div className="Users">
        <h1>Users</h1>
        <Input
          type="text"
          handleKeyPress={this.handleKeyPress}
          handleInputChange={this.handleInputChange}
          inputText={this.state.inputText}
        />
      <List list={users} onChange={this.handleUserChange} />
      </div>
    );
  }
}

export default Users;

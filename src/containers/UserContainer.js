import React, { Component } from 'react'
import { UserList } from '../components'
import { addItem, generateId } from './Commons'

export class UserContainer extends Component {
  state = {
    newUser: '',
    users: [
      {id:1, name:'Lele', isActive:true},
    ],
    errorMessage: ''
  }

  addNewUser(e){
    // TODO: Check if id already exists
    e.preventDefault()
    const newId = generateId()
    const newUser = {id:newId, name: this.state.newUser, isActive: true}
    const updatedList = addItem(this.state.users, newUser)
    this.setState({
      users: updatedList,
      newUser: '',
      errorMessage: ''
    })
  }

  handleInputChange = (e) => {
    this.setState({ newUser: e.target.value })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.addNewUser.bind(this)}>
        <label>
          New User
          <input type="text" value={this.state.newUser} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Add User" />
      </form>
      <UserList users={this.state.users}/>
      </div>
    )
  }
}

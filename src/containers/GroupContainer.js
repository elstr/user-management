import React, { Component } from 'react'
import { GroupList } from '../components'
import { addItem, generateId, getState, persistState, getArray } from './Commons'
import { browserHistory } from 'react-router';


export class GroupContainer extends Component {
  state = {
    newGroup: '',
    groups: getArray(getState('groups')),
    errorMessage: ''
  }

  componentDidUpdate(){
    persistState('groups', this.state.groups)
  }

  addNewGroup(e){
    // TODO: Check if id already exists
    e.preventDefault()
    let newId = generateId()
    let newGroup = {id:newId, name: this.state.newGroup, isActive: true}
    let updatedList = addItem(this.state.groups, newGroup)
    this.setState({
      newGroup: '',
      groups: updatedList
    })
  }

  handleInputChange = (e) => {
    this.setState({ newGroup: e.target.value })
  }

  render () {
    return (
      <div>
      <form onSubmit={this.addNewGroup.bind(this)}>
        <label>
          New Group
          <input type="text" value={this.state.newGroup} onChange={this.handleInputChange.bind(this)} />
        </label>
        <input type="submit" value="Add Group" />
      </form>
      <GroupList groups={this.state.groups}/>
      </div>
    )
  }
}

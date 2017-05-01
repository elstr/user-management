import React, { Component } from 'react'
import { Sidebar } from '../components'

export class SidebarContainer extends Component {
  state = {
    items: [
      {key:1, path:'/users', title:'Users'},
      {key:2, path:'/groups', title:'Groups'},
      {key:3, path:'/permissons', title:'Permissons'},
    ]
  }
  render () {
    return (
      <Sidebar items={this.state.items}/>
    )
  }
}

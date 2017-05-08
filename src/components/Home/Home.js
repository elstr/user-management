import React from 'react';
import './styles.css';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>User Management System</h1>
        <p>This system provides the functionalities to manage users and groups.</p>
        <p>Functionalities covered:</p>
        <ul>
          <li>List exissting users</li>
          <li>List existing groups</li>
          <li>Create users</li>
          <li>Create groups</li>
          <li>Assign users to group</li>
          <li>Remove users from group</li>
          <li>Delete groups when they no longer have members</li>
          <li>Delete users</li>
        </ul>
        <p>Relies on ReactJS & Redux</p>
        <p>For testing I'm using Enzyme</p>
        <p>Built by Eleonora Lester</p>
      </div>
    )
  }
}

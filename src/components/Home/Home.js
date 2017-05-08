import React from 'react';
import './styles.css';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>User Management System</h1>
        <p>Small system to manage users and groups.</p>
        <p>Relies on ReactJS & Redux. For testing I'm using Enzyme.</p>

        <hr />

        <p>Functionalities covered:</p>
        <ul className='features-list'>
          <li>List existing users</li>
          <li>List existing groups</li>
          <li>Create users</li>
          <li>Create groups</li>
          <li>Assign users to group</li>
          <li>Remove users from group</li>
          <li>Delete groups when they no longer have members</li>
          <li>Delete users</li>
        </ul>
        <br />
        <p>Built by Eleonora Lester</p>
      </div>
    )
  }
}

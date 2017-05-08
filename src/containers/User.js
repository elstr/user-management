import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component {

  getUser = name => {
    const {users} = this.props;
    return users.filter(user => user.name === name)
  }

  render() {
    const userName = this.props.match.params.name;
    const user = this.getUser(userName)[0];
      console.log(user)
    return (
      <div>
        {
          user ? (
            <div>
            <h1>User: {user.name}</h1>
            <label>Name: {user.name} </label>
              <ul>
                {user.groups && user.groups.map((group, i) => (
                  <li key={i}>
                    <label>
                      {group}
                    </label>
                    </li>
                ))}
              </ul>
            </div>
          ) : <div>User not found</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(
  mapStateToProps,
  null
)(User)

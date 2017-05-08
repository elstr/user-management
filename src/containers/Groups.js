import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeGroup} from '../actions/groups';
import Button from '../components/Button/Button'
import './styles.css'


class Groups extends React.Component {
  render() {
    const {users} = this.props;
    let countUsersByGroup = 0;
    let showDeleteButton = true;

    return (
      <div>
        <h1>Groups</h1>
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
          {this.props.groups.map((group, i) => (
            <tr key={i}>
              <td>
                {group.name}
              </td>
              <td>
                <Link to={`/groups/${group.id}`}>
                  <Button className={'remove-button'} icon={' fa-pencil-square-o'} />
                </Link>
                
                {!showDeleteButton ? showDeleteButton = true : null }
                {
                  users.map(function(user){
                    // For each user, finds if the group exists in the users groups
                    // else it renders a delete button
                    if(user.groups.find(grp => grp.id === group.id)){
                      showDeleteButton = false;
                    }
                  })
                }
                {showDeleteButton ? <Button className={'remove-button'} icon={'trash-o'} onClick={() => this.props.removeGroup(group)} /> : null }

              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  groups: state.groups
})

const mapDispatchToProps = dispatch => ({
  removeGroup: group => dispatch(removeGroup(group))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups)

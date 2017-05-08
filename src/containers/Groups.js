import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {removeGroup} from '../actions/groups';

class Groups extends React.Component {
  render() {
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
                {group}
              </td>
              <td>
                <Link to={`/groups/${group}`}>Edit</Link>
                <button onClick={() => this.props.removeGroup(group)}>
                  Delete Group
                </button>
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
  groups: state.groups
})

const mapDispatchToProps = dispatch => ({
  removeGroup: group => dispatch(removeGroup(group))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups)

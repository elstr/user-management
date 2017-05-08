import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import './styles.css';

import {editGroup} from '../actions/groups';

class Group extends React.Component {
    constructor() {
      super();
      this.state = {
        editedGroup: {
          id:'',
          name: ''
        }
      };
    }

    getGroup = id => {
      const {groups} = this.props;
      return groups.find(group => group.id === +id)
    }

    handleChangeGroupInput = e => {
      const {value} = e.target;
      this.setState(state => ({
        ...state,
        editedGroup: {
          ...state.editedGroup,
          name: value
        }
      }))
    }

    cleanEditedGroup = () => {
      this.setState({
        editedGroup: { name: ''}
      })
    }

    editGroup(editedGroup) {
      const groupId = this.props.match.params.id;
      const group = this.getGroup(groupId)
      const {groups} = this.props;
      const idx = groups.indexOf(group);

      if (editedGroup.name) {
        debugger;
        this.setState(state => ({
          ...state,
          editedGroup: {
            ...state.editedGroup,
            id: +groupId
          },
          showMessage: !this.state.showMessage
        }), () => {
          this.props.editGroup(idx, this.state.editedGroup)
          this.cleanEditedGroup();
        })
      }
    }

  render() {
    const group = this.getGroup(this.props.match.params.id);
    const {editedGroup} = this.state;
    return (
          <div>
            { group
              ?
              (
                <div>
                  <h2>Group: {group.name}</h2>
                  <label>Name: {group.name} </label>
                  <hr />
                  <div>
                    <h3>Update with value:</h3>
                    <label>New name:</label>
                    <input type="text" onChange={this.handleChangeGroupInput} value={editedGroup.name}/>
                  </div>
                  <div className="button-container">
                    <button style={{padding :8}}  onClick={() => this.editGroup(editedGroup)}>
                      Save
                    </button>
                  </div>
                </div>
              )
              : <Redirect to={{
                    pathname: '/groups'
                  }}/>
            }
          </div>
    )
    }
}

const mapStateToProps = state => ({
  groups: state.groups
})
const mapDispatchToProps = dispatch => ({
    editGroup: (idx, editedGroup) => dispatch(editGroup(idx, editedGroup))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Group)

import React from 'react';
import {connect} from 'react-redux';

import {addGroup} from '../actions/createGroups';

class CreateGroups extends React.Component {

  constructor() {
    super();

    this.state = {
      newGroup: {
        id:'',
        name:''
      }
    };
  }

  handleChangeGroupInput = e => {
    const {value} = e.target;
    this.setState(state => ({
      ...state,
      newGroup: {
        ...state.newGroup,
        name: value
      }
    }))
  }


  cleanNewGroup = () => {
    this.setState({
      newGroup: {
        id:'',
        name: ''
      }
    })
  }


  addGroup(group) {
    const {groups} = this.props;
    const getLastId = (groups[groups.length - 1].id)+1;
    this.setState(state => ({
      ...state,
      newGroup: {
        ...state.newGroup,
        id: getLastId,
        name: group.name,
      }
    }), () => {
      this.props.addGroup(this.state.newGroup);
      this.cleanNewGroup();
    })

  }

  render() {
    const {newGroup} = this.state;

    return (
      <section>
        <h2>Add Group</h2>
        <label>
          Group Name:
        </label>
          <input type="text"
            value={newGroup.name}
            onChange={this.handleChangeGroupInput}
          />

        <button onClick={() => this.addGroup(newGroup)}>
          Add Group
        </button>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  groups: state.groups
})

const mapDispatchToProps = dispatch => ({
    addGroup: group => dispatch(addGroup(group))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroups)

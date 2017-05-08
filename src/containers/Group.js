import React from 'react';
import {connect} from 'react-redux';

class Group extends React.Component {

  render() {
    const groupName = this.props.match.params.group;
    console.log(groupName);
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  groups: state.groups
})

export default connect(
  mapStateToProps,
  null
)(Group)

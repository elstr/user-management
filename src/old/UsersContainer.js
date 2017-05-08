import React, {Component} from 'react';
import {updateList,  getById} from '../Commons';
import {NotFound} from '../views'

class UsersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NotFound />
    )
  }

}

export default UsersContainer;

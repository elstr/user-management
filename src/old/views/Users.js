import React from 'react';
import {Input} from '../components/Input'
import {List} from '../components/List'
import '../styles.css'

const Users = (props) => {
  const {
    inputValue,
    onKeyPress,
    onInputChange,
    onUserChange,
    users,
  } = props;

  return (
    <div className="Users">
      <h1>Users</h1>
      <Input
        onChange={onInputChange}
        onKeyPress={onKeyPress}
        placeholder={'User Name'}
        type={'text'}
        value={inputValue}
      />
      <List list={users} onChange={onUserChange} />
    </div>
  )
}
export default Users;

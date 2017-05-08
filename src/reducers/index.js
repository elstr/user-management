import { combineReducers } from 'redux'
import users from './users'
import groups from './groups'

const rootReducer = combineReducers({
  users,
  groups
})

export default rootReducer

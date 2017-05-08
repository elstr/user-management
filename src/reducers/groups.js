const initialState = [{id:1,name:'Administrator'}, {id:2, name:'Developer'}]

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'ADD_GROUP': {
      return [
        ...state,
        action.group
      ]
    }
    case 'REMOVE_GROUP': {
      const idx = state.indexOf(action.group);

      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    }
    case 'EDIT_GROUP': {
      return [
        ...state.slice(0, action.idx),
        action.editedGroup,
        ...state.slice(action.idx + 1)
      ]
    }
    default:
      return state
  }
}

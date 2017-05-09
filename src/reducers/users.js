const initialState = [{
  name: 'Karen',
  groups: [{id:1},{id:2}]
}, {
  name: 'Andres',
  groups: [{id:1},{id:2}]
}]


export default function users(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER': {
      return [
        ...state,
        action.user
      ]
    }
    case 'REMOVE_USER': {

      const idx = state.indexOf(action.user);

      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    }
    case 'EDIT_USER': {
      return [
        ...state.slice(0, action.idx),
        action.editedUser,
        ...state.slice(action.idx + 1)
      ]
    }
    default:
      return state
  }
}

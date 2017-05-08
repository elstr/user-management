const initialState = ['admin', 'dev']

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
    default:
      return state
  }
}

//addGroup

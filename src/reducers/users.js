const initialState = [{
  name: 'lele',
  groups: ['admin', 'dev']
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
    default:
      return state
  }
}

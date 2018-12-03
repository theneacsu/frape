const defaultState = {
  searchTerm: '',
  showAll: true,
  hideCompleted: false
}

const todosFiltersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case 'SET_SHOW_ALL':
      return {
        ...state,
        showAll: true,
        hideCompleted: false
      }
    case 'SET_HIDE_COMPLETED': {
      return {
        ...state,
        showAll: false,
        hideCompleted: true
      }
    }
    default:
      return state
  }
}

export default todosFiltersReducer

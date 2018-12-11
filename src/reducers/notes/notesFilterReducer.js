const defaultState = {
  searchTerm: ''
}

const notesFilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        searchTerm: action.searchTerm
      }
    default:
      return state
  }
}

export default notesFilterReducer

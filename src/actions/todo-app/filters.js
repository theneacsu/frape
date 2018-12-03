const setSearchTerm = searchTerm => ({
  type: 'SET_SEARCH_TERM',
  searchTerm
})

const setShowAll = () => ({ type: 'SET_SHOW_ALL' })

const setHideCompleted = () => ({ type: 'SET_HIDE_COMPLETED' })

export { setSearchTerm, setShowAll, setHideCompleted }

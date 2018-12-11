import notesFiltersReducer from '../../../reducers/notes/notesFilterReducer'

test('Should set the inital state correctly', () => {
  const action = {
    type: '@@INIT'
  }
  const state = notesFiltersReducer(undefined, action)
  expect(state).toEqual({
    searchTerm: ''
  })
})

test('Should set the search term', () => {
  const searchTerm = 'playa'
  const action = {
    type: 'SET_SEARCH_TEXT',
    searchTerm
  }
  const state = notesFiltersReducer({ searchTerm: '' }, action)
  expect(state).toEqual({
    searchTerm
  })
})

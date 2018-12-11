import { setSearchText } from '../../../actions/notes-app/filters'

test('Should create the action object for the searching term', () => {
  const searchTerm = 'pizza'
  const action = setSearchText(searchTerm)
  expect(action).toEqual({
    type: 'SET_SEARCH_TEXT',
    searchTerm
  })
})

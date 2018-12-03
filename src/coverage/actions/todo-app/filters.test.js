import {
  setSearchTerm,
  setShowAll,
  setHideCompleted
} from '../../../actions/todo-app/filters'

test('Should return the action object for setting the search term', () => {
  const searchTerm = 'go'
  const action = setSearchTerm(searchTerm)
  expect(action).toEqual({
    type: 'SET_SEARCH_TERM',
    searchTerm
  })
})

test('Should return the action object for showing all todos', () => {
  const action = setShowAll()
  expect(action).toEqual({
    type: 'SET_SHOW_ALL'
  })
})

test('Should return the action object for hiding completed todos', () => {
  const action = setHideCompleted()
  expect(action).toEqual({
    type: 'SET_HIDE_COMPLETED'
  })
})

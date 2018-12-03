import todosFiltersReducer from '../../../reducers/todos/todosFiltersReducer'
import {
  filtersHideCompleted,
  filtersShowAll
} from '../../fixtures/todo-app/filters'

test('Should correctly initialize the default filters', () => {
  const action = { type: '@@INOT' }
  const state = todosFiltersReducer(undefined, action)
  expect(state).toEqual({
    searchTerm: '',
    showAll: true,
    hideCompleted: false
  })
})

test('Should set the search term correctly', () => {
  const searchTerm = 'go'
  const action = {
    type: 'SET_SEARCH_TERM',
    searchTerm
  }
  const state = todosFiltersReducer(filtersShowAll, action)
  expect(state).toEqual({
    ...filtersShowAll,
    searchTerm
  })
})

test('Shot set showAll to true and hideCompleted to false', () => {
  const action = {
    type: 'SET_SHOW_ALL'
  }
  const state = todosFiltersReducer(filtersHideCompleted, action)
  expect(state).toEqual({
    searchTerm: '',
    showAll: true,
    hideCompleted: false
  })
})

test('Shot set hideCompleted to true and showAll to false', () => {
  const action = {
    type: 'SET_HIDE_COMPLETED'
  }
  const state = todosFiltersReducer(filtersShowAll, action)
  expect(state).toEqual({
    searchTerm: '',
    showAll: false,
    hideCompleted: true
  })
})

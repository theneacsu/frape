import getVisibleTodos from '../../../selectors/todo-app/todos'
import todos from '../../fixtures/todo-app/todos'
import {
  filtersShowAll,
  filtersHideCompleted
} from '../../fixtures/todo-app/filters'

test('Should return all todos when there is no search term and setAll is true', () => {
  const result = getVisibleTodos(todos, filtersShowAll)
  expect(result).toEqual(todos)
})

test('Should hide all completed todos when to search term is provided', () => {
  const result = getVisibleTodos(todos, filtersHideCompleted)
  expect(result).toEqual([todos[0], todos[2]])
})

test('Should return all todos that matches the search term', () => {
  const filter = {
    ...filtersShowAll,
    searchTerm: 'go'
  }
  const result = getVisibleTodos(todos, filter)
  expect(result).toEqual([todos[0]])
})

test('Should return all active todos that match the search term', () => {
  const filter = {
    ...filtersHideCompleted,
    searchTerm: 'new'
  }
  const result = getVisibleTodos(todos, filter)
  expect(result).toEqual([])
})

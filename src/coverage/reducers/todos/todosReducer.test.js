import todosReducer from '../../../reducers/todos/todosReducer'
import todos from '../../fixtures/todo-app/todos'

test('Should correctly initialize the todos', () => {
  const action = { type: '@@INIT' }
  const state = todosReducer(undefined, action)
  expect(state).toEqual([])
})

test('Should add a todo', () => {
  const todo = {
    id: '4',
    text: 'Drink a green tea',
    completed: true
  }
  const action = {
    type: 'ADD_TODO',
    todo
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual([...todos, todo])
})

test('Should remove a todo when a valid id is provided', () => {
  const id = '1'
  const action = {
    type: 'REMOVE_TODO',
    id
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual([todos[1], todos[2]])
})

test('Should not remove a todo when an invalid id is provided', () => {
  const id = 'notFoundId'
  const action = {
    type: 'REMOVE_TODO',
    id
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual(todos)
})

test('Should toggle a todo status when a valid id is provided', () => {
  const id = '1'
  const action = {
    type: 'TOGGLE_TODO',
    id
  }
  const state = todosReducer(todos, action)
  expect(state[0].completed).toBe(true)
})

test('Should not toggle a todo status when an invalid id is provided', () => {
  const id = 'notFoundId'
  const action = {
    type: 'TOGGLE_TODO',
    id
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual(todos)
})

test('Should edit a todo when a valid id is provided', () => {
  const id = '1'
  const action = {
    type: 'EDIT_TODO',
    id,
    updates: {
      text: 'Read about Spyral Dynamics',
      completed: true
    }
  }
  const state = todosReducer(todos, action)
  expect(state[0]).toEqual({
    id,
    ...action.updates
  })
})

test('Should not edit a todo when an invalid id is provided', () => {
  const id = 'notFoundId'
  const action = {
    type: 'EDIT_TODO',
    id,
    updates: {
      text: 'Read about Spyral Dynamics',
      completed: true
    }
  }
  const state = todosReducer(todos, action)
  expect(state).toEqual(todos)
})

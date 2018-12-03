import {
  addTodo,
  editTodo,
  removeTodo,
  toggleTodo
} from '../../../actions/todo-app/todos'

let id

beforeEach(() => {
  id = '123abc'
})

test('Should return the action object for adding a todo', () => {
  const text = 'Yoga session'
  const action = addTodo(text)
  expect(action).toEqual({
    type: 'ADD_TODO',
    todo: {
      text,
      id: expect.any(String),
      completed: false
    }
  })
})

test('Should return the action object for editing a todo', () => {
  const updates = {
    text: 'Meditate',
    completed: true
  }
  const action = editTodo(id, updates)
  expect(action).toEqual({
    type: 'EDIT_TODO',
    id,
    updates
  })
})

test('Should return the action object for removing a todo', () => {
  const action = removeTodo(id)
  expect(action).toEqual({
    type: 'REMOVE_TODO',
    id
  })
})

test('Should return the action object for toggle a todo status', () => {
  const action = toggleTodo(id)
  expect(action).toEqual({
    type: 'TOGGLE_TODO',
    id
  })
})

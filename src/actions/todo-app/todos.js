import uuidv4 from 'uuid/v4'

const addTodo = text => ({
  type: 'ADD_TODO',
  todo: {
    text,
    id: uuidv4(),
    completed: false
  }
})

const editTodo = (id, updates) => ({
  type: 'EDIT_TODO',
  id,
  updates
})

const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export { addTodo, editTodo, removeTodo, toggleTodo }

import React, { Component } from 'react'
import TodoForm from '../../todo-form/TodoForm'

class TodoListItem extends Component {
  state = {
    editMode: false
  }
  render() {
    let todoListItem = this.state.editMode ? (
      <TodoForm />
    ) : (
      <div>
        <label>
          <input type="checkbox" />
          <span>Go to the gym</span>
        </label>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    )

    return todoListItem
  }
}

export default TodoListItem

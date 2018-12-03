import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoForm from '../../todo-form/TodoForm'
import {
  removeTodo,
  editTodo,
  toggleTodo
} from '../../../../actions/todo-app/todos'
import { getTodoById } from '../../../../selectors/todo-app/todos'

export class TodoListItem extends Component {
  state = {
    editMode: false
  }

  onSubmitHandler = todo => {
    this.props.editTodo(this.props.id, todo)
    this.setState(() => ({ editMode: false }))
  }

  render() {
    let todoListItem = this.state.editMode ? (
      <TodoForm
        buttonText="Save"
        todo={this.props.todo}
        onSubmit={this.onSubmitHandler}
      />
    ) : (
      <div>
        <label>
          <input
            type="checkbox"
            onChange={() => this.props.toggleTodo(this.props.id)}
          />
          <span>{this.props.text}</span>
        </label>
        <button
          onClick={() =>
            this.setState(prevState => ({ editMode: !prevState.editMode }))
          }
        >
          Edit
        </button>
        <button onClick={() => this.props.removeTodo(this.props.id)}>
          Remove
        </button>
      </div>
    )

    return todoListItem
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  removeTodo: id => dispatch(removeTodo(id)),
  editTodo: (id, updates) => dispatch(editTodo(id, updates)),
  toggleTodo: id => dispatch(toggleTodo(id))
})

const mapStateToProps = (state, props) => ({
  todo: getTodoById(state.todos, props.id)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem)

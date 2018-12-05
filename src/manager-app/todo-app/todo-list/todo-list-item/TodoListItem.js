import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import TodoForm from '../../todo-form/TodoForm'
import {
  startRemoveTodo,
  startEditTodo,
  startToggleTodo
} from '../../../../actions/todo-app/todos'
import { getTodoById } from '../../../../selectors/todo-app/todos'

export class TodoListItem extends Component {
  state = {
    editMode: false,
    isCompleted: this.props.completed
  }

  onSubmitHandler = todo => {
    this.props.startEditTodo(this.props.id, todo)
    this.setState(() => ({ editMode: false }))
  }

  onToggleHandler = id => {
    this.props.startToggleTodo(id)
    this.setState(prevState => ({
      isCompleted: !prevState.isCompleted
    }))
  }

  render() {
    const todoListItemClasses = this.state.isCompleted
      ? 'todo-list-item-text completed'
      : 'todo-list-item-text'
    let todoListItem = this.state.editMode ? (
      <TodoForm
        buttonText="Save"
        todo={this.props.todo}
        onSubmit={this.onSubmitHandler}
      />
    ) : (
      <div className="todo-list-item">
        <div className={todoListItemClasses}>
          <label className="todo-list-item-check">
            <div className="round">
              <input
                className=""
                type="checkbox"
                checked={this.props.completed}
                onChange={() => this.onToggleHandler(this.props.id)}
              />
              <label onClick={() => this.onToggleHandler(this.props.id)} />
            </div>

            <span>{this.props.text}</span>
          </label>
        </div>
        <div className="todo-list-item-icons">
          <FontAwesomeIcon
            icon="pencil-alt"
            color="#6347FF"
            onClick={() =>
              this.setState(prevState => ({ editMode: !prevState.editMode }))
            }
          />
          <FontAwesomeIcon
            className=""
            icon="trash-alt"
            color="#FF6347"
            onClick={() => this.props.startRemoveTodo(this.props.id)}
          />
        </div>
      </div>
    )

    return todoListItem
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveTodo: id => dispatch(startRemoveTodo(id)),
  startEditTodo: (id, updates) => dispatch(startEditTodo(id, updates)),
  startToggleTodo: id => dispatch(startToggleTodo(id))
})

const mapStateToProps = (state, props) => ({
  todo: getTodoById(state.todos, props.id)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem)

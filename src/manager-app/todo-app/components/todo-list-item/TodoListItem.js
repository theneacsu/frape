import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import TodoForm from '../todo-form/TodoForm'
import {
  startRemoveTodo,
  startEditTodo,
  startToggleTodo
} from '../../../../actions/todo-app/todos'
import { getTodoById } from '../../../../selectors/todo-app/todos'
import styles from './TodoListItem.module.css'

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
      ? [styles.textDiv, styles.completed].join(' ')
      : styles.textDiv
    let todoListItem = this.state.editMode ? (
      <TodoForm
        buttonText="Save"
        todo={this.props.todo}
        onSubmit={this.onSubmitHandler}
      />
    ) : (
      <div className={styles.wrapperDiv}>
        <div className={todoListItemClasses}>
          <label className={styles.label}>
            <div className={styles.round}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={this.props.completed}
                onChange={() => this.onToggleHandler(this.props.id)}
              />
              <label onClick={() => this.onToggleHandler(this.props.id)} />
            </div>

            <span className={styles.span}>{this.props.text}</span>
          </label>
        </div>
        <div className={styles.iconsDiv}>
          <FontAwesomeIcon
            className={styles.icon}
            icon="pencil-alt"
            color="#6347FF"
            onClick={() =>
              this.setState(prevState => ({ editMode: !prevState.editMode }))
            }
          />
          <FontAwesomeIcon
            className={styles.icon}
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

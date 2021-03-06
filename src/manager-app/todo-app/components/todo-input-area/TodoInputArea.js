import React from 'react'
import { connect } from 'react-redux'
import TodoForm from '../todo-form/TodoForm'
import { startAddTodo } from '../../../../actions/todo-app/todos'
import styles from './TodoInputArea.module.css'

export const TodoInputArea = props => {
  const onSubmitAddTodo = todo => props.startAddTodo(todo.text)

  return (
    <div className={styles.div}>
      <TodoForm
        placeholder="ex: Go for a run"
        buttonText="Add todo"
        onSubmit={onSubmitAddTodo}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  startAddTodo: text => dispatch(startAddTodo(text))
})

export default connect(
  undefined,
  mapDispatchToProps
)(TodoInputArea)

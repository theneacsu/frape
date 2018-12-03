import React from 'react'
import { connect } from 'react-redux'
import TodoForm from '../todo-form/TodoForm'
import { addTodo } from '../../../actions/todo-app/todos'

export const TodoInputArea = props => {
  const onSubmitAddTodo = todo => props.addTodo(todo.text)

  return (
    <div>
      <TodoForm
        placeholder="ex: Go for a run"
        buttonText="Add todo"
        onSubmit={onSubmitAddTodo}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(
  undefined,
  mapDispatchToProps
)(TodoInputArea)

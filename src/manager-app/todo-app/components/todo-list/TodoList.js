import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from '../todo-list-item/TodoListItem'
import getVisibleTodos from '../../../../selectors/todo-app/todos'

export const TodoList = props => (
  <div>
    {props.todos.length === 0 ? (
      <p>No todos left.</p>
    ) : (
      <p>
        You have{' '}
        {props.todos.reduce((acc, todo) => (todo.completed ? acc : acc + 1), 0)}{' '}
        todo(s) left.
      </p>
    )}
    {props.todos.map(todo => (
      <TodoListItem key={todo.id} {...todo} />
    ))}
  </div>
)

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.todosFilters)
})

export default connect(mapStateToProps)(TodoList)

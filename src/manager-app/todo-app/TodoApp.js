import React from 'react'
import TodoInputArea from './todo-input-area/TodoInputArea'
import TodoFilterArea from './todo-filter-area/TodoFilterArea'
import TodoList from './todo-list/TodoList'

const TodoApp = () => (
  <div className="todo-box">
    <div className="container">
      <TodoInputArea />
      <TodoFilterArea />
      <TodoList />
    </div>
  </div>
)

export default TodoApp

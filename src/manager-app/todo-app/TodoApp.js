import React from 'react'
import TodoInputArea from './todo-input-area/TodoInputArea'
import TodoFilterArea from './todo-filter-area/TodoFilterArea'
import TodoList from './todo-list/TodoList'

const TodoApp = () => (
  <div>
    <TodoInputArea />
    <TodoFilterArea />
    <TodoList />
  </div>
)

export default TodoApp

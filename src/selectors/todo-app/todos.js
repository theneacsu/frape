const getVisibleTodos = (todos, filters) => {
  const searchTermMatchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filters.searchTerm.toLowerCase())
  )

  if (filters.hideCompleted) {
    return searchTermMatchedTodos.filter(todo => !todo.completed)
  }

  return searchTermMatchedTodos
}

export const getTodoById = (todos, id) => todos.find(todo => todo.id === id)

export default getVisibleTodos

import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../../../manager-app/todo-app/todo-list/todo-list-item/TodoListItem'

let todo, removeTodoSpy, editTodoSpy, toggleTodoSpy, wrapper

beforeEach(() => {
  todo = {
    text: 'go for a run',
    completed: true
  }
  removeTodoSpy = jest.fn()
  editTodoSpy = jest.fn()
  toggleTodoSpy = jest.fn()
  wrapper = shallow(
    <TodoListItem
      removeTodo={removeTodoSpy}
      editTodo={editTodoSpy}
      toggleTodo={toggleTodoSpy}
      todo={todo}
    />
  )
})

test('Should render correctly the TodoListItem component', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should remove the todo', () => {
  wrapper
    .find('button')
    .at(1)
    .simulate('click')
  expect(removeTodoSpy).toHaveBeenLastCalledWith(wrapper.prop('id'))
})

test('Should toggle the todo completed status', () => {
  wrapper
    .find('input')
    .at(0)
    .simulate('change')
  expect(toggleTodoSpy).toHaveBeenLastCalledWith(wrapper.prop('id'))
})

test('Should edit the todo', () => {
  wrapper
    .find('button')
    .at(0)
    .simulate('click')
  expect(wrapper.state('editMode')).toBe(true)
  wrapper.find('TodoForm').prop('onSubmit')(todo)
  expect(editTodoSpy).toHaveBeenLastCalledWith(wrapper.prop('id'), todo)
})

import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../../../manager-app/todo-app/todo-list/todo-list-item/TodoListItem'

let todo, startRemoveTodoSpy, startEditTodoSpy, startToggleTodoSpy, wrapper

beforeEach(() => {
  todo = {
    text: 'go for a run',
    completed: true
  }
  startRemoveTodoSpy = jest.fn()
  startEditTodoSpy = jest.fn()
  startToggleTodoSpy = jest.fn()
  wrapper = shallow(
    <TodoListItem
      startRemoveTodo={startRemoveTodoSpy}
      startEditTodo={startEditTodoSpy}
      startToggleTodo={startToggleTodoSpy}
      todo={todo}
    />
  )
})

test('Should render correctly the TodoListItem component', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should remove the todo', () => {
  wrapper
    .find('FontAwesomeIcon')
    .at(1)
    .prop('onClick')()
  expect(startRemoveTodoSpy).toHaveBeenLastCalledWith(wrapper.prop('id'))
})

test('Should toggle the todo completed status', () => {
  wrapper
    .find('input')
    .at(0)
    .simulate('change')
  expect(startToggleTodoSpy).toHaveBeenLastCalledWith(wrapper.prop('id'))
})

test('Should edit the todo', () => {
  wrapper
    .find('FontAwesomeIcon')
    .at(0)
    .prop('onClick')()
  expect(wrapper.state('editMode')).toBe(true)
  wrapper.find('TodoForm').prop('onSubmit')(todo)
  expect(startEditTodoSpy).toHaveBeenLastCalledWith(wrapper.prop('id'), todo)
})

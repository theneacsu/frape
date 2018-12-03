import React from 'react'
import { shallow } from 'enzyme'
import { TodoInputArea } from '../../../../manager-app/todo-app/todo-input-area/TodoInputArea'

test('Should render correctly the TodoInputArea component', () => {
  const wrapper = shallow(<TodoInputArea />)
  expect(wrapper).toMatchSnapshot()
})

test('Should call the addTodo action when the form is submited with valid data', () => {
  const addTodoSpy = jest.fn()
  const todo = {
    text: 'Drink a latte',
    completed: false
  }
  const wrapper = shallow(<TodoInputArea addTodo={addTodoSpy} />)
  wrapper.find('TodoForm').prop('onSubmit')(todo)
  expect(addTodoSpy).toHaveBeenLastCalledWith(todo.text)
})

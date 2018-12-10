import React from 'react'
import { shallow } from 'enzyme'
import { TodoInputArea } from './TodoInputArea'

test('Should render correctly the TodoInputArea component', () => {
  const wrapper = shallow(<TodoInputArea />)
  expect(wrapper).toMatchSnapshot()
})

test('Should call the addTodo action when the form is submited with valid data', () => {
  const startAddTodoSpy = jest.fn()
  const todo = {
    text: 'Drink a latte',
    completed: false
  }
  const wrapper = shallow(<TodoInputArea startAddTodo={startAddTodoSpy} />)
  wrapper.find('TodoForm').prop('onSubmit')(todo)
  expect(startAddTodoSpy).toHaveBeenLastCalledWith(todo.text)
})

import React from 'react'
import { shallow } from 'enzyme'
import TodoForm from '../../../../manager-app/todo-app/todo-form/TodoForm'

test('Should render correctly the TodoForm component for adding a todo', () => {
  const wrapper = shallow(
    <TodoForm placeholder="ex: Go for a run" buttonText="Add todo" />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Should render correctly the TodoForm component for editing a todo', () => {
  const wrapper = shallow(<TodoForm buttonText="Save" />)
  expect(wrapper).toMatchSnapshot()
})

test('Should correctly set the todo text when typing into the input', () => {
  const wrapper = shallow(<TodoForm buttonText="Save" />)
  const value = 'Buy'
  wrapper.find('input').simulate('change', {
    target: {
      value
    }
  })
  expect(wrapper.state('todoText')).toBe(value)
  expect(wrapper.state('error')).toBe(undefined)
})

test('Should correctly display the error on invalid form submission', () => {
  const wrapper = shallow(
    <TodoForm placeholder="ex: Go for a run" buttonText="Add todo" />
  )
  expect(wrapper.state('error')).toBe(undefined)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
})

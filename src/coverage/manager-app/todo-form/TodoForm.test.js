import React from 'react'
import { shallow } from 'enzyme'
import TodoForm from '../../../manager-app/todo-app/todo-form/TodoForm'

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

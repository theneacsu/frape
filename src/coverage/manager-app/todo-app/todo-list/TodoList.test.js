import React from 'react'
import { shallow } from 'enzyme'
import { TodoList } from '../../../../manager-app/todo-app/todo-list/TodoList'
import todos from '../../../fixtures/todo-app/todos'

test('Should render correctly the TodoList component where there are no todos', () => {
  const wrapper = shallow(<TodoList todos={[]} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render correctly the TodoList component when there are todos', () => {
  const wrapper = shallow(<TodoList todos={todos} />)
  expect(wrapper).toMatchSnapshot()
})

import React from 'react'
import { shallow } from 'enzyme'
import TodoApp from './TodoApp'

test('Should render correctly the TodoApp component', () => {
  const wrapper = shallow(<TodoApp />)
  expect(wrapper).toMatchSnapshot()
})

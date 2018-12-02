import React from 'react'
import { shallow } from 'enzyme'
import TodoInputArea from '../../../manager-app/todo-app/todo-input-area/TodoInputArea'

test('Should render correctly the TodoInputArea component', () => {
  const wrapper = shallow(<TodoInputArea />)
  expect(wrapper).toMatchSnapshot()
})

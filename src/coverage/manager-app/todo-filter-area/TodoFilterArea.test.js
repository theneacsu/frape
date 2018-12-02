import React from 'react'
import { shallow } from 'enzyme'
import TodoFilterArea from '../../../manager-app/todo-app/todo-filter-area/TodoFilterArea'

test('Should render correctly the TodoFilterArea component', () => {
  const wrapper = shallow(<TodoFilterArea />)
  expect(wrapper).toMatchSnapshot()
})

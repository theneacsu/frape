import React from 'react'
import { shallow } from 'enzyme'
import ManagerApp from '../../manager-app/ManagerApp'

test('Should render correctly the ManagerApp component', () => {
  const wrapper = shallow(<ManagerApp />)
  expect(wrapper).toMatchSnapshot()
})

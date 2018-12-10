import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../../manager-app/components/Login/Login'

test('Should render correctly the Login component', () => {
  const wrapper = shallow(<Login />)
  expect(wrapper).toMatchSnapshot()
})

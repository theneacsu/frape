import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../../manager-app/components/LoginPage'

test('Should render correctly the LoginPage component', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})

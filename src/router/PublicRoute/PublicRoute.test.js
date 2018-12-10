import React from 'react'
import { shallow } from 'enzyme'
import { PublicRoute } from './PublicRoute'
import Login from '../../manager-app/components/Login/Login'

test('Should redirect to Dashboard when the user is authenticated', () => {
  const wrapper = shallow(
    <PublicRoute path="/dashboard" component={Login} isAuthenticated={true} />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Should render correcyly the Login component when the user is not authenticated', () => {
  const wrapper = shallow(
    <PublicRoute path="/dashboard" component={Login} isAuthenticated={false} />
  )
  expect(wrapper).toMatchSnapshot()
})

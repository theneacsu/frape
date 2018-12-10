import React from 'react'
import { shallow } from 'enzyme'
import { PrivateRoute } from './PrivateRoute'
import Dashboard from '../../manager-app/components/Dashboard/Dashboard'

test('Should render correctly the PrivateRoute when the user is authenticated', () => {
  const wrapper = shallow(
    <PrivateRoute
      path="/dashboard"
      component={Dashboard}
      isAuthenticated={true}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Should redirect to Login root page when the user is not authenticated', () => {
  const wrapper = shallow(
    <PrivateRoute
      path="/dashboard"
      component={Dashboard}
      isAuthenticated={false}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

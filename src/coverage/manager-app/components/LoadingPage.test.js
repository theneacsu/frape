import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../../manager-app/components/LoadingPage'

test('Should render correctly the LoadingPage component', () => {
  const wrapper = shallow(<LoadingPage />)
  expect(wrapper).toMatchSnapshot()
})

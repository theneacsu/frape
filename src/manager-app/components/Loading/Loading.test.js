import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

test('Should render correctly the LoadingPage component', () => {
  const wrapper = shallow(<Loading />)
  expect(wrapper).toMatchSnapshot()
})

import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../../manager-app/components/Footer'

test('Should render correctly the footer component', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper).toMatchSnapshot()
})

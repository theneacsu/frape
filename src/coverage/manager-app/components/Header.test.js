import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../../manager-app/components/Header'

let wrapper, startLogoutSpy

beforeEach(() => {
  startLogoutSpy = jest.fn()
  wrapper = shallow(<Header startLogout={startLogoutSpy} />)
})

test('Render the Header component correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should logout', () => {
  wrapper.find('button').simulate('click')
  expect(startLogoutSpy).toHaveBeenCalled()
})

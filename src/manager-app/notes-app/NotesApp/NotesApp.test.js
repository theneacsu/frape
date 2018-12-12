import React from 'react'
import { shallow } from 'enzyme'
import NotesApp from './NotesApp'

test('Should render the NotesApp component correctly', () => {
  const wrapper = shallow(<NotesApp />)
  expect(wrapper).toMatchSnapshot()
})

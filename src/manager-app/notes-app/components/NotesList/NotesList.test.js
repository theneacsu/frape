import React from 'react'
import { shallow } from 'enzyme'
import { NotesList } from './NotesList'
import notes from '../../../../coverage/fixtures/notes-app/notes'

test('Should render the NotesList component correctly with no notes provided', () => {
  const wrapper = shallow(<NotesList notes={[]} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render the NotesList component correctly with notes provided', () => {
  const wrapper = shallow(<NotesList notes={notes} />)
  expect(wrapper).toMatchSnapshot()
})

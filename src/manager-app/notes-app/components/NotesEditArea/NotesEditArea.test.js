import React from 'react'
import { shallow } from 'enzyme'
import { NotesEditArea } from './NotesEditArea'

let note, startEditNoteSpy, startRemoveNoteSpy, history, wrapper

beforeEach(() => {
  note = {
    id: '123abc',
    title: 'I got my mind set on you',
    body: 'old music'
  }
  startEditNoteSpy = jest.fn()
  startRemoveNoteSpy = jest.fn()
  history = {
    push: jest.fn()
  }
  wrapper = shallow(
    <NotesEditArea
      history={history}
      note={note}
      startEditNote={startEditNoteSpy}
      startRemoveNote={startRemoveNoteSpy}
    />
  )
})

test('Should render the NotesEditArea component correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should call startEditNote', () => {
  const noteUpdate = {
    text: 'bla bla'
  }
  wrapper.find('NotesForm').prop('onSubmit')(noteUpdate)
  expect(startEditNoteSpy).toHaveBeenLastCalledWith(note.id, noteUpdate)
  expect(history.push).toHaveBeenLastCalledWith('/notes')
})

test('Should call startRemoveNote', () => {
  wrapper.find('NotesForm').prop('onRemove')()
  expect(startRemoveNoteSpy).toHaveBeenLastCalledWith(note.id)
  expect(history.push).toHaveBeenLastCalledWith('/notes')
})

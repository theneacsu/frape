import React from 'react'
import { shallow } from 'enzyme'
import NotesForm from './NotesForm'

let purpose,
  titlePlaceholder,
  bodyPlaceholder,
  onSubmitSpy,
  noteData,
  onRemoveSpy,
  history

beforeEach(() => {
  noteData = {
    text: 'Eat fruits',
    body: 'A lot of them'
  }
  titlePlaceholder = 'a title'
  bodyPlaceholder = 'a body'
  purpose = 'add'
  onSubmitSpy = jest.fn()
  onRemoveSpy = jest.fn()
  history = {
    push: jest.fn()
  }
})

test('Should render the NotesForm component when adding a new note correctly', () => {
  const wrapper = shallow(
    <NotesForm
      purpose={purpose}
      titlePlaceholde={titlePlaceholder}
      bodyPlaceholder={bodyPlaceholder}
      onSubmit={onSubmitSpy}
    />
  )

  expect(wrapper).toMatchSnapshot()
})

test('Should render the NotesForm component when editing a note correctly', () => {
  purpose = 'edit'
  const wrapper = shallow(
    <NotesForm
      purpose={purpose}
      note={noteData}
      onSubmit={onSubmitSpy}
      onRemove={onRemoveSpy}
    />
  )

  expect(wrapper).toMatchSnapshot()
})

test('Should set state correctly when input change', () => {
  const value = 'headphones'
  const wrapper = shallow(
    <NotesForm
      purpose={purpose}
      titlePlaceholde={titlePlaceholder}
      bodyPlaceholder={bodyPlaceholder}
      onSubmit={onSubmitSpy}
    />
  )
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: {
        value
      }
    })
  expect(wrapper.state('title')).toBe(value)
})

test('Should set state correctly when textarea change', () => {
  const value = 'go home'
  const wrapper = shallow(
    <NotesForm
      purpose={purpose}
      titlePlaceholde={titlePlaceholder}
      bodyPlaceholder={bodyPlaceholder}
      onSubmit={onSubmitSpy}
    />
  )
  wrapper
    .find('textarea')
    .at(0)
    .simulate('change', {
      target: {
        value
      }
    })
  expect(wrapper.state('body')).toBe(value)
})

test('Should set state correctly when invalid data is submited', () => {
  const wrapper = shallow(
    <NotesForm
      purpose={purpose}
      titlePlaceholde={titlePlaceholder}
      bodyPlaceholder={bodyPlaceholder}
      onSubmit={onSubmitSpy}
    />
  )
  wrapper.setState({ title: '' })
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
})

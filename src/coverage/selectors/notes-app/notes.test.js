import { getVisibleNotes } from '../../../selectors/notes-app/notes'
import notes from '../../fixtures/notes-app/notes'

test('Should return all notes when the filter is not set', () => {
  const result = getVisibleNotes(notes, { searchTerm: '' })
  expect(result).toEqual(notes)
})

test('Should return the filtered notes when the filter is set', () => {
  const result = getVisibleNotes(notes, { searchTerm: 'is' })
  expect(result).toEqual([notes[0], notes[1]])
})

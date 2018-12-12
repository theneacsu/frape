const getVisibleNotes = (notes, filters) => {
  if (filters.searchTerm) {
    return notes.filter(note => {
      const isTitleMatch = note.title
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase())
      const isBodyMatch = note.body
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase())

      return isTitleMatch || isBodyMatch
    })
  }
  return notes
}

export { getVisibleNotes }

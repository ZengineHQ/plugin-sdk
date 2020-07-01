import recordMatchesFilter from '../src/filter-matcher'

const filter = {
  and: [
    {
      attribute: 'field1',
      prefix: '',
      value: 'US'
    }
  ]
}

const record1 = {
  field1: 'US'
}

const record2 = {
  field1: 'BR'
}

// @TODO expand test cases for all exported functions
test('It passes a trivial contrived test', () => {
  const match1 = recordMatchesFilter(record1, filter)
  expect(match1).toEqual(true)

  const match2 = recordMatchesFilter(record2, filter)
  expect(match2).toEqual(false)
})

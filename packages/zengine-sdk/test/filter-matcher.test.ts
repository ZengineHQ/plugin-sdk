import recordMatchesFilter from '../src/filter-matcher'

const equalsFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: '',
      value: 'US'
    }
  ]
}
const notEqualsFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'not',
      value: 'US'
    }
  ]
}
const andEqualsFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: '',
      value: 'US'
    },
    {
      attribute: 'field2',
      prefix: '',
      value: 'BR'
    }
  ]
}
const orEqualsFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: '',
      value: 'US'
    },
    {
      attribute: 'field2',
      prefix: '',
      value: 'US'
    }
  ]
}
const andStartsWithFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'starts-with',
      value: 'Hello'
    },
    {
      attribute: 'field2',
      prefix: 'starts-with',
      value: 'Foo'
    }
  ]
}
const andEndsWithFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'ends-with',
      value: 'World!'
    },
    {
      attribute: 'field2',
      prefix: 'ends-with',
      value: 'Bar!'
    }
  ]
}
const andContainsFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'contains',
      value: 'llo Wo'
    },
    {
      attribute: 'field2',
      prefix: 'contains',
      value: 'oo Ba'
    }
  ]
}

const record1Field_US = {
  field1: 'US'
}
const record1Field_BR = {
  field1: 'BR'
}
const record2Fields_US_BR = {
  field1: 'US',
  field2: 'BR'
}
const record2Fields_US1_BR = {
  field1: 'US1',
  field2: 'BR'
}
const record2Fields_HelloWorld_FooBar = {
  field1: 'Hello World!',
  field2: 'Foo Bar!'
}

test('Record matched filter', () => {
  const match = recordMatchesFilter(record1Field_US, equalsFilter)
  expect(match).toEqual(true)
})

test('Record matched not filter', () => {
  const match = recordMatchesFilter(record1Field_BR, notEqualsFilter)
  expect(match).toEqual(true)
})

test('AND - EQUALS - Display field based on two previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US_BR, andEqualsFilter)
  expect(match).toEqual(true)
})

test('OR - EQUALS - Display field based on two previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US_BR, orEqualsFilter)
  expect(match).toEqual(true)
})

test('AND - EQUALS - Hide field based on two previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US1_BR, andEqualsFilter)
  expect(match).toEqual(false)
})

test('OR - EQUALS - Hide field based on two previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US1_BR, orEqualsFilter)
  expect(match).toEqual(false)
})

test('AND - StartsWith - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloWorld_FooBar, andStartsWithFilter)
  expect(match).toEqual(true)
})

test('AND - EndsWith - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloWorld_FooBar, andEndsWithFilter)
  expect(match).toEqual(true)
})

test('AND - Contains - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloWorld_FooBar, andContainsFilter)
  expect(match).toEqual(true)
})
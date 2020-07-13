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
const andNotEqualsFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'not',
      value: 'US'
    },
    {
      attribute: 'field2',
      prefix: 'not',
      value: 'BR'
    }
  ]
}
const orNotEqualsFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: 'not',
      value: 'US'
    },
    {
      attribute: 'field2',
      prefix: 'not',
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
const orStartsWithFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: 'starts-with',
      value: 'Hello'
    },
    {
      attribute: 'field2',
      prefix: 'starts-with',
      value: 'Hello'
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
const orEndsWithFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: 'ends-with',
      value: 'World!'
    },
    {
      attribute: 'field2',
      prefix: 'ends-with',
      value: 'World!'
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
const orContainsFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: 'contains',
      value: 'llo Bar'
    },
    {
      attribute: 'field2',
      prefix: 'contains',
      value: 'llo Bar'
    }
  ]
}
const andNotContainsFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'not-contains',
      value: 'oo Ba'
    },
    {
      attribute: 'field2',
      prefix: 'not-contains',
      value: 'llo Wo'
    }
  ]
}
const orNotContainsFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: 'not-contains',
      value: 'llo Bar'
    },
    {
      attribute: 'field2',
      prefix: 'not-contains',
      value: 'llo Bar'
    }
  ]
}
const andMinFilterString = {
  and: [
    {
      attribute: 'field1',
      prefix: 'min',
      value: '900'
    },
    {
      attribute: 'field2',
      prefix: 'min',
      value: '1900'
    }
  ]
}
const orMinFilterString = {
  or: [
    {
      attribute: 'field1',
      prefix: 'min',
      value: '900'
    },
    {
      attribute: 'field2',
      prefix: 'min',
      value: '3000'
    }
  ]
}
const andMaxFilterString = {
  and: [
    {
      attribute: 'field1',
      prefix: 'max',
      value: '1100'
    },
    {
      attribute: 'field2',
      prefix: 'max',
      value: '2100'
    }
  ]
}
const orMaxFilterString = {
  or: [
    {
      attribute: 'field1',
      prefix: 'max',
      value: '1000'
    },
    {
      attribute: 'field2',
      prefix: 'max',
      value: '900'
    }
  ]
}
const andInFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'in',
      value: ['US', 'BR']
    },
    {
      attribute: 'field2',
      prefix: 'in',
      value: ['US', 'BR']
    }
  ]
}
const orInFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: 'in',
      value: ['US', 'BR']
    },
    {
      attribute: 'field2',
      prefix: 'in',
      value: ['EU', 'AS']
    }
  ]
}
const andNotInFilter = {
  and: [
    {
      attribute: 'field1',
      prefix: 'not-in',
      value: ['EU', 'AS']
    },
    {
      attribute: 'field2',
      prefix: 'not-in',
      value: ['EU', 'AS']
    }
  ]
}
const orNotInFilter = {
  or: [
    {
      attribute: 'field1',
      prefix: 'not-in',
      value: ['US', 'BR']
    },
    {
      attribute: 'field2',
      prefix: 'not-in',
      value: ['EU', 'AS']
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
const record2Fields_US1_BR1 = {
  field1: 'US1',
  field2: 'BR1'
}
const record2Fields_HelloWorld_FooBar = {
  field1: 'Hello World!',
  field2: 'Foo Bar!'
}
const record2Fields_HelloBar_FooWorld = {
  field1: 'Hello Bar!',
  field2: 'Foo World!'
}
const record2Fields_1000_2000_String = {
  field1: '1000',
  field2: '2000'
}
const record2Fields_1000_2000_StringDollar = {
  field1: '$1000',
  field2: '$2000'
}
const record2Fields_1000_2000_Number = {
  field1: 1000,
  field2: 2000
}

// EQUALS
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

// NOT EQUALS
test('AND - NOT EQUALS - Display field based on two previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US1_BR1, andNotEqualsFilter)
  expect(match).toEqual(true)
})

test('OR - NOT EQUALS - Display field based on two previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US1_BR, orNotEqualsFilter)
  expect(match).toEqual(true)
})

// STARTS WITH
test('AND - StartsWith - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloWorld_FooBar, andStartsWithFilter)
  expect(match).toEqual(true)
})

test('OR - StartsWith - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloBar_FooWorld, orStartsWithFilter)
  expect(match).toEqual(true)
})

// ENDS WITH
test('AND - EndsWith - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloWorld_FooBar, andEndsWithFilter)
  expect(match).toEqual(true)
})

test('OR - EndsWith - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloBar_FooWorld, orEndsWithFilter)
  expect(match).toEqual(true)
})

// CONTAINS
test('AND - Contains - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloWorld_FooBar, andContainsFilter)
  expect(match).toEqual(true)
})

test('OR - Contains - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloBar_FooWorld, orContainsFilter)
  expect(match).toEqual(true)
})

// NOT CONTAINS
test('AND - NOT Contains - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloWorld_FooBar, andNotContainsFilter)
  expect(match).toEqual(true)
})

test('OR - NOT Contains - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_HelloBar_FooWorld, orNotContainsFilter)
  expect(match).toEqual(true)
})

// MIN
test('AND - MIN String - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_1000_2000_String, andMinFilterString)
  expect(match).toEqual(true)
})
test('AND - MIN String Dollar - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_1000_2000_StringDollar, andMinFilterString)
  expect(match).toEqual(true)
})
test('AND - MIN Number - Throws TypeError exception - Min filter doesn\'t support invalid numbers on input', () => {
  const methodCall = () => recordMatchesFilter(record2Fields_1000_2000_Number, andMinFilterString)
  expect(methodCall).toThrow(TypeError)
})
test('OR - MIN String - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_1000_2000_String, orMinFilterString)
  expect(match).toEqual(true)
})

// MAX
test('AND - MAX String - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_1000_2000_String, andMaxFilterString)
  expect(match).toEqual(true)
})
test('AND - MAX String Dollar - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_1000_2000_StringDollar, andMaxFilterString)
  expect(match).toEqual(true)
})
test('AND - MAX Number - Throws TypeError exception - Max filter doesn\'t support invalid numbers on input', () => {
  const methodCall = () => recordMatchesFilter(record2Fields_1000_2000_Number, andMaxFilterString)
  expect(methodCall).toThrow(TypeError)
})
test('OR - MAX String - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_1000_2000_String, orMaxFilterString)
  expect(match).toEqual(true)
})

// IN
test('AND - IN - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US_BR, andInFilter)
  expect(match).toEqual(true)
})
test('OR - IN - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US_BR, orInFilter)
  expect(match).toEqual(true)
})

// NOT IN
test('AND - NOT IN - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US_BR, andNotInFilter)
  expect(match).toEqual(true)
})
test('OR - NOT IN - Display field based on two  previous fields', () => {
  const match = recordMatchesFilter(record2Fields_US_BR, orNotInFilter)
  expect(match).toEqual(true)
})

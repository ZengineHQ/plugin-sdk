import extractOptions from '../../src/util/extractOptions';

test('It correctly processes an array of strings', () => {
  const data = ['optOne', 'optTwo', 'optThree'];
  expect(extractOptions(data)).toEqual([
    { key: 'optOne', value: 'optOne' },
    { key: 'optTwo', value: 'optTwo' },
    { key: 'optThree', value: 'optThree' }
  ])
});

test('It correctly processes an array of objects', () => {
  const data = [
    { key: 'one', value: 'Option One' },
    { key: 'two', value: 'Option Two' },
    { key: 'three', value: 'Option Three' },
  ];
  expect(extractOptions(data)).toEqual([
    { key: 'one', value: 'Option One' },
    { key: 'two', value: 'Option Two' },
    { key: 'three', value: 'Option Three' }
  ])
});

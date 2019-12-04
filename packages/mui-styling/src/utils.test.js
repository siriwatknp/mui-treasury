import { pick, getRepeatedItems } from './utils';

describe('utils', () => {
  it('should return correct format of result', () => {
    expect(pick(undefined)).toBeUndefined();
    expect(pick({ a: '', b: [], c: 'hello' }, ['a', 'b'])).toEqual({
      a: '',
      b: [],
    });
    expect(pick({ a: '', b: [], c: 'hello' }, ['a', 'd'])).toEqual({
      a: '',
    });
  });

  it('should return repeated items', () => {
    expect(getRepeatedItems(undefined)).toEqual(undefined);
    expect(getRepeatedItems(null)).toEqual(null);
    expect(getRepeatedItems(['a', 'b', 'b', 'c', 'd', 'a'])).toEqual([
      'a',
      'b',
    ]);
    expect(getRepeatedItems(['1', '2', '3', 1])).toEqual([]);
  });
});

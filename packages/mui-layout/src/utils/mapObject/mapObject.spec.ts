import { mapObject } from './mapObject';

describe('Utils', function() {
  const obj = {
    test: {
      id: 'test',
      name: 'hello',
    },
    id: {
      id: 'id',
      gender: 'male',
    },
  };
  it('mapObject with only key iteratee', () => {
    const result = mapObject(obj, (value, key) => `${key}-${value.id}`)
    expect(result).toEqual({
      'test-test': obj.test,
      'id-id': obj.id,
    });
  });

  it('mapObject with key & value iteratee', () => {
    const result = mapObject(
      obj,
      (value, key) => `${key}_${value.id}`,
      (value, key) => ({ ...value, key })
    );
    expect(result).toEqual({
      test_test: {
        ...obj.test,
        key: 'test',
      },
      id_id: {
        ...obj.id,
        key: 'id',
      },
    });
  });
});

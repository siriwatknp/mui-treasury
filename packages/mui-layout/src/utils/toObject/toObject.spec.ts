import { toObject } from './toObject';

describe('Utils', () => {
  describe('Array of string | number', () => {
    it('without transformer', () => {
      expect(toObject(['test', 3])).toEqual({
        test: 'test',
        '3': 3,
      });
    });

    it('transformer provided', () => {
      expect(
        toObject(['test', 3], item => ({
          id: item,
          open: typeof item === 'number',
        }))
      ).toEqual({
        test: {
          id: 'test',
          open: false,
        },
        '3': {
          id: 3,
          open: true,
        },
      });
    });
  });

  describe('Collection', () => {
    const collection = [
      { id: 'test', props: { name: 'Manas' } },
      { id: 1, props: { name: 'Belle' } },
    ];
    it('without transformer', () => {
      const result = toObject(collection, 'id')
      expect(result).toEqual({
        test: {
          id: 'test',
          props: { name: 'Manas' },
        },
        '1': {
          id: 1,
          props: { name: 'Belle' },
        },
      });
    });

    it('transformer provided', () => {
      const result = toObject(collection, 'id', ({ props }) => ({
        ...props,
      }));
      expect(result).toEqual({
        test: { name: 'Manas' },
        '1': { name: 'Belle' },
      });
    });
  });
});

import { positionInsideRow, positionInsideColumn } from './core';
import each from 'jest-each';

describe('Flex', () => {
  describe('Row', () => {
    each([
      ['left', undefined],
      ['right', { marginLeft: 'auto' }],
      ['top', { alignSelf: 'flex-start' }],
      ['bottom', { alignSelf: 'flex-end' }],
      ['middle', { alignSelf: 'center' }],
      [
        'center',
        { alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto' },
      ],
    ]).it('position: %s should return correct style', (pos, expectedValue) => {
      expect(positionInsideRow(pos)).toEqual(expectedValue);
    });
  });

  describe('Column', () => {
    each([
      ['left', { alignSelf: 'flex-start' }],
      ['right', { alignSelf: 'flex-end' }],
      ['top', undefined],
      ['bottom', { marginTop: 'auto' }],
      ['middle', { marginTop: 'auto', marginBottom: 'auto' }],
      [
        'center',
        { alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto' },
      ],
    ]).it('position: %s should return correct style', (pos, expectedValue) => {
      expect(positionInsideColumn(pos)).toEqual(expectedValue);
    });
  });
});

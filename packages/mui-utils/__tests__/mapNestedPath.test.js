import mapNestedPath from '../src/mapNestedPath';

const data = [
  {
    key: 'key1',
    subMenus: [{ key: 'key2' }, { key: 'key3', subMenus: [{ key: 'key4' }] }],
  },
  {
    key: 'key5',
    subMenus: [
      { key: 'key6' },
      { key: 'key7', subMenus: [{ key: 'key8', subMenus: [{ key: 'key9' }] }] },
    ],
  },
];
describe('mapNestedPath', () => {
  it('should return correct mapping', () => {
    expect(mapNestedPath(data)).toEqual({
      key1: ['key2', 'key3', 'key4'],
      key2: [],
      key3: ['key4'],
      key4: [],
      key5: ['key6', 'key7', 'key8', 'key9'],
      key6: [],
      key7: ['key8', 'key9'],
      key8: ['key9'],
      key9: [],
    });
  });
});

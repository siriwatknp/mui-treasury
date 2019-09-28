import getThemeColor from '../src/getThemeColor';

const palette = {
  primary: {
    main: '#000000',
  },
  divider: '#f7f7f7',
};

test('getThemeColor return correct color', () => {
  expect(getThemeColor(palette, 'primary.main')).toEqual(palette.primary.main);
  expect(getThemeColor(palette, 'divider')).toEqual(palette.divider);
  expect(getThemeColor(palette, '#ff5252')).toEqual('#ff5252');
  expect(getThemeColor(palette, 'rgba(0,0,0,0.15)')).toEqual(
    'rgba(0,0,0,0.15)'
  );
});

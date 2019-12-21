import createWidth, { reduceWidths } from '../../models/width';

describe('Width', () => {
  test('turn width to css auto', () => {
    const width = createWidth('auto');
    expect(width.getStyle()).toEqual({ width: 'auto' });
  });

  test('turn width to css', () => {
    const width = createWidth();
    expect(width.getStyle()).toBeUndefined();
  });

  test('turn width to css', () => {
    const width = createWidth(200);
    expect(width.getStyle()).toEqual({ width: 'calc(100% - 200px)' });
  });

  test('reduce widths to css', () => {
    const widths = [
      createWidth(100),
      createWidth(200),
    ];
    expect(reduceWidths(widths).getStyle()).toEqual({
      width: 'calc(100% - 300px)',
    });
  });
});

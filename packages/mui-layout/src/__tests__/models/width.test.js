import createWidth, { reduceWidths } from '../../models/width';

describe('Width', () => {
  test('turn width to css auto', () => {
    let width = createWidth('auto');
    expect(width.getStyle()).toEqual({ width: 'auto' });

    width = createWidth();
    expect(width.getStyle()).toBeUndefined();

    width = createWidth(200);
    expect(width.getStyle()).toEqual({ width: 'calc(100% - 200px)' });
  });

  test('reduce widths to css', () => {
    let widths = [createWidth(100), createWidth(200)];
    expect(reduceWidths(widths).getStyle()).toEqual({
      width: 'calc(100% - 300px)',
    });

    widths = [createWidth('25%'), createWidth(200)];
    expect(reduceWidths(widths).getStyle()).toEqual({
      width: 'calc(100% - (25% + 200px))',
    });

    widths = [createWidth('25%'), createWidth(200), createWidth('15em')];
    expect(reduceWidths(widths).getStyle()).toEqual({
      width: 'calc(100% - (25% + 200px + 15em))',
    });
  });
});

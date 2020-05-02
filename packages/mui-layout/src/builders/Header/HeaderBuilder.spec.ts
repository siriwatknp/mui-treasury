import HeaderBuilder from './HeaderBuilder';

describe('HeaderBuilder', () => {
  it('should accept initial map', () => {
    const map = {
      xs: {
        position: 'sticky' as const,
        initialHeight: 56,
        id: 'appHeader',
      },
      md: {
        position: 'sticky' as const,
        initialHeight: 64,
        clipped: true,
        id: 'appHeader',
      },
    };
    const builder = HeaderBuilder(map);

    expect(builder.getData()).toEqual(map);
  });
});

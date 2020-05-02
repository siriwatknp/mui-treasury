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

  it('auto insert default initial height if not provided', () => {
    const builder = HeaderBuilder();
    builder
      .create('header')
      .registerConfig('xs', {
        position: 'sticky',
      })
      .registerConfig('sm', {
        position: 'fixed',
      })
      .registerConfig('lg', {
        position: 'relative',
      })
      .registerConfig('xl', {
        position: 'absolute',
        initialHeight: 80,
      })
    expect(builder.getData()).toStrictEqual({
      xl: {
        id: 'header',
        initialHeight: 80,
        position: 'absolute',
      },
      lg: {
        id: 'header',
        initialHeight: 64,
        position: 'relative',
      },
      sm: {
        id: 'header',
        initialHeight: 64,
        position: 'fixed',
      },
      xs: {
        id: 'header',
        initialHeight: 56,
        position: 'sticky',
      },
    });
  });
});

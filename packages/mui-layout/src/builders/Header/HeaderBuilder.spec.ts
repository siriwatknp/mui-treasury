import HeaderBuilder from './HeaderBuilder';

describe('HeaderBuilder', () => {
  it('should have default registry and overridden by a new one', () => {
    const builder = HeaderBuilder();
    builder
      .registerConfig('xs', {
        position: 'sticky',
        clipped: true,
      })
      .registerConfig('md', {
        position: 'relative',
      });

    expect(builder.getData()).toStrictEqual({
      xs: {
        id: 'header',
        position: 'sticky',
        clipped: true,
        initialHeight: 56,
      },
      md: {
        id: 'header',
        position: 'relative',
        initialHeight: 64,
      },
    });
    expect(builder.getId()).toEqual('header')

    builder.create('newHeader')
    expect(builder.getData()).toEqual({})
    expect(builder.getId()).toEqual('newHeader')
  });

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
      });
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

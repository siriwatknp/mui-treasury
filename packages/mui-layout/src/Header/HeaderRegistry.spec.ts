import HeaderRegistry from './HeaderRegistry';

describe('HeaderRegistry', () => {
  it('can register responsive config', () => {
    const registry = new HeaderRegistry('header');

    registry.registerConfig('xs', {
      position: 'relative',
      initialHeight: 56,
    });

    expect(registry.id).toEqual('header');
    expect(registry.rpsConfig).toEqual({
      xs: {
        id: 'header',
        position: 'relative',
        initialHeight: 56,
      },
    });
  });

  it('can chain responsive config and provide default initialHeight', () => {
    const registry = new HeaderRegistry('header');

    registry
      .registerConfig('xs', {
        position: 'relative',
        initialHeight: 56,
      })
      .registerConfig('md', {
        position: 'sticky',
        top: 0,
      });

    expect(registry.id).toEqual('header');
    expect(registry.rpsConfig).toEqual({
      xs: {
        id: 'header',
        position: 'relative',
        initialHeight: 56,
      },
      md: {
        id: 'header',
        position: 'sticky',
        top: 0,
        initialHeight: 64,
      },
    });
  });

  it('able to mutate responsiveConfig', () => {
    const registry = new HeaderRegistry('header');

    registry.registerConfig('xs', {
      position: 'relative',
      initialHeight: 56,
    });

    registry.rpsConfig.md = {
      position: 'fixed',
    }
    expect(registry.rpsConfig).toEqual({
      xs: {
        id: 'header',
        position: 'relative',
        initialHeight: 56,
      },
      md: {
        position: 'fixed',
      }
    })
  })
});

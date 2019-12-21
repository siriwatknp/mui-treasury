import ConfigGenerator from '../../utils/ConfigGenerator';
import createInsetEffect from '../../models/insetEffect';

describe('Inset Effect', () => {
  let provider;
  let effect;
  const BEHAVIOR = {
    fit: { insetBehavior: 'fit' },
  };
  beforeEach(() => {
    const Provider = () => {
      const config = ConfigGenerator();
      config.primarySidebar.setInset(true);

      return {
        ...config,
        set: rest => {
          effect = createInsetEffect({
            ...config.get(),
            ...rest,
          });
        },
      };
    };
    provider = Provider();
    provider.set();
  });

  test('no effect on zIndex', () => {
    expect(effect.getHeaderZIndexStyle()).toBeUndefined();
  });

  test('width auto', () => {
    expect(effect.getWidthStyle()).toStrictEqual({ width: 'auto' });
  });

  test('contain margin with fit behavior', () => {
    provider.primarySidebar.setAnchor('left');
    provider.primarySidebar.setWidth(256);
    provider.set();

    expect(effect.getMarginStyle()).toBeUndefined();
    expect(effect.getMarginStyle(BEHAVIOR.fit)).toStrictEqual({
      marginLeft: 256,
    });

    provider.primarySidebar.setAnchor('right');
    provider.primarySidebar.setWidth(300);
    provider.set();
    expect(effect.getMarginStyle(BEHAVIOR.fit)).toStrictEqual({
      marginRight: 300,
    });
  });
});

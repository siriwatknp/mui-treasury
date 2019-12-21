import ConfigGenerator from '../../utils/ConfigGenerator';
import createAllSidebars from '../../models/allSidebars';

describe('All Sidebars', () => {
  let provider;
  let allSidebars;
  const theme = {
    zIndex: {
      drawer: 1200,
    },
  };
  beforeEach(() => {
    const Provider = () => {
      const config = ConfigGenerator();

      return {
        ...config,
        set: rest => {
          allSidebars = createAllSidebars({
            ...config.get(),
            ...rest,
          });
        },
      };
    };
    provider = Provider();
    provider.set();
  });
  test('no effect if header is not clipped', () => {
    provider.header.setClipped(false);
    provider.header.setSecondaryClipped(false);
    provider.set();
    expect(allSidebars.getPrimaryStyle(theme)).toBeUndefined();
    expect(allSidebars.getSecondaryStyle(theme)).toBeUndefined();
    expect(allSidebars.getHeaderStyle(theme)).toBeUndefined();
  });

  test('header clipped all sidebars', () => {
    provider.header.setClipped(true);
    provider.header.setSecondaryClipped(true);
    provider.set();
    expect(allSidebars.getPrimaryStyle(theme)).toBeUndefined();
    expect(allSidebars.getSecondaryStyle(theme)).toBeUndefined();
    expect(allSidebars.getHeaderStyle(theme)).toStrictEqual({ zIndex: 1210 });
  });

  test('header clipped only primary sidebar', () => {
    provider.header.setClipped(true);
    provider.header.setSecondaryClipped(false);
    provider.set();
    expect(allSidebars.getPrimaryStyle(theme)).toBeUndefined();
    expect(allSidebars.getSecondaryStyle(theme)).toStrictEqual({
      zIndex: 1220,
    });
    expect(allSidebars.getHeaderStyle(theme)).toStrictEqual({ zIndex: 1210 });
  });

  test('header clipped only secondary sidebar', () => {
    provider.header.setClipped(false);
    provider.header.setSecondaryClipped(true);
    provider.set();
    expect(allSidebars.getPrimaryStyle(theme)).toStrictEqual({
      zIndex: 1220,
    });
    expect(allSidebars.getSecondaryStyle(theme)).toBeUndefined();
    expect(allSidebars.getHeaderStyle(theme)).toStrictEqual({ zIndex: 1210 });
  });
});

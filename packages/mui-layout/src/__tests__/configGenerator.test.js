import createSet from '../utils/createSet';
import ScreenConfigGenerator from '../utils/ScreenConfigGenerator';
import ConfigGenerator from '../utils/ConfigGenerator';
import SidebarGenerator from '../utils/ConfigGenerator/SidebarGenerator';
import HeaderGenerator from '../utils/ConfigGenerator/HeaderGenerator';
import ContentGenerator from '../utils/ConfigGenerator/ContentGenerator';

describe('Config Generator', function() {
  test('able to set screen config', () => {
    const config = ScreenConfigGenerator();
    config.add('xs');
    expect(config.get()).toMatchObject({
      xs: { sidebar: { variant: 'temporary' } },
    });

    config.adjust('xs', screen => {
      screen.primarySidebar.setVariant('permanent');
    });
    expect(config.get()).toMatchObject({
      xs: { sidebar: { variant: 'permanent' } },
    });
  });

  test('able to set config', () => {
    const config = ConfigGenerator();
    expect(config.get()).toMatchObject({
      sidebar: expect.any(Object),
      secondarySidebar: expect.any(Object),
      header: expect.any(Object),
      content: expect.any(Object),
      footer: expect.any(Object),
    });
    expect(config.get()).toMatchObject({
      sidebar: { variant: 'temporary' },
      secondarySidebar: { variant: 'persistent' },
      header: { position: 'fixed' },
      content: { persistentBehavior: 'fit' },
      footer: { insetBehavior: 'fit' },
    });
  });

  test('createSet is chainable', () => {
    const config = {};
    const chain = {
      setA: createSet(config, 'a'),
      setB: createSet(config, 'b'),
    };
    expect(() => {
      try {
        chain.setA('a').setB('b');
      } catch (e) {
        throw new Error();
      }
    }).not.toThrow();
    expect(config).toMatchObject({ a: 'a', b: 'b' });
  });

  describe('sidebar', () => {
    test('Able to set and retrieve value from sidebar', () => {
      const sidebar = SidebarGenerator();
      expect(sidebar.get()).toMatchObject({
        anchor: 'left',
      });
      sidebar.setAnchor('right');
      expect(sidebar.get()).toMatchObject({
        anchor: 'right',
      });

      sidebar.set({ anchor: 'left' });
      expect(sidebar.get()).toMatchObject({
        anchor: 'left',
      });
    });
  });

  describe('Header', () => {
    test('Able to set & retrieve value from header', () => {
      const header = HeaderGenerator();
      expect(header.get()).toMatchObject({
        persistentBehavior: 'fit',
      });
      header.setPersistentBehavior('none');
      expect(header.get()).toMatchObject({
        persistentBehavior: 'none',
      });
    });
  });

  describe('Content', () => {
    test('Able to set & retrieve value from content', () => {
      const content = ContentGenerator();
      expect(content.get()).toMatchObject({
        persistentBehavior: 'fit',
      });
      content.setPersistentBehavior('none');
      expect(content.get()).toMatchObject({
        persistentBehavior: 'none',
      });
    });
  });
});

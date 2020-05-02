import EdgeSidebarBuilder, { isUniqueSidebars } from './EdgeSidebarBuilder';

describe('EdgeSidebarBuilder', () => {
  it('can check unique sidebars', () => {
    expect(
      isUniqueSidebars([
        { id: 'sidebar-1' },
        { id: 'sidebar-1' },
        { id: 'sidebar-2' },
      ])
    ).toBeFalsy();
  });

  it('should accept initial mapById', () => {
    const xs = {
      id: 'primarySidebar',
      variant: 'temporary' as const,
      width: 'auto',
      anchor: 'left' as const,
    };
    const builder = EdgeSidebarBuilder({
      primarySidebar: {
        xs: xs,
      },
    });
    builder
      .create('primarySidebar', { anchor: 'left' })
      .registerPermanentConfig('md', {
        width: 256,
        collapsible: false,
      });

    expect(builder.getData()).toStrictEqual({
      configMap: {
        xs: [xs],
        md: [
          {
            id: 'primarySidebar',
            variant: 'permanent',
            anchor: 'left',
            width: 256,
            collapsible: false,
          },
        ],
      },
      configMapById: {
        primarySidebar: {
          xs: xs,
          md: {
            id: 'primarySidebar',
            variant: 'permanent',
            anchor: 'left',
            width: 256,
            collapsible: false,
          },
        },
      },
      sidebarIds: ['primarySidebar'],
      hiddenById: { primarySidebar: [] },
    });
  });
});

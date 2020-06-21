import EdgeSidebarBuilder from './EdgeSidebarBuilder';

describe('EdgeSidebarBuilder', () => {
  it('should be able to create one sidebar', () => {
    const builder = EdgeSidebarBuilder();
    builder
      .create('sidebar', { anchor: 'left' })
      .registerTemporaryConfig('xs', {
        width: 'auto',
      })
      .registerPermanentConfig('md', {
        width: 256,
        collapsible: true,
        collapsedWidth: 64,
        autoExpanded: true,
      });

    const data = builder.getData();
    expect(data.configMapById).toStrictEqual({
      sidebar: {
        md: {
          id: 'sidebar',
          anchor: 'left',
          autoExpanded: true,
          collapsedWidth: 64,
          collapsible: true,
          variant: 'permanent',
          width: 256,
        },
        xs: {
          id: 'sidebar',
          anchor: 'left',
          variant: 'temporary',
          width: 'auto',
        },
      },
    });
    expect(data.configMap).toStrictEqual({
      xs: [
        {
          id: 'sidebar',
          anchor: 'left',
          variant: 'temporary',
          width: 'auto',
        },
      ],
      md: [
        {
          id: 'sidebar',
          anchor: 'left',
          autoExpanded: true,
          collapsedWidth: 64,
          collapsible: true,
          variant: 'permanent',
          width: 256,
        },
      ],
    });
  });

  it.skip('should accept initial mapById', () => {
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

    expect(builder.getData()).toMatchObject({
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

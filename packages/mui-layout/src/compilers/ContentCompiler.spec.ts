import ContentCompiler from './ContentCompiler';
import EdgeSidebarBuilder from '../builders/EdgeSidebar';

describe('ContentCompiler', () => {
  it('should have correct style for 2 EdgeSidebars', () => {
    const sidebar = EdgeSidebarBuilder();
    sidebar
      .create('1stSidebar', { anchor: 'left' })
      .registerPermanentConfig('xs', {
        width: 256,
        collapsible: true,
        collapsedWidth: 80,
      });

    sidebar
      .create('2ndSidebar', { anchor: 'right' })
      .registerPermanentConfig('md', {
        width: 84,
        collapsible: false,
      });

    const compiler = ContentCompiler(
      {
        sidebar: { '1stSidebar': { collapsed: false }, '2ndSidebar': {} },
      },
      sidebar.getData()
    );
    expect(compiler.getResultStyle('content')).toStrictEqual({
      xs: {
        width: 'calc(100% - 256px)',
        marginLeft: 256,
      },
      md: {
        width: 'calc(100% - (256px + 84px))',
        marginLeft: 256,
        marginRight: 84,
      }
    })
  });
});

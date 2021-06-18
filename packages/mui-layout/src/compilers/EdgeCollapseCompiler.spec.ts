import { keys } from '@material-ui/system';
import EdgeSidebarBuilder from '../builders/EdgeSidebar';
import EdgeCollapseCompiler from './EdgeCollapseCompiler';

describe('EdgeCollapseCompiler', () => {
  it('return correct hidden breakpoints', () => {
    const sidebar = EdgeSidebarBuilder();
    sidebar
      .create('sidebar', { anchor: 'left' })
      .registerTemporaryConfig('xs', {
        width: 'auto',
      })
      .registerPersistentConfig('sm', {
        collapsible: true,
        width: 256,
        persistentBehavior: 'fit',
      })
      .registerPermanentConfig('lg', {
        collapsible: false,
        width: 256,
      });

    const compiler = EdgeCollapseCompiler(sidebar.getData());
    expect(compiler.getHiddenBreakpoints('sidebar')).toStrictEqual([
      'xs',
      'lg',
      'xl',
    ]);
  });

  it('return correct hidden when "hidden" is present in config', () => {
    const sidebar = EdgeSidebarBuilder();
    sidebar
      .create('sidebar', { anchor: 'left' })
      .registerPersistentConfig('sm', {
        collapsible: true,
        width: 256,
        persistentBehavior: 'fit',
      })
      .registerPermanentConfig('lg', {
        collapsible: false,
        width: 256,
      })
      .registerTemporaryConfig('xl', {
        width: 'auto',
      });

    sidebar.hide('sidebar', ['md']);

    const compiler = EdgeCollapseCompiler(sidebar.getData());
    expect(compiler.getHiddenBreakpoints('sidebar')).toStrictEqual([
      'xs',
      'md',
      'lg',
      'xl',
    ]);
  });

  it('return all keys if hidden is true in hiddenById', () => {
    const sidebar = EdgeSidebarBuilder();
    sidebar
      .create('sidebar', { anchor: 'left' })
      .registerPersistentConfig('sm', {
        collapsible: true,
        width: 256,
        persistentBehavior: 'fit',
      })
      .registerTemporaryConfig('md', {
        width: 'auto',
      })
      .registerPermanentConfig('xl', {
        collapsible: false,
        width: 256,
      });
    sidebar.hide('sidebar', true);
    const compiler = EdgeCollapseCompiler(sidebar.getData());
    expect(compiler.getHiddenBreakpoints('sidebar')).toStrictEqual(keys);
  });
});

import { keys } from '@material-ui/core/styles/createBreakpoints';
import EdgeSidebarBuilder from '../builders/EdgeSidebar';
import EdgeTriggerCompiler from './EdgeTriggerCompiler';

describe('EdgeTriggerCompiler', () => {
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
      .registerTemporaryConfig('md', {
        width: 'auto',
      })
      .registerPermanentConfig('lg', {
        collapsible: false,
        width: 256,
      });

    const compiler = EdgeTriggerCompiler(sidebar.getData());
    expect(compiler.getHiddenBreakpoints('sidebar')).toStrictEqual([
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
      .registerTemporaryConfig('md', {
        width: 'auto',
      })
      .registerPermanentConfig('xl', {
        collapsible: false,
        width: 256,
      });

    sidebar.hide('sidebar', ['sm', 'lg']);
    const compiler = EdgeTriggerCompiler(sidebar.getData());
    expect(compiler.getHiddenBreakpoints('sidebar')).toStrictEqual([
      'xs',
      'sm',
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
    const compiler = EdgeTriggerCompiler(sidebar.getData());
    expect(compiler.getHiddenBreakpoints('sidebar')).toStrictEqual(keys);
  })
});

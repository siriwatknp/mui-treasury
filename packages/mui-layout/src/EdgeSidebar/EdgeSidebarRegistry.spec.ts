import { createSingleObjData } from '../shared/State';
import EdgeSidebarRegistry from './EdgeSidebarRegistry';
import { EdgeSidebarConfig } from '../types';

describe('EdgeSidebarRegistry', () => {
  it('should mutate state correctly', () => {
    const state = createSingleObjData<EdgeSidebarConfig>({ id: 'sidebar' });
    const registry = EdgeSidebarRegistry(state, {
      anchor: 'left',
    });
    registry
      .registerTemporaryConfig('xs', {
        width: 'auto',
      })
      .registerPermanentConfig('sm', {
        width: 256,
        collapsible: true,
        collapsedWidth: 64,
      })
      .registerPersistentConfig('lg', {
        width: 300,
        collapsible: false,
        persistentBehavior: 'fit',
      });
    expect(state).toMatchObject({
      hidden: [],
      id: 'sidebar',
      rpsConfig: {
        lg: {
          id: 'sidebar',
          anchor: 'left',
          collapsible: false,
          persistentBehavior: 'fit',
          variant: 'persistent',
          width: 300,
        },
        sm: {
          id: 'sidebar',
          anchor: 'left',
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
  });
});

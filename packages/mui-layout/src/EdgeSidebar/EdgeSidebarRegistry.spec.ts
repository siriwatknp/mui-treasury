import { createSingleObjData } from '../shared/State';
import EdgeSidebarRegistry from './EdgeSidebarRegistry';
import { EdgeSidebarConfig } from '../types';

describe('EdgeSidebarRegistry', () => {
  it('should mutate state correctly', () => {
    const state = createSingleObjData<EdgeSidebarConfig>({ id: 'sidebar' });
    const registry = EdgeSidebarRegistry(state);
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
    expect(state).toEqual({
      hidden: [],
      id: 'sidebar',
      rpsConfig: {
        lg: {
          collapsible: false,
          id: 'sidebar',
          persistentBehavior: 'fit',
          variant: 'persistent',
          width: 300,
        },
        sm: {
          collapsedWidth: 64,
          collapsible: true,
          id: 'sidebar',
          variant: 'permanent',
          width: 256,
        },
        xs: {
          id: 'sidebar',
          variant: 'temporary',
          width: 'auto',
        },
      },
    });
  });
});

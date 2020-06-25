import HeaderRegistry from './HeaderRegistry';
import { createSingleObjData } from '../shared/State';
import { HeaderConfig } from '../types';

describe('HeaderRegistry', () => {
  it('can chain registerConfig', () => {
    const state = createSingleObjData<HeaderConfig>({ id: 'header' });
    const registry = HeaderRegistry(state);
    registry
      .registerConfig('xs', {
        position: 'sticky',
        clipped: false,
      })
      .registerConfig('md', {
        position: 'fixed',
        top: 0,
      });

    expect(state).toMatchObject({
      id: 'header',
      hidden: [],
      rpsConfig: {
        md: {
          id: 'header',
          initialHeight: 64,
          position: 'fixed',
          top: 0,
        },
        xs: {
          clipped: false,
          id: 'header',
          initialHeight: 56,
          position: 'sticky',
        },
      },
    });
  });
});

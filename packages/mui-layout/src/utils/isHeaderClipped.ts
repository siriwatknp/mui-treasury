import { HeaderConfig } from '../types';
import get from './get';

export default (
  config: Pick<HeaderConfig, 'clipped'>,
  objectId: string
) => {
  return (
    (typeof config.clipped === 'boolean' && config.clipped) ||
    (typeof config.clipped === 'object' &&
      get(config, ['clipped', objectId], get(config, 'clipped._other')))
  );
};

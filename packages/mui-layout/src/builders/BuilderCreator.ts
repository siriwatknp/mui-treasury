import {
  BaseRegistryConstructor,
  IBaseRegistry,
  MapBreakpoint,
} from '../types';
import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';

export const createSingleObjectBuilder = <
  IConfig,
  IRegistry extends IBaseRegistry<IConfig>
>(
  DEFAULT_ID: string,
  Registry: BaseRegistryConstructor<IRegistry>
) => {
  const Builder = (initialRpsConfig = {}) => {
    let registry = new Registry(DEFAULT_ID);
    registry.rpsConfig = initialRpsConfig;

    return {
      create(id: string) {
        registry = new Registry(id);
        return registry;
      },
      update(updater: (config: MapBreakpoint<IConfig>) => void) {
        updater(registry.rpsConfig);
      },
      hide(breakpoints: Breakpoint[] | boolean) {
        if (typeof breakpoints === 'boolean') {
          if (breakpoints) {
            registry.hidden = keys;
          }
        } else {
          registry.hidden = breakpoints;
        }
      },
      getId: () => registry.id,
      getData: () => registry.rpsConfig,
      debug: () => {
        if (process.env.NODE_ENV !== 'production') {
          console.group('Header:', `"${registry.id}"`);
          console.table(registry.rpsConfig);
          console.groupEnd();
        }
      },
    };
  };

  return Builder;
};

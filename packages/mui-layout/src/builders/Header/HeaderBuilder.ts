import { pickNearestBreakpoint } from '../../utils';
import {
  HeaderConfig,
  HeaderConfigMap,
  IHeaderBuilder,
  IRegistry,
} from '../../types';
import { INITIAL_HEADER_HEIGHT, DEFAULT_HEADER_ID } from '../../utils';

export default (initialMap: HeaderConfigMap = {}): IHeaderBuilder => {
  let id: string = DEFAULT_HEADER_ID;
  let map: HeaderConfigMap = Object.assign({}, initialMap);

  const Registry = (headerId: string): IRegistry<HeaderConfig> => ({
    registerConfig(breakpoint, config) {
      map[breakpoint] = {
        initialHeight: pickNearestBreakpoint(INITIAL_HEADER_HEIGHT, breakpoint),
        ...config,
        id: headerId,
      };
      return this;
    },
  });

  const defaultRegistry = Registry(id);

  return {
    create: function(headerId: string) {
      id = headerId;
      map = Object.assign({}, initialMap); // reset map
      return Registry(headerId); // return new registry
    },
    registerConfig: defaultRegistry.registerConfig,
    update: function(updater) {
      updater(map);
    },
    getId: () => id,
    getData: () => map,
    debug: () => {
      if (process.env.NODE_ENV !== 'production') {
        console.group('Header:', `"${id}"`);
        console.table(map);
        console.groupEnd();
      }
    },
  };
};

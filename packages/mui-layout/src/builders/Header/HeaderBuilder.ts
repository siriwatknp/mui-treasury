import { pickNearestBreakpoint } from '../../utils';
import {
  HeaderConfig,
  HeaderConfigMap,
  IHeaderBuilder,
  IRegistry,
} from '../../types';

const INITIAL_HEIGHT = {
  xs: 56,
  sm: 64,
};

export default (initialMap: HeaderConfigMap = {}): IHeaderBuilder => {
  let id: string;
  let map: HeaderConfigMap = Object.assign({}, initialMap);

  const Registry = (headerId: string): IRegistry<HeaderConfig> => ({
    registerConfig(breakpoint, config) {
      map[breakpoint] = {
        initialHeight: pickNearestBreakpoint(INITIAL_HEIGHT, breakpoint),
        ...config,
        id: headerId,
      };
      return this;
    },
  });

  const defaultRegistry = Registry('header')

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

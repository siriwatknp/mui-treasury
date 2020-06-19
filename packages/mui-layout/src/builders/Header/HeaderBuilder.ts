import {
  HeaderConfigMap,
  IHeaderBuilder,
} from '../../types';
import { DEFAULT_HEADER_ID } from '../../utils';
import { HeaderRegistry } from '../../Header';

export default (initialMap: HeaderConfigMap = {}): IHeaderBuilder => {
  let registry = new HeaderRegistry(DEFAULT_HEADER_ID);
  registry.rpsConfig = initialMap

  return {
    create: function(headerId: string) {
      registry = new HeaderRegistry(headerId)
      return registry; // return new registry
    },
    registerConfig(...args) {
      registry.registerConfig(...args)
      return registry
    },
    update: function(updater) {
      updater(registry.rpsConfig);
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

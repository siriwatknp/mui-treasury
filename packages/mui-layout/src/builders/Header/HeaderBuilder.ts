import {
  HeaderConfig,
  HeaderConfigMap,
  IHeaderBuilder,
  IRegistry,
} from '../../types';

export default (initialMap: HeaderConfigMap = {}): IHeaderBuilder => {
  let id: string;
  const map: HeaderConfigMap = initialMap;

  return {
    create: function(headerId: string) {
      id = headerId;
      const Registry = (): IRegistry<HeaderConfig> => ({
        registerConfig(breakpoint, config) {
          map[breakpoint] = { ...config, id: headerId };
          return this;
        },
      });
      return Registry();
    },
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

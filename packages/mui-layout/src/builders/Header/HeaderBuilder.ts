import { HeaderConfig, HeaderConfigMap, IHeaderBuilder } from '../../types';
import { DEFAULT_HEADER_ID } from '../../utils';
import { HeaderRegistry } from '../../Header';
import { createSingleObjState, SingleObjData } from '../../shared/State';

export type HeaderData = SingleObjData<HeaderConfig>;

export default (initialMap: HeaderConfigMap = {}): IHeaderBuilder => {
  let state: HeaderData = createSingleObjState({
    id: DEFAULT_HEADER_ID,
    rpsConfig: initialMap,
  });
  let registry = HeaderRegistry(state);

  return {
    ...registry,
    create: function(headerId: string) {
      state = createSingleObjState({ id: headerId });
      registry = HeaderRegistry(state);
      return registry; // return new registry
    },
    update: function(updater) {
      updater(state.rpsConfig);
    },
    getId: () => state.id,
    getData: () => state.rpsConfig,
    debug: () => {
      if (process.env.NODE_ENV !== 'production') {
        console.group('Header:', `"${state.id}"`);
        console.table(state.rpsConfig);
        console.groupEnd();
      }
    },
  };
};

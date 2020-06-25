import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Dictionary, MapBreakpoint } from '../types';

export type RpsConfig<T> = MapBreakpoint<T>;
export type RpsConfigArray<T> = MapBreakpoint<T[]>

export type SingleObjData<T, P = {}> = {
  id: string;
  props?: P;
  rpsConfig?: RpsConfig<T>;
  hidden?: Breakpoint[];
};

export type MultiObjData<T, P = {}> = {
  ids: string[];
  dataById: Dictionary<SingleObjData<T, P>>;
};

export const createSingleObjData = <T, P = {}>({
  id,
  props = {} as P,
  rpsConfig = {},
  hidden = [],
}: SingleObjData<T, P>) => ({
  id,
  props,
  rpsConfig,
  hidden,
});

export const createMultiObjData = <T, P = {}>(
  rpsConfigById?: Dictionary<RpsConfig<T>>
): MultiObjData<T, P> => {
  if (!rpsConfigById) return {
    ids: [],
    dataById: {},
  }
  const ids = Object.keys(rpsConfigById)
  return {
    ids,
    dataById: ids.reduce((result, id) => ({
      ...result,
      [id]: createSingleObjData({
        id,
        rpsConfig: rpsConfigById[id],
      })
    }), {})
  }
};

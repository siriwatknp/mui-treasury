import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Dictionary, MapBreakpoint } from '../types';

export type RpsConfig<T> = MapBreakpoint<T>;

export type SingleObjData<T> = {
  id: string;
  rpsConfig?: RpsConfig<T>;
  hidden?: Breakpoint[];
};

export type MultiObjData<T> = {
  ids: string[];
  dataById: Dictionary<SingleObjData<T>>;
};

export const createSingleObjData = <T>({
  id,
  rpsConfig = {},
  hidden = [],
}: SingleObjData<T>) => ({
  id,
  rpsConfig,
  hidden,
});

export const createMultiObjData = <T>(
  { dataById = {}, ids = [] }: MultiObjData<T> = {
    dataById: {},
    ids: [],
  }
) => ({
  ids,
  dataById,
});

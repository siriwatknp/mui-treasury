import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Dictionary, MapBreakpoint } from '../types';

export type RspConfig<T> = MapBreakpoint<T>;

export type SingleObjData<T> = {
  id: string;
  rpsConfig?: RspConfig<T>;
  hidden?: Breakpoint[];
};

export type MultiObjData<T> = {
  ids: string[];
  rspConfigById: Dictionary<RspConfig<T>>;
  hiddenById: Dictionary<Breakpoint[]>;
};

export const createSingleObjState = <T>({
  rpsConfig = {},
  hidden = [],
  ...data
}: SingleObjData<T>) => ({
  ...data,
  rpsConfig,
  hidden,
});

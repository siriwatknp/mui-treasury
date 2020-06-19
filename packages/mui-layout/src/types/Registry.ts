import { MapBreakpoint } from '../types';

export interface IRegistry<IConfig> {
  readonly id: string;
  rpsConfig: MapBreakpoint<IConfig>
}

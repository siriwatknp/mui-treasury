import { IBaseRegistry, MapBreakpoint } from '../types';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export class BaseRegistry<T> implements IBaseRegistry<T> {
  readonly id: string;
  rpsConfig: MapBreakpoint<T> = {};
  hidden: Breakpoint[] = [];
  constructor(id: string) {
    this.id = id;
    this.rpsConfig = {};
  }
}

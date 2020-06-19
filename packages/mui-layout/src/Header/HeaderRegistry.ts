import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { HeaderConfig, MapBreakpoint, IRegistry } from '../types';
import { INITIAL_HEADER_HEIGHT, pickNearestBreakpoint } from '../utils';

export interface IHeaderRegistry extends IRegistry<HeaderConfig> {}

class HeaderRegistry implements IHeaderRegistry {
  readonly id: string;
  rpsConfig: MapBreakpoint<HeaderConfig> = {};
  constructor(id: string) {
    this.id = id;
    this.rpsConfig = {};
  }

  registerConfig(breakpoint: Breakpoint, config: HeaderConfig) {
    this.rpsConfig[breakpoint] = {
      initialHeight: pickNearestBreakpoint(INITIAL_HEADER_HEIGHT, breakpoint),
      id: this.id,
      ...config,
    };
    return this;
  }
}

export default HeaderRegistry;

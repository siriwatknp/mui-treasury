import { Breakpoint } from '@material-ui/system';
import { HeaderConfig } from '../types';
import { INITIAL_HEADER_HEIGHT, pickNearestBreakpoint } from '../utils';
import { SingleObjData } from '../shared/State';

export interface IHeaderRegistry {
  registerConfig: (
    breakpoint: Breakpoint,
    config: HeaderConfig
  ) => IHeaderRegistry;
}

const HeaderRegistry = (
  state: SingleObjData<HeaderConfig>
): IHeaderRegistry => {
  return {
    registerConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = {
        initialHeight: pickNearestBreakpoint(INITIAL_HEADER_HEIGHT, breakpoint),
        id: state.id,
        ...config,
      };
      return this;
    },
  };
};

export default HeaderRegistry;

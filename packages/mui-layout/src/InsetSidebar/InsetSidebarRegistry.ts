import {
  IInsetSidebarRegistry,
  InsetSidebarConfig,
  SidebarProperties,
} from '../types';
import { SingleObjData } from '../shared/State';

const InsetSidebarRegistry = (
  state: SingleObjData<InsetSidebarConfig>,
  props: SidebarProperties
): IInsetSidebarRegistry => {
  return {
    registerFixedConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = {
        ...config,
        ...props,
        id: state.id,
        variant: 'fixed',
      };
      return this;
    },
    registerAbsoluteConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = {
        ...config,
        ...props,
        id: state.id,
        variant: 'absolute',
      };
      return this;
    },
    registerStickyConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = {
        ...config,
        ...props,
        id: state.id,
        variant: 'sticky',
      };
      return this;
    },
  };
};

export default InsetSidebarRegistry;

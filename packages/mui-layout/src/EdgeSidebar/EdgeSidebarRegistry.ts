import {
  EdgeSidebarConfig,
  IEdgeSidebarRegistry,
  SidebarProperties,
} from '../types';
import { SingleObjData } from '../shared/State';

const EdgeSidebarRegistry = (
  state: SingleObjData<EdgeSidebarConfig>,
  props: SidebarProperties
): IEdgeSidebarRegistry => {
  return {
    registerPermanentConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = {
        ...config,
        ...props,
        id: state.id,
        variant: 'permanent',
      };
      return this;
    },
    registerPersistentConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = {
        ...config,
        ...props,
        id: state.id,
        variant: 'persistent',
      };
      return this;
    },
    registerTemporaryConfig(breakpoint, config) {
      state.rpsConfig[breakpoint] = {
        ...config,
        ...props,
        id: state.id,
        variant: 'temporary',
      };
      return this;
    },
  };
};

export default EdgeSidebarRegistry;

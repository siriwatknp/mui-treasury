import { attachHiddenToMapById, normalizeMapById } from '../../utils';
import {
  AbsoluteInsetSidebarConfig,
  Dictionary,
  FixedInsetSidebarConfig,
  InsetSidebarConfig,
  InsetSidebarData,
  MapBreakpoint,
  SidebarProperties,
  StickyInsetSidebarConfig,
} from '../../types';
import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';

export interface IInsetSidebarRegistry {
  registerStickyConfig: (
    breakpoint: Breakpoint,
    config: Omit<StickyInsetSidebarConfig, 'id' | 'anchor' | 'variant'>
  ) => IInsetSidebarRegistry;
  registerAbsoluteConfig: (
    breakpoint: Breakpoint,
    config: Omit<AbsoluteInsetSidebarConfig, 'id' | 'anchor' | 'variant'>
  ) => IInsetSidebarRegistry;
  registerFixedConfig: (
    breakpoint: Breakpoint,
    config: Omit<FixedInsetSidebarConfig, 'id' | 'anchor' | 'variant'>
  ) => IInsetSidebarRegistry;
}

export interface IInsetSidebarBuilder {
  create: (id: string, properties: SidebarProperties) => IInsetSidebarRegistry;
  update: (
    id: string,
    updater: (
      config: MapBreakpoint<Omit<InsetSidebarConfig, 'id' | 'anchor'>>
    ) => void
  ) => void;
  hide: (id: string, breakpoints: Breakpoint[] | boolean) => void;
  getData: () => InsetSidebarData;
  debug: () => void;
}

export type InsetSidebarConfigMapById = Dictionary<
  MapBreakpoint<InsetSidebarConfig>
>;

export default (initialMapById: InsetSidebarConfigMapById = {}): IInsetSidebarBuilder => {
  const hiddenById: Dictionary<Breakpoint[]> = {};
  const mapById: InsetSidebarConfigMapById = initialMapById;
  const addConfig = (bp: Breakpoint, config: InsetSidebarConfig): void => {
    if (!mapById[config.id]) {
      mapById[config.id] = {};
    }
    mapById[config.id][bp] = config;
  };
  return {
    create(id, props) {
      // InsetSidebar can be multiples, id is needed
      const Registry = (): IInsetSidebarRegistry => ({
        registerStickyConfig(breakpoint, config) {
          addConfig(breakpoint, { ...config, ...props, id, variant: 'sticky' });
          return this;
        },
        registerAbsoluteConfig(breakpoint, config) {
          addConfig(breakpoint, {
            ...config,
            ...props,
            id,
            variant: 'absolute',
          });
          return this;
        },
        registerFixedConfig(breakpoint, config) {
          addConfig(breakpoint, { ...config, ...props, id, variant: 'fixed' });
          return this;
        },
      });
      return Registry();
    },
    update(id, updater) {
      if (mapById[id]) {
        updater(mapById[id]);
      } else {
        console.warn(`No sidebar to update. id: ${id}`);
      }
    },
    hide(id, breakpoints) {
      if (typeof breakpoints === 'boolean') {
        hiddenById[id] = breakpoints ? keys : [];
      } else {
        if (!hiddenById[id]) hiddenById[id] = [];
        hiddenById[id] = breakpoints;
      }
    },
    getData: () => {
      const attachedMapById = attachHiddenToMapById(mapById, hiddenById);
      return {
        configMap: normalizeMapById(attachedMapById),
        configMapById: attachedMapById,
      };
    },
    debug() {
      if (process.env.NODE_ENV !== 'production') {
        Object.keys(mapById).forEach(id => {
          console.group("InsetSidebar:", `"${id}"`)
          console.table(mapById[id])
          console.groupEnd()
        })
      }
    },
  };
};

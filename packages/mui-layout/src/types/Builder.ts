import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import {
  HeaderConfig,
  PermanentSidebarConfig,
  PersistentSidebarConfig,
  EdgeSidebarConfig,
  TemporarySidebarConfig,
  InsetSidebarConfig,
  SidebarProperties,
} from './Config';
import { Dictionary, MapBreakpoint } from './Utils';

export type HeaderConfigMap = MapBreakpoint<HeaderConfig>;
export type EdgeSidebarConfigMapById = Dictionary<MapBreakpoint<EdgeSidebarConfig>>;
export type EdgeSidebarData = {
  sidebarIds: string[];
  configMap: MapBreakpoint<EdgeSidebarConfig[]>;
  configMapById: Dictionary<MapBreakpoint<EdgeSidebarConfig>>;
};

export type InsetSidebarData = {
  configMapById: Dictionary<MapBreakpoint<InsetSidebarConfig>>;
  configMap: MapBreakpoint<InsetSidebarConfig[]>;
};

export interface IRegistry<ConfigType> {
  registerConfig: (
    breakpoint: Breakpoint,
    config: Omit<ConfigType, 'id'>
  ) => IRegistry<ConfigType>;
}

export interface IFooterBuilder {
  create: (id: string) => void;
  getData: () => { id: string };
}

export interface IContentBuilder {
  create: (id: string) => void;
  getData: () => { id: string };
}

export interface IHeaderBuilder {
  create: (id: string) => IRegistry<HeaderConfig>;
  getId: () => string;
  getData: () => HeaderConfigMap;
}

export interface IEdgeSidebarRegistry {
  registerPersistentConfig: (
    breakpoint: Breakpoint,
    config: Omit<PersistentSidebarConfig, 'id' | 'anchor' | 'variant'>
  ) => IEdgeSidebarRegistry;
  registerPermanentConfig: (
    breakpoint: Breakpoint,
    config: Omit<PermanentSidebarConfig, 'id' | 'anchor' | 'variant'>
  ) => IEdgeSidebarRegistry;
  registerTemporaryConfig: (
    breakpoint: Breakpoint,
    config: Omit<TemporarySidebarConfig, 'id' | 'anchor' | 'variant'>
  ) => IEdgeSidebarRegistry;
}

export interface IEdgeSidebarBuilder {
  create: (id: string, properties: SidebarProperties) => IEdgeSidebarRegistry;
  update: (
    id: string,
    updater: (config: MapBreakpoint<Omit<EdgeSidebarConfig, 'id' | 'anchor'>>) => void
  ) => void;
  getSidebarIds: () => string[];
  getData: () => EdgeSidebarData;
}

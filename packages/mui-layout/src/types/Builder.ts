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

export type SubheaderConfigMapById = Dictionary<MapBreakpoint<HeaderConfig>>;

export type SubheaderData = {
  configMapById: SubheaderConfigMapById;
  configMap: MapBreakpoint<HeaderConfig[]>;
  hiddenById: Dictionary<Breakpoint[]>;
};

export type EdgeSidebarConfigMapById = Dictionary<
  MapBreakpoint<EdgeSidebarConfig>
>;
export type EdgeSidebarData = {
  sidebarIds: string[];
  configMap: MapBreakpoint<EdgeSidebarConfig[]>;
  configMapById: Dictionary<MapBreakpoint<EdgeSidebarConfig>>;
  hiddenById: Dictionary<Breakpoint[]>;
};

export type InsetSidebarData = {
  configMapById: Dictionary<MapBreakpoint<InsetSidebarConfig>>;
  configMap: MapBreakpoint<InsetSidebarConfig[]>;
};

export interface IRegistryOld<ConfigType> {
  registerConfig: (
    breakpoint: Breakpoint,
    config: Omit<ConfigType, 'id' | 'hidden'>
  ) => IRegistryOld<ConfigType>;
}

export interface IFooterBuilder {
  create: (id: string) => void;
  getData: () => { id: string };
  debug: () => void;
}

export interface IContentBuilder {
  create: (id: string) => void;
  getData: () => { id: string };
  debug: () => void;
}

export interface IHeaderBuilder {
  create: (id: string) => IRegistryOld<HeaderConfig>;
  registerConfig: IRegistryOld<HeaderConfig>['registerConfig'];
  update: (
    updater: (config: MapBreakpoint<Omit<HeaderConfig, 'id'>>) => void
  ) => void;
  getId: () => string;
  getData: () => HeaderConfigMap;
  debug: () => void;
}

export interface IEdgeSidebarRegistry {
  registerPersistentConfig: (
    breakpoint: Breakpoint,
    config: Omit<
      PersistentSidebarConfig,
      'id' | 'anchor' | 'variant' | 'hidden'
    >
  ) => IEdgeSidebarRegistry;
  registerPermanentConfig: (
    breakpoint: Breakpoint,
    config: Omit<PermanentSidebarConfig, 'id' | 'anchor' | 'variant' | 'hidden'>
  ) => IEdgeSidebarRegistry;
  registerTemporaryConfig: (
    breakpoint: Breakpoint,
    config: Omit<TemporarySidebarConfig, 'id' | 'anchor' | 'variant' | 'hidden'>
  ) => IEdgeSidebarRegistry;
}

export interface IEdgeSidebarBuilder {
  create: (id: string, properties: SidebarProperties) => IEdgeSidebarRegistry;
  update: (
    id: string,
    updater: (
      config: MapBreakpoint<Omit<EdgeSidebarConfig, 'id' | 'anchor'>>
    ) => void
  ) => void;
  hide: (id: string, breakpoints: Breakpoint[] | boolean) => void;
  getSidebarIds: () => string[];
  getData: () => EdgeSidebarData;
  debug: () => void;
}

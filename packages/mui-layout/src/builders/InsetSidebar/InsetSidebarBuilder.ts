import {
  Dictionary,
  IInsetSidebarRegistry,
  InsetSidebarConfig,
  InsetSidebarData,
  MapBreakpoint,
  SidebarProperties,
} from '../../types';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { InsetSidebarRegistry } from '../../InsetSidebar';
import { createMultiObjBuilder } from '../../shared/BuilderCreator/MultiObjects';

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

const InsetSidebarBuilder = createMultiObjBuilder<
  typeof InsetSidebarRegistry,
  InsetSidebarConfig,
  SidebarProperties
>({
  Registry: InsetSidebarRegistry,
  component: 'InsetSidebar',
});

export default InsetSidebarBuilder;

import { EdgeSidebarConfig, SidebarProperties } from '../../types';
import { EdgeSidebarRegistry } from '../../EdgeSidebar';
import { createMultiObjBuilder } from '../../shared/BuilderCreator/MultiObjects';

const EdgeSidebarBuilder = createMultiObjBuilder<
  typeof EdgeSidebarRegistry,
  EdgeSidebarConfig,
  SidebarProperties
>({
  Registry: EdgeSidebarRegistry,
  component: 'EdgeSidebar',
});

export default EdgeSidebarBuilder;

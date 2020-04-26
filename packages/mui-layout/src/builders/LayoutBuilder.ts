import HeaderBuilder from './Header';
import EdgeSidebarBuilder from './EdgeSidebar';
import ContentBuilder from './Content';
import FooterBuilder from './Footer';
import InsetSidebarBuilder from './InsetSidebar';
import {
  IHeaderBuilder,
  IEdgeSidebarBuilder,
  State,
  IContentBuilder,
  GlobalConfig,
  LayoutData,
  IFooterBuilder,
  EdgeSidebarConfigMapById,
} from '../types';
import {
  IInsetSidebarBuilder,
  InsetSidebarConfigMapById,
} from './InsetSidebar/InsetSidebarBuilder';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

interface BuilderCallback<T> {
  (builder: T): void;
}

export interface ILayoutBuilder {
  configureHeader: (
    callback: BuilderCallback<Pick<IHeaderBuilder, 'create'>>
  ) => void;
  configureEdgeSidebar: (
    callback: BuilderCallback<Pick<IEdgeSidebarBuilder, 'create' | 'update'>>
  ) => void;
  configureInsetSidebar: (
    callback: BuilderCallback<Pick<IInsetSidebarBuilder, 'create'>>
  ) => void;
  configureContent: (
    callback: BuilderCallback<Pick<IContentBuilder, 'create'>>
  ) => void;
  configureFooter: (
    callback: BuilderCallback<Pick<IFooterBuilder, 'create'>>
  ) => void;
  enableAutoCollapse: (sidebarId: string, breakpoint?: Breakpoint) => void;
  getComponentData: () => LayoutData;
  clone: () => {
    edgeSidebar: EdgeSidebarConfigMapById;
  };
  getInitialState: () => State;
}

export default (): ILayoutBuilder => {
  const global: GlobalConfig = {
    autoCollapse: {},
  };
  const header = HeaderBuilder();
  const edgeSidebar = EdgeSidebarBuilder();
  const insetSidebar = InsetSidebarBuilder();
  const content = ContentBuilder();
  const footer = FooterBuilder();

  return {
    configureHeader(callback) {
      callback(header);
    },
    configureEdgeSidebar(callback) {
      callback(edgeSidebar);
    },
    configureInsetSidebar(callback) {
      callback(insetSidebar);
    },
    configureContent(callback) {
      callback(content);
    },
    configureFooter(callback) {
      callback(footer);
    },
    enableAutoCollapse(sidebarId, breakpoint = 'md') {
      global.autoCollapse[sidebarId] = breakpoint;
    },
    getComponentData: () => ({
      global,
      edgeSidebar: edgeSidebar.getData(),
      insetSidebar: insetSidebar.getData(),
      header: header.getData(),
      headerId: header.getId(),
      content: content.getData(),
      footer: footer.getData(),
    }),
    clone: () =>
      // use this approach as deep clone for now
      JSON.parse(
        JSON.stringify({
          edgeSidebar: edgeSidebar.getData().configMapById,
        })
      ),
    getInitialState: () => {
      const ids = edgeSidebar.getSidebarIds();
      return {
        sidebar: ids.reduce(
          (result, curr) => ({
            ...result,
            [curr]: { open: false, collapsed: false },
          }),
          {}
        ),
      };
    },
  };
};

import HeaderBuilder from './Header';
import EdgeSidebarBuilder from './EdgeSidebar';
import ContentBuilder from './Content';
import FooterBuilder from './Footer';
import InsetSidebarBuilder from './InsetSidebar';
import {
  IHeaderBuilder,
  IEdgeSidebarBuilder,
  State,
  GlobalConfig,
  LayoutData,
  EdgeSidebarConfigMapById,
  HeaderConfigMap,
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
    callback: BuilderCallback<Pick<IHeaderBuilder, 'create' | 'registerConfig'>>
  ) => void;
  configureEdgeSidebar: (
    callback: BuilderCallback<
      Pick<IEdgeSidebarBuilder, 'create' | 'update' | 'hide'>
    >
  ) => void;
  configureInsetSidebar: (
    callback: BuilderCallback<Pick<IInsetSidebarBuilder, 'create'>>
  ) => void;
  enableAutoCollapse: (sidebarId: string, breakpoint?: Breakpoint) => void;
  getComponentData: () => LayoutData;
  clone: () => {
    edgeSidebar: EdgeSidebarConfigMapById;
  };
  getInitialState: () => State;
  debug: () => void;
  getJSON: () => void;
}

type InitialLayout = {
  global?: GlobalConfig;
  header?: HeaderConfigMap;
  edgeSidebar?: EdgeSidebarConfigMapById;
  insetSidebar?: InsetSidebarConfigMapById;
};

export default (initialLayout: InitialLayout = {}): ILayoutBuilder => {
  const global: GlobalConfig = initialLayout.global || { autoCollapse: {} };
  const header = HeaderBuilder(initialLayout.header);
  const edgeSidebar = EdgeSidebarBuilder(initialLayout.edgeSidebar);
  const insetSidebar = InsetSidebarBuilder(initialLayout.insetSidebar);
  const content = ContentBuilder();
  const footer = FooterBuilder();

  // setup default id
  content.create('content');
  footer.create('footer');

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
          header: header.getData(),
          edgeSidebar: edgeSidebar.getData().configMapById,
          insetSidebar: insetSidebar.getData().configMapById,
          content: content.getData(),
          footer: footer.getData(),
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
    debug() {
      if (process.env.NODE_ENV !== 'production') {
        header.debug();
        edgeSidebar.debug();
        insetSidebar.debug();
        content.debug();
        footer.debug();
      }
    },
    getJSON() {
      console.log(
        JSON.stringify(
          {
            header: header.getData(),
            edgeSidebar: edgeSidebar.getData().configMapById,
            insetSidebar: insetSidebar.getData().configMapById,
          },
          null,
          2
        )
      );
    },
  };
};

import { useTheme } from '@material-ui/core/styles';
import EdgeSidebarCompiler from '../compilers/EdgeSidebarCompiler';
import { useLayoutCtx } from '../contexts';
import { getSidebarAnchor, createDisplayNone } from '../utils';

export const useSidebar = (id: string, consumer?: string) => {
  if (!id) {
    throw new Error(`You must specify a sidebar id to <${consumer} />`);
  }
  const { breakpoints } = useTheme();
  const { state, data, setOpen, setCollapsed } = useLayoutCtx();
  const sidebarConfigMap = data.edgeSidebar.configMapById[id];
  const anchor = getSidebarAnchor(sidebarConfigMap);
  const styles = EdgeSidebarCompiler(
    state,
    data.edgeSidebar,
    data.header
  ).getResultStyle(id);
  return {
    anchor,
    sidebarConfigMap,
    state: state.sidebar[id],
    edgeSidebar: data.edgeSidebar,
    hiddenStyles: createDisplayNone(
      data.edgeSidebar.hiddenById[id],
      breakpoints
    ),
    styles,
    setOpen,
    setCollapsed,
  };
};

export default useSidebar;

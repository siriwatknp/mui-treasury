import { Theme, useTheme } from "@material-ui/core"
import { useSidebarCtx } from "../contexts"
import useSidebar from "./useSidebar"
import { createDisplayNone } from '../utils';
import EdgeCollapseCompiler from '../compilers/EdgeCollapseCompiler';

export const useSidebarCollapse = (sidebarId: string, consumer?: string) => {
  const { breakpoints } = useTheme<Theme>()
  const { id = sidebarId } = useSidebarCtx()
  const { edgeSidebar, ...props } = useSidebar(id, consumer)
  const hiddenStyles = createDisplayNone(
    EdgeCollapseCompiler(edgeSidebar).getHiddenBreakpoints(id),
    breakpoints
  );
  return {
    id,
    edgeSidebar,
    ...props,
    hiddenStyles,
  }
}

export default useSidebarCollapse

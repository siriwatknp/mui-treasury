import { Theme, useTheme } from "@material-ui/core"
import { useSidebarCtx } from "../contexts"
import useSidebar from "./useSidebar"
import { createDisplayNone } from '../utils';
import EdgeTriggerCompiler from '../compilers/EdgeTriggerCompiler';

export const useSidebarTrigger = (sidebarId: string, consumer?: string) => {
  const { breakpoints } = useTheme<Theme>()
  const { id = sidebarId } = useSidebarCtx()
  const { edgeSidebar, ...props } = useSidebar(id, consumer)
  const hiddenStyles = createDisplayNone(
    EdgeTriggerCompiler(edgeSidebar).getHiddenBreakpoints(id),
    breakpoints
  );
  return {
    id,
    edgeSidebar,
    ...props,
    hiddenStyles,
  }
}

export default useSidebarTrigger

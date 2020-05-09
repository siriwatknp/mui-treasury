import { Theme, useTheme } from "@material-ui/core"
import { useSidebarCtx } from "../contexts"
import useSidebar from "./useSidebar"

export const useSidebarCta = (sidebarId: string, consumer?: string) => {
  const { breakpoints } = useTheme<Theme>()
  const { id = sidebarId } = useSidebarCtx()
  const props = useSidebar(id, consumer)
  return {
    id,
    breakpoints,
    ...props,
  }
}

export default useSidebarCta

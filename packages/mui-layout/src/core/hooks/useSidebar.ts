import { useLayoutCtx } from "../Context"
import { getSidebarAnchor } from "../../utils"
import EdgeSidebarCompiler from "../../compilers/EdgeSidebarCompiler"

export const useSidebar = (id: string, consumer?: string) => {
  if (!id) {
    throw new Error(`You must specify a sidebar id to <${consumer} />`)
  }
  const { state, data, setOpen, setCollapsed } = useLayoutCtx()
  const anchor = getSidebarAnchor(data.edgeSidebar.configMapById[id])
  const styles = EdgeSidebarCompiler(
    state,
    data.edgeSidebar,
    data.header
  ).getResultStyle(id)
  return {
    anchor,
    state: state.sidebar[id],
    edgeSidebar: data.edgeSidebar,
    styles,
    setOpen,
    setCollapsed,
  }
}

export default useSidebar

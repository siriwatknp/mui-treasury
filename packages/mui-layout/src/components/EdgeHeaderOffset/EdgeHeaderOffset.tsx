import React from "react"
import cx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useLayoutCtx } from "../../core/Context"
import EdgeHeaderOffsetCompiler from "../../compilers/EdgeHeaderOffsetCompiler"
import { useEdgeHeaderMagnet } from "../../core/hooks"
import styledProxy from '../Shared/StyledProxy'
import { transitionStyles } from "../../styles"
import { createBreakpointStyles } from "../../utils"

const useTransitionStyles = makeStyles(transitionStyles)

const StyledProxy = styledProxy('div')

export const createEdgeHeaderOffset = (StyledComponent = StyledProxy) => {
  const EdgeHeaderOffset = ({ sidebarId }: { sidebarId: string }) => {
    const { breakpoints } = useTheme()
    const transition = useTransitionStyles()
    const { data } = useLayoutCtx()
    const compiler = EdgeHeaderOffsetCompiler(data.edgeSidebar, data.header)
    const styles = createBreakpointStyles(
      compiler.getResultStyle(sidebarId),
      breakpoints
    )
    const inlineStyle = useEdgeHeaderMagnet(sidebarId)
    return (
      <StyledComponent
        className={cx("EdgeHeaderOffset", transition.smooth)}
        styles={{ ...styles, flexShrink: 0 }}
        style={inlineStyle}
      />
    )
  }
  return EdgeHeaderOffset
}

export default createEdgeHeaderOffset()

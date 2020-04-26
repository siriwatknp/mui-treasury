import React from "react"
import cx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useLayoutCtx } from "../../core/Context"
import StyledProxy from "../StyledProxy"
import EdgeHeaderOffsetCompiler from "../../compilers/EdgeHeaderOffsetCompiler"
import { createBreakpointStyles } from "../../utils"
import { useEdgeHeaderMagnet } from "../../core/hooks"
import { transitionStyles } from "../../styles"

const useTransitionStyles = makeStyles(transitionStyles)

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
    <StyledProxy
      className={cx("EdgeHeaderOffset", transition.smooth)}
      styles={{ ...styles, flexShrink: 0 }}
      style={inlineStyle}
    />
  )
}

export default EdgeHeaderOffset

import React from "react"
import cx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useLayoutCtx } from "../../core/Context"
import StyledProxy from "../StyledProxy"
import InsetHeaderOffsetCompiler from "../../compilers/InsetHeaderOffsetCompiler"
import { createBreakpointStyles } from "../../utils"
import { useInsetHeaderMagnet } from "../../core/hooks/useInsetHeaderMagnet"
import { transitionStyles } from "../../styles"

const useTransitionStyles = makeStyles(transitionStyles)

const InsetHeaderOffset = ({ sidebarId }: { sidebarId: string }) => {
  const { breakpoints } = useTheme()
  const transition = useTransitionStyles()
  const { data } = useLayoutCtx()
  const compiler = InsetHeaderOffsetCompiler(data.insetSidebar, data.header)
  const styles = createBreakpointStyles(
    compiler.getResultStyle(sidebarId),
    breakpoints
  )
  const inlineStyle = useInsetHeaderMagnet(sidebarId)
  return (
    <StyledProxy
      className={cx("InsetHeaderOffset", transition.smooth)}
      styles={{ ...styles, flexShrink: 0 }}
      style={inlineStyle}
    />
  )
}

export default InsetHeaderOffset

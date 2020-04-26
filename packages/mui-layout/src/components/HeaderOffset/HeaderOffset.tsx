import React from "react"
import useTheme from "@material-ui/core/styles/useTheme"
import StyledProxy from "../StyledProxy"
import { useLayoutCtx } from "../../core/Context"
import HeaderOffsetCompiler from "../../compilers/HeaderOffsetCompiler"
import { createBreakpointStyles } from "../../utils"

const HeaderOffset = () => {
  const { breakpoints } = useTheme()
  const { data } = useLayoutCtx()
  const compiler = HeaderOffsetCompiler(data.header)
  const styles = createBreakpointStyles(compiler.getResultStyle(), breakpoints)
  return (
    <StyledProxy
      className={"HeaderOffset"}
      styles={{ ...styles, flexShrink: 0 }}
    />
  )
}

export default HeaderOffset

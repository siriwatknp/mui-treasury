import React from "react"
import useTheme from "@material-ui/core/styles/useTheme"
import { useLayoutCtx } from "../../core/Context"
import HeaderOffsetCompiler from "../../compilers/HeaderOffsetCompiler"
import { createBreakpointStyles } from "../../utils"
import styledProxy from '../Shared/StyledProxy';

const StyledProxy = styledProxy('div')

export const createHeaderOffset = (StyledComponent = StyledProxy) => {
  const HeaderOffset = () => {
    const { breakpoints } = useTheme()
    const { data } = useLayoutCtx()
    const compiler = HeaderOffsetCompiler(data.header)
    const styles = createBreakpointStyles(compiler.getResultStyle(), breakpoints)
    return (
      <StyledComponent
        className={"HeaderOffset"}
        styles={{ ...styles, flexShrink: 0 }}
      />
    )
  }
  return HeaderOffset
}

export default createHeaderOffset()

import React from "react"
import useTheme from "@material-ui/core/styles/useTheme"
import { useLayoutCtx } from "../../core/Context"
import HeaderOffsetCompiler from "../../compilers/HeaderOffsetCompiler"
import { createBreakpointStyles } from "../../utils"
import { generateStyledProxyCreator } from '../Shared/StyledProxy';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');

  const HeaderOffset = () => {
    const { breakpoints } = useTheme()
    const { data } = useLayoutCtx()
    const compiler = HeaderOffsetCompiler(data.header)
    const styles = createBreakpointStyles(compiler.getResultStyle(), breakpoints)
    return (
      <Div
        className={"HeaderOffset"}
        styles={{ ...styles, flexShrink: 0 }}
      />
    )
  }
  return HeaderOffset
}

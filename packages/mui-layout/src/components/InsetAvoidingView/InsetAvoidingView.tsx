import React from "react"
import useTheme from "@material-ui/core/styles/useTheme"
import { useLayoutCtx } from "../../contexts"
import InsetAvoidingViewCompiler from "../../compilers/InsetAvoidingViewCompiler"
import { generateStyledProxyCreator } from '../Shared/StyledProxy';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');

  const InsetAvoidingView = (
    props: React.PropsWithChildren<{ className?: string }>
  ) => {
    const { data } = useLayoutCtx()
    const { breakpoints } = useTheme()
    const styles = InsetAvoidingViewCompiler(
      data.insetSidebar
    ).getMediaQueryStyle(breakpoints)
    return (
      <Div
        {...props}
        styles={{
          transition: "all 225ms",
          ...styles,
        }}
      />
    )
  }
  return InsetAvoidingView
}

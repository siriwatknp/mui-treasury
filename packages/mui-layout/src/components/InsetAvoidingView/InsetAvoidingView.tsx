import React from "react"
import useTheme from "@material-ui/core/styles/useTheme"
import { useLayoutCtx } from "../../core"
import InsetAvoidingViewCompiler from "../../compilers/InsetAvoidingViewCompiler"
import styledProxy from '../Shared/StyledProxy';

const Div = styledProxy('div')

export const createInsetAvoidingView = (StyledComponent = Div) => {
  const InsetAvoidingView = (
    props: React.PropsWithChildren<{ className?: string }>
  ) => {
    const { data } = useLayoutCtx()
    const { breakpoints } = useTheme()
    const styles = InsetAvoidingViewCompiler(
      data.insetSidebar
    ).getMediaQueryStyle(breakpoints)
    return (
      <StyledComponent
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

export default createInsetAvoidingView()

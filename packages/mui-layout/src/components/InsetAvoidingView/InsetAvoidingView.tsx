import React from "react"
import useTheme from "@material-ui/core/styles/useTheme"
import { useLayoutCtx } from "../../core"
import StyledProxy from "../StyledProxy"
import InsetAvoidingViewCompiler from "../../compilers/InsetAvoidingViewCompiler"

const InsetAvoidingView = (
  props: React.PropsWithChildren<{ className?: string }>
) => {
  const { data } = useLayoutCtx()
  const { breakpoints } = useTheme()
  const styles = InsetAvoidingViewCompiler(
    data.insetSidebar
  ).getMediaQueryStyle(breakpoints)
  return (
    <StyledProxy
      {...props}
      styles={{
        transition: "all 225ms",
        ...styles,
      }}
    />
  )
}

export default InsetAvoidingView

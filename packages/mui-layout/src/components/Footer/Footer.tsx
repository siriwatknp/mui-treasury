import React from "react"
import styled from '../../core/styled';
import { useLayoutCtx } from "../../core"
import { MediaQueries } from "../../utils/createBreakpointStyles"
import { useTheme } from "@material-ui/core"
import { createBreakpointStyles } from "../../utils"
import ContentCompiler from "../../compilers/ContentCompiler"

const StyledComponent = styled("footer")(
  ({ styles }: { styles: MediaQueries }) => ({
    ...styles,
  })
)

const Footer = (props: React.PropsWithChildren<{ className?: string }>) => {
  const { breakpoints } = useTheme()
  const { data, state } = useLayoutCtx()
  const styles = createBreakpointStyles(
    // can reuse content compiler at this point
    ContentCompiler(state, data.edgeSidebar).getResultStyle(data.footer.id),
    breakpoints
  )
  return (
    <StyledComponent
      {...props}
      styles={{ transition: "all 225ms", ...styles }}
    />
  )
}

export default Footer

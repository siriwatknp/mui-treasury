import React from "react"
import styled from "styled-components"
import { useTheme } from "@material-ui/core/styles"
import HeaderOffset from "../HeaderOffset"
import { useLayoutCtx } from "../../core"
import { MediaQueries } from "../../utils/createBreakpointStyles"
import { createBreakpointStyles } from "../../utils"
import ContentCompiler from "../../compilers/ContentCompiler"
import { useFullScreenCtx } from "../../core/Context/FullScreenContext"

const StyledComponent = styled("main")(
  ({ styles }: { styles: MediaQueries }) => ({
    ...styles,
  })
)

const Content = ({
  children,
  ...props
}: React.PropsWithChildren<{ className?: string }>) => {
  const { breakpoints } = useTheme()
  const { data, state } = useLayoutCtx()
  const styles = createBreakpointStyles(
    ContentCompiler(state, data.edgeSidebar).getResultStyle(data.content.id),
    breakpoints
  )
  const isFullScreen = useFullScreenCtx()
  return (
    <StyledComponent
      {...props}
      styles={{
        transition: "all 225ms",
        ...styles,
        ...(isFullScreen && { flexGrow: 1, minHeight: 0, display: "flex" }),
      }}
    >
      <HeaderOffset />
      {children}
    </StyledComponent>
  )
}

export default Content

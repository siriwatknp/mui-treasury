import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container, { ContainerProps } from "@material-ui/core/Container"
import { useFullScreenCtx } from "../../core/Context/FullScreenContext"

const useContainerStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
  },
})
const useWrapperStyles = makeStyles({
  root: {
    overflow: "auto",
    flexGrow: 1,
  },
})

export type InsetContainerProps = {
  leftSidebar?: React.ReactNode
  rightSidebar?: React.ReactNode
} & ContainerProps

const InsetContainer: React.FC<InsetContainerProps> = ({
  children,
  leftSidebar,
  rightSidebar,
  ...props
}) => {
  const isFullScreen = useFullScreenCtx()
  const classes = useContainerStyles(props)
  const wrapper = useWrapperStyles()
  return (
    <Container {...props} classes={classes}>
      {leftSidebar}
      {isFullScreen ? (
        <div className={wrapper.root}>{children}</div>
      ) : (
        children
      )}
      {rightSidebar}
    </Container>
  )
}

export default InsetContainer

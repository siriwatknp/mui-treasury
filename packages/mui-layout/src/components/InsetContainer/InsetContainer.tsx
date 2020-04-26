import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container, { ContainerProps } from "@material-ui/core/Container"
import { useFullScreenCtx } from "../../core/Context/FullScreenContext"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
  },
  wrapper: {
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
  const classes = useStyles(props)
  return (
    <Container {...props} classes={classes}>
      {leftSidebar}
      {isFullScreen ? (
        <div className={classes.wrapper}>{children}</div>
      ) : (
        children
      )}
      {rightSidebar}
    </Container>
  )
}

export default InsetContainer

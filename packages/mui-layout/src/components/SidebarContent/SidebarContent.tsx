import React from "react"
import cx from "clsx"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    minHeight: 0,
    flexGrow: 1,
    overflow: "auto",
  },
})

const SidebarContent: React.FC<{ className?: string }> = ({
  className,
  ...props
}) => {
  const classes = useStyles()
  return <div className={cx("SidebarContent", className, classes.root)} {...props} />
}

export default SidebarContent

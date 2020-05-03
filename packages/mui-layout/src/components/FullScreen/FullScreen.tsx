import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FullScreenContext from "../../core/Context/FullScreenContext"

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
}))

const FullScreen: React.FC<{}> = ({ children }) => {
  const classes = useStyles()
  return (
    <FullScreenContext.Provider value={true}>
      <div className={classes.root}>{children}</div>
    </FullScreenContext.Provider>
  )
}

export default FullScreen

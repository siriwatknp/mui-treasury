import React from "react"
import styled from '../../core/styled';
import { makeStyles } from "@material-ui/core/styles"
import InsetHeaderOffset from "../InsetHeaderOffset"
import { useInsetSidebar } from "../../core"
import { MediaQueries } from "../../utils/createBreakpointStyles"

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: "relative",
    flexShrink: 0,
  },
  paper: {
    backgroundColor: palette.grey[100],
  },
}))

const Proxy: React.FC<{
  className: string
  styles: MediaQueries
}> = ({ styles, ...props }) => <div {...props} />
const Div = styled(Proxy)<{ styles: MediaQueries }>(({ styles }) => styles)

const InsetSidebar = ({
  sidebarId,
  children,
  ...props
}: React.PropsWithChildren<{
  sidebarId: string
  classes?: { root?: string; paper?: string }
}>) => {
  const classes = useStyles(props)
  const { rootStyles, bodyStyles } = useInsetSidebar(
    sidebarId
  )
  return (
    <Div className={`InsetSidebar-root ${classes.root}`} styles={rootStyles}>
      <Div className={`InsetSidebar-paper ${classes.paper}`} styles={bodyStyles}>
        <InsetHeaderOffset sidebarId={sidebarId} />
        {children}
      </Div>
    </Div>
  )
}

export default InsetSidebar

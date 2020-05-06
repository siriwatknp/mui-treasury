import React from "react"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import { DrawerAnchor } from "./Config"

interface FunctionChildren {
  (props: {
    open?: boolean
    collapsed?: boolean
    anchor: DrawerAnchor
  }): React.ReactNode
}

export interface CtaProps {
  children?: FunctionChildren
  sidebarId?: string
  onClick?: Function
  SvgIconProps?: SvgIconProps
}



import React from "react"
import Drawer, { DrawerProps } from "@material-ui/core/Drawer"
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@material-ui/core/SwipeableDrawer"
import { SidebarVariant } from "../../types"
import { upperFirst } from "../../utils"
import createHiddenProxyComponent, { HiddenProxyProps } from "./StyledProxy"

const CLS = "MuiTreasury-paper"

const StyledProxyDrawer = createHiddenProxyComponent<DrawerProps>(Drawer, CLS)
const StyledProxySwipeableDrawer = createHiddenProxyComponent<
  SwipeableDrawerProps
>(SwipeableDrawer, CLS)

export type StyledProxyDrawerProps = DrawerProps & HiddenProxyProps
export type StyledProxySwipeableDrawerProps = SwipeableDrawerProps &
  HiddenProxyProps

export const createDrawerVariant = (variant: SidebarVariant) => {
  const Sidebar: React.FC<StyledProxyDrawerProps> = ({
    PaperProps = {},
    ...props
  }) => (
    <StyledProxyDrawer
      {...props}
      PaperProps={{
        ...PaperProps,
        className: `${CLS} ${PaperProps.className}`,
      }}
      variant={variant}
    />
  )

  Sidebar.displayName = `${upperFirst(variant)}DrawerSidebar`
  return Sidebar
}

export const createSwipeableVariant = (variant: SidebarVariant) => {
  const Sidebar: React.FC<StyledProxySwipeableDrawerProps> = ({
    PaperProps = {},
    ...props
  }) => (
    <StyledProxySwipeableDrawer
      {...props}
      PaperProps={{
        ...PaperProps,
        className: `${CLS} ${PaperProps.className}`,
      }}
      variant={variant}
    />
  )

  Sidebar.displayName = `${upperFirst(variant)}SwipeableSidebar`
  return Sidebar
}

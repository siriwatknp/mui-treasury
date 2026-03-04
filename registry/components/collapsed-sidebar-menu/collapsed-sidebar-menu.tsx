"use client";
import React from "react";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import { styled } from "@mui/material/styles";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import Tooltip from "@mui/material/Tooltip";

interface CollapsedSidebarMenuProps extends Omit<
  NavigationMenu.Root.Props,
  "children"
> {
  children: React.ReactNode;
  render: NavigationMenu.Trigger.Props["render"];
  tooltip?: React.ReactNode;
}

const StyledPortal = styled(NavigationMenu.Portal)({
  display: "var(--_collapsed, block) var(--_uncollapsed, none)",
  zIndex: 1300,
});

export function CollapsedSidebarMenuRoot({
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenu.Root>) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const triggerCallbackRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      setContainer(node.closest(".EdgeSidebar") as HTMLElement);
    }
  }, []);
  return (
    <NavigationMenu.Root
      orientation="vertical"
      delay={150}
      closeDelay={150}
      {...props}
    >
      <NavigationMenu.List
        ref={triggerCallbackRef as React.Ref<HTMLUListElement>}
        render={<SidebarMenu />}
      >
        {children}
      </NavigationMenu.List>

      <StyledPortal container={container}>
        <NavigationMenu.Positioner side="right" align="start" sideOffset={4}>
          <NavigationMenu.Popup render={<MenuPopup />}>
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </StyledPortal>
    </NavigationMenu.Root>
  );
}

const CollapsedSidebarMenu = function CollapsedSidebarMenu({
  render,
  children,
  tooltip,
}: CollapsedSidebarMenuProps) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const triggerCallbackRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      setContainer(node.closest(".EdgeSidebar") as HTMLElement);
    }
  }, []);
  return (
    <NavigationMenu.Item render={<SidebarMenuItem />}>
      {tooltip ? (
        <Tooltip
          title={tooltip}
          placement="right"
          disableHoverListener
          disableTouchListener
          slotProps={{
            popper: {
              container,
              sx: {
                "[data-base-ui-portal] ~ &, &:has(~ [data-base-ui-portal])": {
                  display: "none",
                },
              },
            },
          }}
        >
          <NavigationMenu.Trigger ref={triggerCallbackRef} render={render} />
        </Tooltip>
      ) : (
        <NavigationMenu.Trigger render={render} />
      )}
      <NavigationMenu.Content>{children}</NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

const MenuPopup = styled(SidebarMenu)(({ theme }) => ({
  "--_collapsed": "var(--__,)",
  "--_uncollapsed": "var(--__)",
  minWidth: 160,
  padding: theme.spacing(0.5),
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  borderRadius: `calc(4px + ${(theme.vars || theme).shape.borderRadius})`,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  boxShadow: (theme.vars || theme).shadows[1],
}));

export function CollapsedSidebarMenuItem({
  children,
  ...props
}: React.ComponentProps<typeof SidebarMenuButton>) {
  return (
    <SidebarMenuButton as="div" {...props}>
      {children}
    </SidebarMenuButton>
  );
}

export function CollapsedSidebarMenuLink({
  children,
  component,
  ...props
}: NavigationMenu.Link.Props & {
  children: React.ReactNode;
  component?: React.ElementType;
}) {
  return (
    <NavigationMenu.Link
      render={<SidebarMenuButton as={component} />}
      {...props}
    >
      {children}
    </NavigationMenu.Link>
  );
}

export default CollapsedSidebarMenu;

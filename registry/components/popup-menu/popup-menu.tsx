"use client";
import React from "react";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarMenuList from "../sidebar-menu/sidebar-menu-list";
import { styled } from "@mui/material/styles";
import SidebarMenuItem from "../sidebar-menu-item/sidebar-menu-item";
import SidebarTooltip from "../sidebar-tooltip/sidebar-tooltip";

interface PopupMenuItemProps {
  children?: React.ReactNode;
  render: NavigationMenu.Trigger.Props["render"];
  tooltip?: React.ReactNode;
}

const StyledPortal = styled(NavigationMenu.Portal)({
  display: "var(--_collapsed, block) var(--_uncollapsed, none)",
  zIndex: 1300,
});

export function PopupMenuList({
  children,
  sidebarSide = "left",
  ...props
}: React.ComponentProps<typeof NavigationMenu.Root> & {
  sidebarSide?: "left" | "right";
}) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const triggerCallbackRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      setContainer(
        (node.closest(".EdgeSidebar-R") ||
          node.closest(".EdgeSidebar")) as HTMLElement,
      );
    }
  }, []);
  return (
    <NavigationMenu.Root orientation="vertical" {...props}>
      <NavigationMenu.List
        ref={triggerCallbackRef as React.Ref<HTMLUListElement>}
        render={<SidebarMenuList />}
      >
        {children}
      </NavigationMenu.List>

      <StyledPortal container={container || undefined}>
        <NavigationMenu.Positioner
          side={sidebarSide === "left" ? "right" : "left"}
          align="start"
        >
          <NavigationMenu.Popup render={<MenuPopup />}>
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </StyledPortal>
    </NavigationMenu.Root>
  );
}

export const PopupMenuItem = function PopupMenuItem({
  render,
  children,
  tooltip,
}: PopupMenuItemProps) {
  return (
    <NavigationMenu.Item render={<SidebarMenuItem />}>
      {tooltip ? (
        <SidebarTooltip
          title={tooltip}
          placement="right"
          disableTouchListener
          disableHoverListener={!!children}
          slotProps={{
            popper: {
              sx: {
                "[data-base-ui-portal] ~ &, &:has(~ [data-base-ui-portal])": {
                  display: "none !important",
                },
              },
            },
          }}
        >
          <NavigationMenu.Trigger render={render} />
        </SidebarTooltip>
      ) : (
        <NavigationMenu.Trigger render={render} />
      )}
      {children}
    </NavigationMenu.Item>
  );
};

export function PopupMenuContent({
  children,
  ...props
}: NavigationMenu.Content.Props) {
  return (
    <NavigationMenu.Content className="PopupMenuContent" {...props}>
      {children}
    </NavigationMenu.Content>
  );
}

const MenuPopup = styled(SidebarMenuList)(({ theme }) => ({
  "--_collapsed": "var(--__,)",
  "--_uncollapsed": "var(--__)",
  minWidth: 160,
  padding: theme.spacing(0.5),
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  borderRadius: `calc(4px + ${(theme.vars || theme).shape.borderRadius})`,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  boxShadow: (theme.vars || theme).shadows[1],
  "&:has(.PopupMenuContent:empty)": {
    display: "none",
  },
}));

export function PopupMenuLink({
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

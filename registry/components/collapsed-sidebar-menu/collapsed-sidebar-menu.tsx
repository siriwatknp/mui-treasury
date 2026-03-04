"use client";
import React from "react";
import { Menu } from "@base-ui/react/menu";
import SidebarMenuButton from "../sidebar-menu-button/sidebar-menu-button";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import { styled } from "@mui/material/styles";

interface CollapsedSidebarMenuProps extends Menu.Root.Props {
  children: React.ReactNode;
  render: Menu.Trigger.Props["render"];
}

const StyledPortal = styled(Menu.Portal)({
  display: "var(--_collapsed, block) var(--_uncollapsed, none)",
  zIndex: 1300,
});

const CollapsedSidebarMenu = function CollapsedSidebarMenu({
  render,
  children,
  ...props
}: CollapsedSidebarMenuProps) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const triggerCallbackRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      setContainer(node.closest(".EdgeSidebar") as HTMLElement);
    }
  }, []);
  return (
    <Menu.Root loopFocus={false} {...props}>
      <Menu.Trigger
        ref={triggerCallbackRef as React.Ref<HTMLButtonElement>}
        openOnHover
        delay={150}
        render={render}
      />
      <StyledPortal container={container}>
        <Menu.Positioner side="right" align="start" sideOffset={4}>
          {children}
        </Menu.Positioner>
      </StyledPortal>
    </Menu.Root>
  );
};

interface CollapsedSidebarSubmenuProps extends Menu.SubmenuRoot.Props {
  children: React.ReactNode;
  render: Menu.Trigger.Props["render"];
}

export const CollapsedSidebarSubmenu = function CollapsedSidebarSubmenu({
  render,
  children,
  ...props
}: CollapsedSidebarSubmenuProps) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const triggerCallbackRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      setContainer(node.closest(".EdgeSidebar") as HTMLElement);
    }
  }, []);
  return (
    <Menu.SubmenuRoot loopFocus={false} {...props}>
      <Menu.SubmenuTrigger
        ref={triggerCallbackRef as React.Ref<HTMLButtonElement>}
        openOnHover
        delay={150}
        render={render}
        nativeButton
      />
      <StyledPortal container={container}>
        <Menu.Positioner side="right" align="start">
          {children}
        </Menu.Positioner>
      </StyledPortal>
    </Menu.SubmenuRoot>
  );
};

const MenuList = styled(SidebarMenu)(({ theme }) => ({
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

export function CollapsedSidebarMenuPopup({
  children,
  ...props
}: React.ComponentProps<typeof Menu.Popup> & { children: React.ReactNode }) {
  return (
    <Menu.Popup render={<MenuList />} {...props}>
      {children}
    </Menu.Popup>
  );
}

export function CollapsedSidebarMenuItem({
  children,
  ...props
}: React.ComponentProps<typeof Menu.Item> & { children: React.ReactNode }) {
  return (
    <Menu.Item render={<SidebarMenuButton as="div" />} {...props}>
      {children}
    </Menu.Item>
  );
}

export function CollapsedSidebarMenuLink({
  children,
  ...props
}: React.ComponentProps<typeof Menu.LinkItem> & { children: React.ReactNode }) {
  return (
    <Menu.LinkItem render={<SidebarMenuButton />} {...props}>
      {children}
    </Menu.LinkItem>
  );
}

export default CollapsedSidebarMenu;

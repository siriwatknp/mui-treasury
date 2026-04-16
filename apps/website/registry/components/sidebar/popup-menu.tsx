import React from 'react';

import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { SxProps, Theme, styled } from '@mui/material/styles';

import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuList,
  SidebarTooltip,
} from './index';

interface PopupMenuItemProps {
  children?: React.ReactNode;
  render: NavigationMenu.Trigger.Props['render'];
  tooltip?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const StyledPortal = styled(NavigationMenu.Portal)({
  display: 'var(--_collapsed, block) var(--_uncollapsed, none)',
  zIndex: 1300,
});

export function PopupMenuList({
  children,
  sidebarSide = 'left',
  ...props
}: React.ComponentProps<typeof NavigationMenu.Root> & {
  sidebarSide?: 'left' | 'right';
}) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  const triggerCallbackRef = React.useCallback((node: HTMLElement | null) => {
    if (node) {
      setContainer(
        (node.closest('.EdgeSidebar-R') ||
          node.closest('.EdgeSidebar')) as HTMLElement,
      );
    }
  }, []);
  return (
    <NavigationMenu.Root orientation="vertical" {...props}>
      <NavigationMenu.List
        ref={triggerCallbackRef as React.Ref<HTMLUListElement>}
        render={
          <SidebarMenuList
            sx={{
              '& .PopupMenuItem:has(+ :not(.PopupMenuItem))': {
                // to hide the popup item when uncollapsed, preventing gaps between items
                display: 'var(--_collapsed, flex) var(--_uncollapsed, none)',
              },
              '& .PopupMenuItem + :not(.PopupMenuItem)': {
                // to hide the uncollapsed sibling when in collapsed mode, preventing gaps between items
                display: 'var(--_collapsed, none) var(--_uncollapsed, flex)',
              },
            }}
          />
        }
      >
        {children}
      </NavigationMenu.List>

      <StyledPortal container={container || undefined}>
        <NavigationMenu.Positioner
          side={sidebarSide === 'left' ? 'right' : 'left'}
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
  sx,
}: PopupMenuItemProps) {
  return (
    <NavigationMenu.Item
      render={<SidebarMenuItem className="PopupMenuItem" sx={sx} />}
    >
      {tooltip ? (
        <SidebarTooltip
          title={tooltip}
          placement="right"
          disableTouchListener
          disableHoverListener={!!children}
          slotProps={{
            popper: {
              sx: {
                '[data-base-ui-portal] ~ &, &:has(~ [data-base-ui-portal])': {
                  display: 'none !important',
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
  '--_collapsed': 'var(--__,)',
  '--_uncollapsed': 'var(--__)',
  minWidth: 160,
  padding: theme.spacing(0.5),
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  borderRadius: `calc(4px + ${(theme.vars || theme).shape.borderRadius})`,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  boxShadow: (theme.vars || theme).shadows[1],
  '&:has(.PopupMenuContent:empty)': {
    display: 'none',
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
      render={<SidebarMenuButton component={component} />}
      {...props}
    >
      {children}
    </NavigationMenu.Link>
  );
}

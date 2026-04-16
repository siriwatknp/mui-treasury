'use client';

import React, { useMemo } from 'react';

import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { unstable_memoTheme as memoTheme } from '@mui/material/utils';

import type {
  ForwardStyledProps,
  OverridableComponent,
} from '../../types/shared/component';
import { sidebarClasses } from './sidebar-classes';

export type SidebarMenuActionProps = ForwardStyledProps<{
  hoverAppear?: boolean;
  _before?: React.ReactNode;
  component?: React.ElementType;
}>;

const StyledSidebarMenuAction = styled(ButtonBase, {
  name: 'SidebarMenuAction',
  slot: 'root',
})<{ ownerState: SidebarMenuActionProps }>(
  memoTheme(({ theme }) => ({
    '--_ms': 'initial',
    flex: 'none', // prevent action from shrinking when the text is long and the sidebar is collapsing.
    marginInlineStart: 'var(--_ms)',
    width: 'var(--action-size, 1.5rem)',
    height: 'var(--action-size, 1.5rem)',
    display: 'inline-flex',
    visibility:
      'var(--_collapsed, hidden) var(--_uncollapsed, visible)' as never,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: (theme.vars || theme).palette.text.secondary,
    transition: 'var(--tsn, right 0.4s)',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    '&:first-of-type': {
      '--_ms': 'auto',
    },
    '&:focus-visible, &:has(:focus-visible )': {
      outline: '2px solid',
      outlineColor: (theme.vars || theme).palette.text.primary,
      outlineOffset: '2px',
    },
    '@media (hover: hover)': {
      '&:hover': {
        backgroundColor: (theme.vars || theme).palette.action.hover,
      },
    },
    '& svg': {
      width: 'var(--icon-size, 1rem)',
      height: 'var(--icon-size, 1rem)',
    },
    variants: [
      {
        props: { hoverAppear: true },
        style: {
          opacity: 0,
          '&:hover, &:focus-visible': {
            opacity: 1,
          },
          [`.${sidebarClasses.menuButton}:hover ~ &, .${sidebarClasses.groupLabel} > &`]:
            {
              opacity: 1,
            },
        },
      },
    ],
  })),
);

export const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuActionProps & ButtonBaseProps
>(function SidebarMenuAction(
  { className, hoverAppear, _before, component, children, ...props },
  ref,
) {
  const ownerState = useMemo(() => ({ hoverAppear }), [hoverAppear]);
  return (
    <StyledSidebarMenuAction
      ref={ref}
      className={`${sidebarClasses.menuAction} ${className || ''}`}
      ownerState={ownerState}
      as={
        component ??
        (className?.includes('CollapsibleTrigger') ? 'label' : undefined)
      }
      {...props}
    >
      {_before}
      {children}
    </StyledSidebarMenuAction>
  );
}) as OverridableComponent<SidebarMenuActionProps, typeof ButtonBase>;

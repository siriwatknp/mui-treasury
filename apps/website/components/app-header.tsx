'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useColorScheme } from '@mui/material/styles';
import { Moon, Sun } from 'lucide-react';
import { PanelLeft, PanelLeftClose } from 'lucide-react';
import Link from 'next/link';

import { HeaderNav } from '@/components/header-nav';
import {
  EdgeDrawerTrigger,
  layoutVisibility,
} from '@/registry/layout/layout-core';
import Header from '@/registry/layout/layout-core/Header';

function ColorSchemeSelectIcon() {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMode = (mode: 'system' | 'light' | 'dark') => () => {
    setMode(mode);
    handleClose();
  };
  if (!mode) {
    return (
      <Box
        sx={(theme) => {
          // copy from OutlinedInput
          const borderColor =
            theme.palette.mode === 'light'
              ? 'rgba(0, 0, 0, 0.23)'
              : 'rgba(255, 255, 255, 0.23)';
          return {
            verticalAlign: 'bottom',
            display: 'inline-flex',
            width: 36,
            height: 36,
            borderRadius: (theme.vars || theme).shape.borderRadius,
            border: '1px solid',
            borderColor: theme.vars
              ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)`
              : borderColor,
          };
        }}
      />
    );
  }
  const resolvedMode = (systemMode || mode) as 'light' | 'dark';
  const icon = {
    light: <Sun size={20} />,
    dark: <Moon size={20} />,
  }[resolvedMode];
  return (
    <>
      <IconButton
        onClick={handleClick}
        disableRipple
        size="small"
        sx={{
          borderRadius: '4px',
          '&:hover, &:focus': {
            backgroundColor: 'action.hover',
          },
        }}
        aria-controls={open ? 'color-scheme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: 'outlined',
            sx: {
              my: '4px',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem selected={mode === 'system'} onClick={handleMode('system')}>
          System
        </MenuItem>
        <MenuItem selected={mode === 'light'} onClick={handleMode('light')}>
          Light
        </MenuItem>
        <MenuItem selected={mode === 'dark'} onClick={handleMode('dark')}>
          Dark
        </MenuItem>
      </Menu>
    </>
  );
}

export function AppHeader() {
  return (
    <Header
      clip
      className="pr-6 pl-3 py-3 bg-background-default gap-2 z-[1299]"
    >
      <EdgeDrawerTrigger
        render={
          <IconButton>
            <PanelLeft className={layoutVisibility.visibleOnEdgeDrawerClosed} />
            <PanelLeftClose
              className={layoutVisibility.visibleOnEdgeDrawerOpen}
            />
          </IconButton>
        }
      />
      <Link
        href="/"
        className="text-xl font-semibold hover:opacity-80 tracking-tight"
      >
        MUI Treasury
      </Link>
      <div className="grow" />
      <HeaderNav />
      <ColorSchemeSelectIcon />
    </Header>
  );
}

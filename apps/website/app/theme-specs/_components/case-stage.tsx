'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import { modalClasses } from '@mui/material/Modal';
import { popoverClasses } from '@mui/material/Popover';
import { snackbarClasses } from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { type Theme, ThemeProvider } from '@mui/material/styles';

const OVERLAY_DEFAULTS = {
  MuiModal: {
    disablePortal: true,
    disableEnforceFocus: true,
    disableAutoFocus: true,
    disableScrollLock: true,
  },
  MuiPopover: {
    disablePortal: true,
    disableEnforceFocus: true,
    disableAutoFocus: true,
    disableScrollLock: true,
  },
  MuiMenu: {
    disablePortal: true,
    disableEnforceFocus: true,
    disableAutoFocus: true,
    disableScrollLock: true,
  },
  MuiDialog: {
    disablePortal: true,
    disableEnforceFocus: true,
    disableAutoFocus: true,
    disableScrollLock: true,
  },
  MuiDrawer: {
    disablePortal: true,
    disableEnforceFocus: true,
    disableAutoFocus: true,
    disableScrollLock: true,
  },
};

function contained(outer: Theme): Theme {
  const components = { ...outer.components } as Record<
    string,
    { defaultProps?: object }
  >;
  for (const [name, props] of Object.entries(OVERLAY_DEFAULTS)) {
    components[name] = {
      ...components[name],
      defaultProps: { ...components[name]?.defaultProps, ...props },
    };
  }
  return { ...outer, components } as Theme;
}

class RenderBoundary extends React.Component<
  { children: React.ReactNode },
  { error: string | null }
> {
  state = { error: null as string | null };

  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }

  render() {
    if (this.state.error) {
      return (
        <Typography variant="body2" color="error">
          Did not render: {this.state.error}
        </Typography>
      );
    }
    return this.props.children;
  }
}

export function CaseStage({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        position: 'relative',
        transform: 'translateZ(0)',
        minHeight: 72,
        [`&:has(.${modalClasses.root}, .${popoverClasses.root}, .${snackbarClasses.root})`]:
          {
            minHeight: 280,
          },
        p: 2,
        borderRadius: 1,
        bgcolor: 'background.default',
      }}
    >
      <ThemeProvider theme={contained}>
        <RenderBoundary>{children}</RenderBoundary>
      </ThemeProvider>
    </Box>
  );
}

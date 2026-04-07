"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { memo, type ComponentProps } from "react";

export type ActionsProps = ComponentProps<typeof Box>;

export const Actions = ({ children, sx, ...props }: ActionsProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export type ActionProps = ComponentProps<typeof IconButton> & {
  tooltip?: string;
  label?: string;
};

export const Action = memo(
  ({ tooltip, children, label, size = "small", sx, ...props }: ActionProps) => {
    const button = (
      <IconButton
        size={size}
        type="button"
        sx={{
          position: "relative",
          width: 36,
          height: 36,
          p: 0.75,
          color: "text.secondary",
          "&:hover": {
            color: "text.primary",
            bgcolor: "action.hover",
          },
          ...sx,
        }}
        aria-label={label || tooltip}
        {...props}
      >
        {children}
      </IconButton>
    );

    if (tooltip) {
      return (
        <Tooltip title={tooltip} arrow>
          {button}
        </Tooltip>
      );
    }

    return button;
  },
);

Action.displayName = "Action";

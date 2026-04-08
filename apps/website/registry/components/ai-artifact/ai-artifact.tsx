"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { XIcon } from "lucide-react";
import { memo, type ComponentProps } from "react";

export type ArtifactProps = ComponentProps<typeof Paper>;

export const Artifact = ({ children, sx, ...props }: ArtifactProps) => (
  <Paper
    elevation={4}
    sx={{
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      border: 1,
      borderColor: "divider",
      ...sx,
    }}
    {...props}
  >
    {children}
  </Paper>
);

export type ArtifactHeaderProps = ComponentProps<typeof Box>;

export const ArtifactHeader = ({
  children,
  sx,
  ...props
}: ArtifactHeaderProps) => (
  <Box
    sx={[
      (theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: (theme.vars || theme).palette.action.hover,
        px: 2,
        py: 1.5,
      }),
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...props}
  >
    {children}
  </Box>
);

export type ArtifactCloseProps = ComponentProps<typeof IconButton>;

export const ArtifactClose = memo(
  ({ children, size = "small", sx, ...props }: ArtifactCloseProps) => (
    <IconButton
      size={size}
      type="button"
      sx={{
        width: 32,
        height: 32,
        p: 0,
        color: "text.secondary",
        "&:hover": {
          color: "text.primary",
        },
        ...sx,
      }}
      aria-label="Close"
      {...props}
    >
      {children ?? <XIcon className="size-4" />}
    </IconButton>
  ),
);

ArtifactClose.displayName = "ArtifactClose";

export type ArtifactTitleProps = ComponentProps<typeof Typography>;

export const ArtifactTitle = ({ sx, ...props }: ArtifactTitleProps) => (
  <Typography
    variant="body2"
    sx={{
      fontWeight: 500,
      color: "text.primary",
      ...sx,
    }}
    {...props}
  />
);

export type ArtifactDescriptionProps = ComponentProps<typeof Typography>;

export const ArtifactDescription = ({
  sx,
  ...props
}: ArtifactDescriptionProps) => (
  <Typography
    variant="body2"
    sx={{
      color: "text.secondary",
      ...sx,
    }}
    {...props}
  />
);

export type ArtifactActionsProps = ComponentProps<typeof Box>;

export const ArtifactActions = ({
  children,
  sx,
  ...props
}: ArtifactActionsProps) => (
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

export type ArtifactActionProps = ComponentProps<typeof IconButton> & {
  tooltip?: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const ArtifactAction = ({
  tooltip,
  label,
  icon: Icon,
  children,
  size = "small",
  sx,
  ...props
}: ArtifactActionProps) => {
  const button = (
    <IconButton
      size={size}
      type="button"
      sx={{
        width: 32,
        height: 32,
        p: 0,
        color: "text.secondary",
        "&:hover": {
          color: "text.primary",
        },
        ...sx,
      }}
      aria-label={label || tooltip}
      {...props}
    >
      {Icon ? <Icon className="size-4" /> : children}
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
};

export type ArtifactContentProps = ComponentProps<typeof Box>;

export const ArtifactContent = ({
  children,
  sx,
  ...props
}: ArtifactContentProps) => (
  <Box
    sx={{
      flex: 1,
      overflow: "auto",
      p: 2,
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

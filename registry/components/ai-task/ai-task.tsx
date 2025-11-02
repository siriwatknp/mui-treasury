"use client";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import React, { memo, useState, type ReactNode } from "react";

export type TaskItemFileProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const TaskItemFile = ({ children, sx }: TaskItemFileProps) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 0.5,
      borderRadius: 1,
      border: 1,
      borderColor: "divider",
      bgcolor: "action.hover",
      px: 0.75,
      py: 0,
      color: "text.primary",
      fontSize: "0.75rem",
      ...sx,
    }}
  >
    {children}
  </Box>
);

export type TaskItemProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const TaskItem = ({ children, sx }: TaskItemProps) => (
  <Box
    sx={{
      color: "text.secondary",
      fontSize: "0.875rem",
      ...sx,
    }}
  >
    {children}
  </Box>
);

export type TaskProps = {
  defaultOpen?: boolean;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const Task = memo(({ defaultOpen = true, children, sx }: TaskProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box sx={sx}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              isOpen,
              onToggle: () => setIsOpen(!isOpen),
            })
          : child,
      )}
    </Box>
  );
});

Task.displayName = "Task";

export type TaskTriggerProps = {
  title: string;
  children?: ReactNode;
  sx?: SxProps<Theme>;
  isOpen?: boolean;
  onToggle?: () => void;
};

export const TaskTrigger = ({
  children,
  title,
  sx,
  isOpen = false,
  onToggle,
}: TaskTriggerProps) => (
  <Box
    component="button"
    onClick={onToggle}
    sx={{
      display: "flex",
      width: "100%",
      alignItems: "center",
      gap: 1,
      color: "text.secondary",
      fontSize: "0.875rem",
      transition: "color 0.2s",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      p: 0,
      "&:hover": {
        color: "text.primary",
      },
      ...sx,
    }}
  >
    {children ?? (
      <>
        <SearchIcon size={16} />
        <Typography component="span" sx={{ fontSize: "0.875rem" }}>
          {title}
        </Typography>
        <Box
          component={ChevronDownIcon}
          size={16}
          sx={{
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </>
    )}
  </Box>
);

export type TaskContentProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  isOpen?: boolean;
};

export const TaskContent = memo(
  ({ children, sx, isOpen = false }: TaskContentProps) => (
    <Collapse in={isOpen}>
      <Box
        sx={{
          mt: 2,
          pl: 2,
          borderLeft: 2,
          borderColor: "divider",
          "& > *:not(:last-child)": {
            mb: 1,
          },
          ...sx,
        }}
      >
        {children}
      </Box>
    </Collapse>
  ),
);

TaskContent.displayName = "TaskContent";

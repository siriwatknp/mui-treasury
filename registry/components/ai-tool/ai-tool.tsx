"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ToolUIPart } from "ai";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  CircleIcon,
  ClockIcon,
  WrenchIcon,
  XCircleIcon,
} from "lucide-react";
import React, { memo, useState, type ReactNode } from "react";
import { CodeBlock } from "../ai-code-block/ai-code-block";

export type ToolProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  defaultOpen?: boolean;
};

export const Tool = memo(({ children, sx, defaultOpen = false }: ToolProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box
      sx={{
        mb: 2,
        width: "100%",
        borderRadius: 1,
        border: 1,
        borderColor: "divider",
        ...sx,
      }}
    >
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

Tool.displayName = "Tool";

export type ToolHeaderProps = {
  type: ToolUIPart["type"];
  state: ToolUIPart["state"];
  sx?: SxProps<Theme>;
  isOpen?: boolean;
  onToggle?: () => void;
};

const getStatusBadge = (status: ToolUIPart["state"]) => {
  const labels = {
    "input-streaming": "Pending",
    "input-available": "Running",
    "output-available": "Completed",
    "output-error": "Error",
  } as const;

  const getIcon = () => {
    switch (status) {
      case "input-streaming":
        return <CircleIcon size={14} />;
      case "input-available":
        return <ClockIcon size={14} />;
      case "output-available":
        return <CheckCircleIcon size={14} />;
      case "output-error":
        return <XCircleIcon size={14} />;
    }
  };

  const getChipColor = (): "default" | "success" | "error" | "warning" => {
    switch (status) {
      case "output-available":
        return "success";
      case "output-error":
        return "error";
      case "input-available":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Chip
      icon={getIcon()}
      label={labels[status]}
      size="small"
      variant="filled"
      color={getChipColor()}
      sx={{
        height: "21px",
        borderRadius: 99,
        fontSize: "0.75rem",
        "& .MuiChip-icon": {
          fontSize: 14,
          ml: 0.5,
          ...(status === "input-available" && {
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }),
        },
        "@keyframes pulse": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      }}
    />
  );
};

export const ToolHeader = ({
  sx,
  type,
  state,
  isOpen = false,
  onToggle,
}: ToolHeaderProps) => (
  <Box
    component="button"
    onClick={onToggle}
    sx={{
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      p: 1.5,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      ...sx,
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box component={WrenchIcon} size={16} sx={{ color: "text.secondary" }} />
      <Typography
        component="span"
        sx={{ fontWeight: 500, fontSize: "0.875rem" }}
      >
        {type}
      </Typography>
      {getStatusBadge(state)}
    </Box>
    <Box
      component={ChevronDownIcon}
      size={16}
      sx={{
        color: "text.secondary",
        transition: "transform 0.2s",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    />
  </Box>
);

export type ToolContentProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  isOpen?: boolean;
};

export const ToolContent = memo(
  ({ children, sx, isOpen = false }: ToolContentProps) => (
    <Collapse in={isOpen}>
      <Box sx={sx}>{children}</Box>
    </Collapse>
  ),
);

ToolContent.displayName = "ToolContent";

export type ToolInputProps = {
  input: ToolUIPart["input"];
  sx?: SxProps<Theme>;
};

export const ToolInput = ({ input, sx }: ToolInputProps) => (
  <Box
    sx={{
      overflow: "hidden",
      p: 2,
      pt: 0,
      ...sx,
    }}
  >
    <Typography
      variant="overline"
      sx={{
        fontWeight: 500,
        color: "text.secondary",
        letterSpacing: 1,
        mb: 1,
        display: "block",
      }}
    >
      Parameters
    </Typography>
    <Box
      sx={{
        borderRadius: 1,
        bgcolor: "action.hover",
      }}
    >
      <CodeBlock code={JSON.stringify(input, null, 2)} language="json" />
    </Box>
  </Box>
);

export type ToolOutputProps = {
  output: ToolUIPart["output"];
  errorText: ToolUIPart["errorText"];
  sx?: SxProps<Theme>;
};

export const ToolOutput = ({ output, errorText, sx }: ToolOutputProps) => {
  if (!(output || errorText)) {
    return null;
  }

  let Output = <Box>{output as ReactNode}</Box>;

  if (typeof output === "object") {
    Output = (
      <CodeBlock code={JSON.stringify(output, null, 2)} language="json" />
    );
  } else if (typeof output === "string") {
    Output = <CodeBlock code={output} language="json" />;
  }

  return (
    <Box sx={{ p: 2, pt: 0, ...sx }}>
      <Typography
        variant="overline"
        sx={{
          fontWeight: 500,
          color: "text.secondary",
          letterSpacing: 1,
          mb: 1,
          display: "block",
        }}
      >
        {errorText ? "Error" : "Result"}
      </Typography>
      <Box
        sx={{
          overflowX: "auto",
          borderRadius: 1,
          fontSize: "0.75rem",
          "& table": { width: "100%" },
          ...(errorText
            ? {
                bgcolor: "error.light",
                color: "error.main",
                opacity: 0.1,
              }
            : {
                bgcolor: "action.hover",
                color: "text.primary",
              }),
        }}
      >
        {errorText && <Box>{errorText}</Box>}
        {Output}
      </Box>
    </Box>
  );
};

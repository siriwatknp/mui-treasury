"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import {
  BrainIcon,
  ChevronDownIcon,
  DotIcon,
  type LucideIcon,
} from "lucide-react";
import type { ComponentProps } from "react";
import { createContext, memo, useContext, useState } from "react";

type ChainOfThoughtContextValue = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const ChainOfThoughtContext = createContext<ChainOfThoughtContextValue | null>(
  null,
);

const useChainOfThought = () => {
  const context = useContext(ChainOfThoughtContext);
  if (!context) {
    throw new Error(
      "ChainOfThought components must be used within ChainOfThought",
    );
  }
  return context;
};

export type ChainOfThoughtProps = ComponentProps<typeof Box> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const ChainOfThought = memo(
  ({
    open,
    defaultOpen = false,
    onOpenChange,
    children,
    sx,
    ...props
  }: ChainOfThoughtProps) => {
    const [isOpen, setIsOpen] = useState(open ?? defaultOpen);

    const handleOpenChange = (newOpen: boolean) => {
      setIsOpen(newOpen);
      onOpenChange?.(newOpen);
    };

    return (
      <ChainOfThoughtContext.Provider
        value={{ isOpen, setIsOpen: handleOpenChange }}
      >
        <Box
          sx={{
            maxWidth: "65ch",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            ...sx,
          }}
          {...props}
        >
          {children}
        </Box>
      </ChainOfThoughtContext.Provider>
    );
  },
);

export type ChainOfThoughtHeaderProps = ComponentProps<typeof Box>;

export const ChainOfThoughtHeader = memo(
  ({ children, sx, ...props }: ChainOfThoughtHeaderProps) => {
    const { isOpen, setIsOpen } = useChainOfThought();

    return (
      <Box
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 1,
          color: "text.secondary",
          fontSize: "0.875rem",
          transition: "color 0.2s",
          cursor: "pointer",
          "&:hover": {
            color: "text.primary",
          },
          ...sx,
        }}
        {...props}
      >
        <BrainIcon className="size-4" />
        <Box sx={{ flex: 1, textAlign: "left" }}>
          {children ?? "Chain of Thought"}
        </Box>
        <ChevronDownIcon
          className="size-4"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </Box>
    );
  },
);

export type ChainOfThoughtStepProps = ComponentProps<typeof Box> & {
  icon?: LucideIcon;
  label: string;
  description?: string;
  status?: "complete" | "active" | "pending";
};

export const ChainOfThoughtStep = memo(
  ({
    icon: Icon = DotIcon,
    label,
    description,
    status = "complete",
    children,
    sx,
    ...props
  }: ChainOfThoughtStepProps) => {
    const statusColors = {
      complete: "text.secondary",
      active: "text.primary",
      pending: "text.disabled",
    };

    return (
      <Box
        sx={{
          display: "flex",
          gap: 1,
          fontSize: "0.875rem",
          color: statusColors[status],
          ...sx,
        }}
        {...props}
      >
        <Box sx={{ position: "relative", mt: 0.25 }}>
          <Icon className="size-4" />
          <Box
            sx={{
              position: "absolute",
              top: "1.5rem",
              bottom: 0,
              left: "50%",
              width: "1px",
              bgcolor: "divider",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">{label}</Typography>
          {description && (
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", display: "block" }}
            >
              {description}
            </Typography>
          )}
          {children}
        </Box>
      </Box>
    );
  },
);

export type ChainOfThoughtSearchResultsProps = ComponentProps<typeof Box>;

export const ChainOfThoughtSearchResults = memo(
  ({ sx, ...props }: ChainOfThoughtSearchResultsProps) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexWrap: "wrap",
        ...sx,
      }}
      {...props}
    />
  ),
);

export type ChainOfThoughtSearchResultProps = ComponentProps<typeof Chip>;

export const ChainOfThoughtSearchResult = memo(
  ({ sx, ...props }: ChainOfThoughtSearchResultProps) => (
    <Chip
      size="small"
      color="secondary"
      sx={{
        height: 24,
        fontSize: "0.75rem",
        fontWeight: 400,
        ...sx,
      }}
      {...props}
    />
  ),
);

export type ChainOfThoughtContentProps = ComponentProps<typeof Box>;

export const ChainOfThoughtContent = memo(
  ({ children, sx, ...props }: ChainOfThoughtContentProps) => {
    const { isOpen } = useChainOfThought();

    return (
      <Collapse in={isOpen}>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            ...sx,
          }}
          {...props}
        >
          {children}
        </Box>
      </Collapse>
    );
  },
);

export type ChainOfThoughtImageProps = ComponentProps<typeof Box> & {
  caption?: string;
};

export const ChainOfThoughtImage = memo(
  ({ children, caption, sx, ...props }: ChainOfThoughtImageProps) => (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          maxHeight: "22rem",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 2,
          bgcolor: "action.hover",
          p: 1.5,
        }}
      >
        {children}
      </Box>
      {caption && (
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {caption}
        </Typography>
      )}
    </Box>
  ),
);

ChainOfThought.displayName = "ChainOfThought";
ChainOfThoughtHeader.displayName = "ChainOfThoughtHeader";
ChainOfThoughtStep.displayName = "ChainOfThoughtStep";
ChainOfThoughtSearchResults.displayName = "ChainOfThoughtSearchResults";
ChainOfThoughtSearchResult.displayName = "ChainOfThoughtSearchResult";
ChainOfThoughtContent.displayName = "ChainOfThoughtContent";
ChainOfThoughtImage.displayName = "ChainOfThoughtImage";

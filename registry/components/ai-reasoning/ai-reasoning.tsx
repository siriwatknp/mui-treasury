"use client";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import type { SxProps, Theme } from "@mui/material/styles";
import { BrainIcon, ChevronDownIcon } from "lucide-react";
import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Response } from "../ai-response/ai-response";

type ReasoningContextValue = {
  isStreaming: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  duration: number;
  handleToggle: () => void;
};

const ReasoningContext = createContext<ReasoningContextValue | null>(null);

const useReasoning = () => {
  const context = useContext(ReasoningContext);
  if (!context) {
    throw new Error("Reasoning components must be used within Reasoning");
  }
  return context;
};

export type ReasoningProps = {
  isStreaming?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
};

const AUTO_CLOSE_DELAY = 1000;
const MS_IN_S = 1000;

export const Reasoning = memo(
  ({
    sx,
    isStreaming = false,
    open,
    defaultOpen = true,
    onOpenChange,
    duration: durationProp,
    children,
  }: ReasoningProps) => {
    const [isOpen, setIsOpenState] = useState(open ?? defaultOpen);
    const [duration, setDuration] = useState(durationProp ?? 0);
    const [hasAutoClosed, setHasAutoClosed] = useState(false);
    const [startTime, setStartTime] = useState<number | null>(null);

    const setIsOpen = useCallback(
      (value: boolean) => {
        setIsOpenState(value);
        onOpenChange?.(value);
      },
      [onOpenChange],
    );

    useEffect(() => {
      if (open !== undefined) {
        setIsOpenState(open);
      }
    }, [open]);

    useEffect(() => {
      if (durationProp !== undefined) {
        setDuration(durationProp);
      }
    }, [durationProp]);

    // Track duration when streaming starts and ends
    useEffect(() => {
      if (isStreaming) {
        if (startTime === null) {
          setStartTime(Date.now());
        }
      } else if (startTime !== null) {
        const newDuration = Math.ceil((Date.now() - startTime) / MS_IN_S);
        setDuration(newDuration);
        setStartTime(null);
        onOpenChange?.(isOpen);
      }
    }, [isStreaming, startTime, isOpen, onOpenChange]);

    // Auto-open when streaming starts, auto-close when streaming ends (once only)
    useEffect(() => {
      if (defaultOpen && !isStreaming && isOpen && !hasAutoClosed) {
        // Add a small delay before closing to allow user to see the content
        const timer = setTimeout(() => {
          setIsOpen(false);
          setHasAutoClosed(true);
        }, AUTO_CLOSE_DELAY);

        return () => clearTimeout(timer);
      }
    }, [isStreaming, isOpen, defaultOpen, setIsOpen, hasAutoClosed]);

    const handleToggle = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen, setIsOpen]);

    return (
      <ReasoningContext.Provider
        value={{ isStreaming, isOpen, setIsOpen, duration, handleToggle }}
      >
        <Box sx={{ mb: 2, ...sx }}>{children}</Box>
      </ReasoningContext.Provider>
    );
  },
);

export type ReasoningTriggerProps = {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};

const getThinkingMessage = (isStreaming: boolean, duration?: number) => {
  if (isStreaming || duration === 0) {
    return <p>Thinking...</p>;
  }
  if (duration === undefined) {
    return <p>Thought for a few seconds</p>;
  }
  return <p>Thought for {duration} seconds</p>;
};

export const ReasoningTrigger = memo(
  ({ sx, children }: ReasoningTriggerProps) => {
    const { isStreaming, isOpen, duration, handleToggle } = useReasoning();

    return (
      <Box
        component="button"
        onClick={handleToggle}
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
            <BrainIcon size={16} />
            {getThinkingMessage(isStreaming, duration)}
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
  },
);

export type ReasoningContentProps = {
  children: string;
  sx?: SxProps<Theme>;
};

export const ReasoningContent = memo(
  ({ sx, children }: ReasoningContentProps) => {
    const { isOpen } = useReasoning();

    return (
      <Collapse in={isOpen}>
        <Box
          sx={{
            mt: 2,
            fontSize: "0.875rem",
            color: "text.secondary",
            ...sx,
          }}
        >
          <Response sx={{ display: "grid", gap: 1 }}>{children}</Response>
        </Box>
      </Collapse>
    );
  },
);

Reasoning.displayName = "Reasoning";
ReasoningTrigger.displayName = "ReasoningTrigger";
ReasoningContent.displayName = "ReasoningContent";

"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ArrowDownIcon } from "lucide-react";
import { memo, type ComponentProps } from "react";
import { useCallback } from "react";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";

export type ConversationProps = ComponentProps<typeof StickToBottom>;

export const Conversation = memo(({ ...props }: ConversationProps) => (
  <StickToBottom
    style={{
      position: "relative",
      flex: 1,
      overflowY: "auto",
    }}
    initial="smooth"
    resize="smooth"
    role="log"
    {...props}
  />
));

Conversation.displayName = "Conversation";

export type ConversationContentProps = ComponentProps<
  typeof StickToBottom.Content
>;

export const ConversationContent = ({ ...props }: ConversationContentProps) => (
  <StickToBottom.Content
    style={{
      padding: "16px",
    }}
    {...props}
  />
);

export type ConversationEmptyStateProps = ComponentProps<typeof Box> & {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export const ConversationEmptyState = ({
  title = "No messages yet",
  description = "Start a conversation to see messages here",
  icon,
  children,
  sx,
  ...props
}: ConversationEmptyStateProps) => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      p: 8,
      textAlign: "center",
      ...sx,
    }}
    {...props}
  >
    {children ?? (
      <>
        {icon && <Box sx={{ color: "text.secondary" }}>{icon}</Box>}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          )}
        </Box>
      </>
    )}
  </Box>
);

export type ConversationScrollButtonProps = ComponentProps<typeof IconButton>;

export const ConversationScrollButton = ({
  sx,
  ...props
}: ConversationScrollButtonProps) => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  const handleScrollToBottom = useCallback(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    !isAtBottom && (
      <IconButton
        onClick={handleScrollToBottom}
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "background.paper",
          color: "text.primary",
          border: 1,
          borderColor: "divider",
          "&:hover": {
            bgcolor: "action.hover",
          },
          "&:active": {
            transform: "translateX(-50%) scale(0.95)",
          },
          ...sx,
        }}
        {...props}
      >
        <ArrowDownIcon className="size-4" />
      </IconButton>
    )
  );
};

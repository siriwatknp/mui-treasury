"use client";

import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import {
  Context,
  ContextCacheUsage,
  ContextContent,
  ContextContentBody,
  ContextContentFooter,
  ContextContentHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger,
} from "./ai-context";

export default function ContextDemo() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Context
      usedTokens={85000}
      maxTokens={200000}
      usage={{
        inputTokens: 45000,
        outputTokens: 25000,
        totalTokens: 70000,
        reasoningTokens: 10000,
        cachedInputTokens: 5000,
      }}
      modelId="vercel:anthropic/claude-3.5-sonnet"
    >
      <ContextTrigger onOpen={handleOpen} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ContextContent>
          <ContextContentHeader />
          <ContextContentBody>
            <Stack spacing={1}>
              <ContextInputUsage />
              <ContextOutputUsage />
              <ContextReasoningUsage />
              <ContextCacheUsage />
            </Stack>
          </ContextContentBody>
          <ContextContentFooter />
        </ContextContent>
      </Popover>
    </Context>
  );
}

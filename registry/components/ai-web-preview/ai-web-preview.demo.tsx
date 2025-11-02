"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  WebPreview,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
  WebPreviewBody,
  WebPreviewConsole,
} from "./ai-web-preview";
import { RefreshCwIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function AIWebPreviewDemo() {
  const consoleLogs = [
    {
      level: "log" as const,
      message: "Application started",
      timestamp: new Date(),
    },
    {
      level: "warn" as const,
      message: "Deprecated API usage detected",
      timestamp: new Date(),
    },
    {
      level: "error" as const,
      message: "Failed to fetch data",
      timestamp: new Date(),
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 896, mx: "auto", p: 4 }}>
      <Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: "text.secondary", mb: 1 }}
        >
          Web Preview Component
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          Embed and preview web content with navigation controls.
        </Typography>

        <Box sx={{ height: 500 }}>
          <WebPreview defaultUrl="https://example.com">
            <WebPreviewNavigation>
              <WebPreviewNavigationButton tooltip="Back">
                <ArrowLeftIcon size={16} />
              </WebPreviewNavigationButton>
              <WebPreviewNavigationButton tooltip="Forward">
                <ArrowRightIcon size={16} />
              </WebPreviewNavigationButton>
              <WebPreviewNavigationButton tooltip="Refresh">
                <RefreshCwIcon size={16} />
              </WebPreviewNavigationButton>
              <WebPreviewUrl sx={{ flex: 1 }} />
            </WebPreviewNavigation>
            <WebPreviewBody />
            <WebPreviewConsole logs={consoleLogs} />
          </WebPreview>
        </Box>
      </Box>
    </Box>
  );
}

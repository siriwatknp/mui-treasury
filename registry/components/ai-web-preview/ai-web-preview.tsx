"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import type { SxProps, Theme } from "@mui/material/styles";
import { ChevronDownIcon } from "lucide-react";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export type WebPreviewContextValue = {
  url: string;
  setUrl: (url: string) => void;
  consoleOpen: boolean;
  setConsoleOpen: (open: boolean) => void;
};

const WebPreviewContext = createContext<WebPreviewContextValue | null>(null);

const useWebPreview = () => {
  const context = useContext(WebPreviewContext);
  if (!context) {
    throw new Error("WebPreview components must be used within a WebPreview");
  }
  return context;
};

export type WebPreviewProps = {
  defaultUrl?: string;
  onUrlChange?: (url: string) => void;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const WebPreview = ({
  children,
  defaultUrl = "",
  onUrlChange,
  sx,
}: WebPreviewProps) => {
  const [url, setUrl] = useState(defaultUrl);
  const [consoleOpen, setConsoleOpen] = useState(false);

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
    onUrlChange?.(newUrl);
  };

  const contextValue: WebPreviewContextValue = {
    url,
    setUrl: handleUrlChange,
    consoleOpen,
    setConsoleOpen,
  };

  return (
    <WebPreviewContext.Provider value={contextValue}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          borderRadius: 2,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          ...sx,
        }}
      >
        {children}
      </Box>
    </WebPreviewContext.Provider>
  );
};

export type WebPreviewNavigationProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const WebPreviewNavigation = ({
  children,
  sx,
}: WebPreviewNavigationProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      borderBottom: 1,
      borderColor: "divider",
      p: 1,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export type WebPreviewNavigationButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const WebPreviewNavigationButton = ({
  onClick,
  disabled,
  tooltip,
  children,
  sx,
}: WebPreviewNavigationButtonProps) => {
  const button = (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      size="small"
      sx={{
        width: 32,
        height: 32,
        "&:hover": {
          color: "text.primary",
        },
        ...sx,
      }}
    >
      {children}
    </IconButton>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};

export type WebPreviewUrlProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

export const WebPreviewUrl = ({
  value,
  onChange,
  onKeyDown,
  sx,
}: WebPreviewUrlProps) => {
  const { url, setUrl } = useWebPreview();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      setUrl(target.value);
    }
    onKeyDown?.(event);
  };

  return (
    <TextField
      size="small"
      variant="outlined"
      placeholder="Enter URL..."
      value={value ?? url}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      sx={{
        flex: 1,
        "& .MuiInputBase-root": {
          height: 32,
          fontSize: "0.875rem",
        },
        ...sx,
      }}
    />
  );
};

export type WebPreviewBodyProps = {
  loading?: ReactNode;
  src?: string;
  sx?: SxProps<Theme>;
};

export const WebPreviewBody = ({ loading, src, sx }: WebPreviewBodyProps) => {
  const { url } = useWebPreview();

  return (
    <Box sx={{ flex: 1, ...sx }}>
      <Box
        component="iframe"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
        src={(src ?? url) || undefined}
        title="Preview"
        sx={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
      {loading}
    </Box>
  );
};

export type WebPreviewConsoleProps = {
  logs?: Array<{
    level: "log" | "warn" | "error";
    message: string;
    timestamp: Date;
  }>;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const WebPreviewConsole = ({
  logs = [],
  children,
  sx,
}: WebPreviewConsoleProps) => {
  const { consoleOpen, setConsoleOpen } = useWebPreview();

  return (
    <Box
      sx={{
        borderTop: 1,
        borderColor: "divider",
        fontFamily: "monospace",
        fontSize: "0.875rem",
        ...sx,
      }}
    >
      <Button
        fullWidth
        disableRipple
        variant="text"
        onClick={() => setConsoleOpen(!consoleOpen)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "left",
          fontWeight: 500,
          borderRadius: 0,
          px: 2,
          "&:hover, &:active": {
            bgcolor: "transparent",
          },
          "&:active": {
            transform: "none",
          },
        }}
        endIcon={
          <Box
            component={ChevronDownIcon}
            size={16}
            sx={{
              transition: "transform 0.2s",
              transform: consoleOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        }
      >
        Console
      </Button>
      <Collapse in={consoleOpen}>
        <Box sx={{ px: 2, pb: 2 }}>
          <Box
            sx={{
              maxHeight: 192,
              overflowY: "auto",
              "& > *:not(:last-child)": {
                mb: 0.5,
              },
            }}
          >
            {logs.length === 0 ? (
              <Typography sx={{ color: "text.secondary" }}>
                No console output
              </Typography>
            ) : (
              logs.map((log, index) => (
                <Box
                  key={`${log.timestamp.getTime()}-${index}`}
                  sx={{
                    fontSize: "0.75rem",
                    color:
                      log.level === "error"
                        ? "error.main"
                        : log.level === "warn"
                          ? "warning.main"
                          : "text.primary",
                  }}
                >
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    {log.timestamp.toLocaleTimeString()}
                  </Box>{" "}
                  {log.message}
                </Box>
              ))
            )}
            {children}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

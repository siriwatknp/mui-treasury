"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

export type SuggestionsProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const Suggestions = ({ children, sx }: SuggestionsProps) => (
  <Box
    sx={{
      width: "100%",
      overflowX: "auto",
      overflowY: "hidden",
      whiteSpace: "nowrap",
      "&::-webkit-scrollbar": {
        height: 8,
      },
      "&::-webkit-scrollbar-track": {
        bgcolor: "action.hover",
        borderRadius: 1,
      },
      "&::-webkit-scrollbar-thumb": {
        bgcolor: "action.disabled",
        borderRadius: 1,
        "&:hover": {
          bgcolor: "action.selected",
        },
      },
      ...sx,
    }}
  >
    <Box
      sx={{
        display: "flex",
        width: "max-content",
        flexWrap: "nowrap",
        alignItems: "center",
        gap: 1,
      }}
    >
      {children}
    </Box>
  </Box>
);

export type SuggestionProps = Omit<ButtonProps, "onClick"> & {
  suggestion: string;
  onClick?: (suggestion: string) => void;
};

export const Suggestion = ({
  suggestion,
  onClick,
  sx,
  variant = "outlined",
  size = "small",
  children,
  ...props
}: SuggestionProps) => {
  const handleClick = () => {
    onClick?.(suggestion);
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      type="button"
      variant={variant}
      sx={{
        borderRadius: 99,
        px: 2,
        textTransform: "none",
        whiteSpace: "nowrap",
        ...sx,
      }}
      {...props}
    >
      {children || suggestion}
    </Button>
  );
};

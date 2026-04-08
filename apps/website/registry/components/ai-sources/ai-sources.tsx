"use client";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { BookIcon, ChevronDownIcon } from "lucide-react";
import React, { memo, useState, type ReactNode } from "react";

export type SourcesProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const Sources = ({ children, sx }: SourcesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        mb: 2,
        color: "primary.main",
        fontSize: "0.75rem",
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
};

export type SourcesTriggerProps = {
  count: number;
  children?: ReactNode;
  sx?: SxProps<Theme>;
  isOpen?: boolean;
  onToggle?: () => void;
};

export const SourcesTrigger = ({
  count,
  children,
  sx,
  isOpen = false,
  onToggle,
}: SourcesTriggerProps) => (
  <Box
    component="button"
    onClick={onToggle}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      p: 0,
      ...sx,
    }}
  >
    {children ?? (
      <>
        <Typography component="span" sx={{ fontWeight: 500 }}>
          Used {count} sources
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

export type SourcesContentProps = {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  isOpen?: boolean;
};

export const SourcesContent = memo(
  ({ children, sx, isOpen = false }: SourcesContentProps) => (
    <Collapse in={isOpen}>
      <Box
        sx={{
          mt: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: "fit-content",
          ...sx,
        }}
      >
        {children}
      </Box>
    </Collapse>
  ),
);

SourcesContent.displayName = "SourcesContent";

export type SourceProps = {
  href?: string;
  title?: string;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export const Source = memo(({ href, title, children, sx }: SourceProps) => (
  <Link
    href={href}
    rel="noreferrer"
    target="_blank"
    underline="hover"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: "inherit",
      ...sx,
    }}
  >
    {children ?? (
      <>
        <BookIcon size={16} />
        <Typography component="span" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
      </>
    )}
  </Link>
));

Source.displayName = "Source";

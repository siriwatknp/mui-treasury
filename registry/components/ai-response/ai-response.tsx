"use client";

import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import { type ComponentProps, memo } from "react";
import { Streamdown } from "streamdown";

type ResponseProps = ComponentProps<typeof Streamdown> & {
  sx?: SxProps<Theme>;
};

export const Response = memo(
  ({ sx, ...props }: ResponseProps) => (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        "& > *:first-child": {
          mt: 0,
        },
        "& > *:last-child": {
          mb: 0,
        },
        '& [data-streamdown="ordered-list"], & [data-streamdown="unordered-list"]':
          {
            pl: 2,
          },
        ...sx,
      }}
    >
      <Streamdown {...props} />
    </Box>
  ),
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);

Response.displayName = "Response";

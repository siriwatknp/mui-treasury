import React from "react";
import { SxProps, Theme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import { getBaseGrey, randomBetween } from "./utils";

const createTypography =
  (generateSx: () => BoxProps["sx"]) =>
  ({ cached, sx = [], ...props }: { cached?: boolean } & BoxProps) => {
    const ref = React.useRef(generateSx());
    const resolvedSx: SxProps<Theme> =
      (cached ? ref.current : generateSx()) || [];
    return (
      <Box
        {...props}
        sx={[
          {
            height: 16,
            borderRadius: 1,
            bgcolor: getBaseGrey,
          },
          ...(Array.isArray(resolvedSx) ? resolvedSx : [resolvedSx]),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      />
    );
  };

export const H1 = createTypography(() => ({
  height: 40,
  width: randomBetween(12, 20, "ch"),
  maxWidth: "100%",
  mt: 3,
  mb: 1,
}));

export const Text = createTypography(() => ({
  height: 16,
  mt: 1.5,
  mb: 1.5,
  width: "100%",
  maxWidth: "100%",
}));

export const Word = createTypography(() => ({
  height: 16,
  width: randomBetween(8, 14, "ch"),
  maxWidth: "100%",
}));

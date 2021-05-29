import React from "react";

import Box, { BoxProps } from "@material-ui/core/Box";
import { getBaseGrey, randomBetween } from "./utils";

const createTypography = (generateSx: () => BoxProps["sx"]) => ({
  cached,
  ...props
}: { cached?: boolean } & BoxProps) => {
  const ref = React.useRef(generateSx());
  return (
    <Box
      {...props}
      sx={{
        height: 16,
        bgcolor: getBaseGrey,
        borderRadius: 1,
        ...(cached ? ref.current : generateSx()),
        ...props.sx,
      }}
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

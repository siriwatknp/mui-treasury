import React from "react";
import cx from "clsx";
import Box from "@mui/material/Box";
import { generateUtilityClasses } from "@mui/core";
import { checkFlexGap, halveGap } from "./utils";
export const flexClasses = generateUtilityClasses("Flex", [
  "row",
  "col",
  "item",
]);
export const Item = ({ className, noShrink, grow, ...props }) => (
  <Box
    className={cx(flexClasses.item, className)}
    minWidth="0px"
    {...(noShrink && { flexShrink: 0 })}
    {...props}
    {...(grow && { flexGrow: grow === "stretched" ? 100000 : 1 })}
  />
);
const resolveGap = (gap) => {
  return checkFlexGap()
    ? { gap }
    : {
        m: halveGap(gap, true),
        "& > *, & > .MuiBox-root": { p: halveGap(gap) },
      };
};
export const FlexRow = ({ className, gap, noWrap, stackPoint, ...props }) => {
  const resolvedGap = resolveGap(gap);
  return (
    <Item
      className={cx(flexClasses.row, className)}
      minWidth="0px"
      {...props}
      sx={{
        ...props.sx,
        display: "flex",
        flexDirection: "row",
        flexWrap: noWrap ? "nowrap" : "wrap",
        ...resolvedGap,
        "& > *, & > .MuiBox-root": {
          ...resolvedGap["& > *, & > .MuiBox-root"],
          ...(stackPoint && {
            minWidth: `clamp(0px, (${
              typeof stackPoint === "number" ? `${stackPoint}px` : stackPoint
            } + 1px - 100%) * 999, 100%)`,
          }),
        },
      }}
    />
  );
};
export const FlexCol = ({ className, gap, ...props }) => (
  <Item
    className={cx(flexClasses.col, className)}
    {...props}
    sx={{
      ...props.sx,
      display: "flex",
      flexDirection: "column",
      ...resolveGap(gap),
    }}
  />
);
export const Flex = {
  Row: FlexRow,
  Col: FlexCol,
  Item: Item,
};

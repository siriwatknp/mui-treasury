import React from "react";
import cx from "clsx";
import Box, { BoxProps } from "@material-ui/core/Box";
import { generateUtilityClasses } from "@material-ui/unstyled";
import { checkFlexGap, halveGap } from "./utils";

export const flexClasses = generateUtilityClasses("Flex", [
  "row",
  "col",
  "item",
]);

export interface ItemProps extends BoxProps {
  grow?: true | "stretched";
  noShrink?: true;
}

export const Item = ({ className, noShrink, grow, ...props }: ItemProps) => (
  <Box
    className={cx(flexClasses.item, className)}
    minWidth="0px"
    {...(noShrink && { flexShrink: 0 })}
    {...props}
    {...(grow && { flexGrow: grow === "stretched" ? 100000 : 1 })}
  />
);

const resolveGap = (gap: ItemProps["gap"]) => {
  return checkFlexGap()
    ? { gap }
    : {
        m: halveGap(gap, true),
        "& > *, & > .MuiBox-root": { p: halveGap(gap) },
      };
};

export interface FlexRowProps extends ItemProps {
  /**
   * the content width (not include padding and border) that will cause the layout to shift to stack
   */
  stackPoint?: string | number;
  noWrap?: true;
}

export const FlexRow = ({
  className,
  gap,
  noWrap,
  stackPoint,
  ...props
}: FlexRowProps) => {
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

export const FlexCol = ({ className, gap, ...props }: ItemProps) => (
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

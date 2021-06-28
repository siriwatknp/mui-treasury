import React, { PropsWithChildren } from "react";
import cx from "clsx";
import {
  styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import {
  SystemCssProperties,
  extendSxProp,
  SystemProps,
  SxProps,
} from "@material-ui/system";
import Box, { BoxProps } from "@material-ui/core/Box";
import { OverridableComponent } from "@mui-treasury/types";

import { getFlexUtilityClass, FlexClasses } from "./flexClasses";
import { checkFlexGap, halveGap } from "./utils";

export type FlexProps = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FlexClasses>;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};

export interface ItemProps extends BoxProps {
  grow?: true | "stretched";
  noShrink?: true;
}

export const Item = ({ noShrink, grow, ...props }: ItemProps) => {
  return (
    <Box
      minWidth="0px"
      {...(noShrink && { flexShrink: 0 })}
      {...props}
      {...(grow && { flexGrow: grow === "stretched" ? 100000 : 1 })}
    />
  );
};

const resolveGap = (gap: ItemProps["gap"]) => {
  return checkFlexGap()
    ? { gap }
    : {
        m: halveGap(gap, true),
        "& > *, & > .MuiBox-root": { p: halveGap(gap) },
      };
};

export interface FlexRowProps extends ItemProps {
  albatross?: string | number;
  noWrap?: true;
}

export const FlexRow = ({ gap, noWrap, albatross, ...props }: FlexRowProps) => {
  const resolvedGap = resolveGap(gap);
  return (
    <Item
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
          ...(albatross && {
            minWidth: `clamp(0px, (${
              typeof albatross === "number" ? `${albatross}px` : albatross
            } - 100%) * 999, 100%)`,
          }),
        },
      }}
    />
  );
};

export const FlexCol = ({ gap, ...props }: ItemProps) => {
  return (
    <Item
      {...props}
      sx={{
        ...props.sx,
        display: "flex",
        flexDirection: "column",
        ...resolveGap(gap),
      }}
    />
  );
};

// const ItemRoot = styled("div")(({ theme, styleProps }) => {
//   const gap = theme.spacing(styleProps.gap);
//   const isGapSupported = checkFlexGap();
//   return {
//     display: "flex",
//     flexDirection: styleProps.flexDirection,
//     gap,
//     ...(!isGapSupported && {
//       margin: `-calc(${gap} / 2)`,
//       "& > .Item": {
//         padding: `calc(${gap} / 2)`,
//       },
//     }),
//   };
// });

// interface FlexRowProps {
//   gap: SystemCssProperties["gap"];
//   children: React.ReactNode;
// }
// export const FlexRow = ({ gap: gapProp, children }: FlexRowProps) => {
//   return (
//     <ItemRoot styleProps={{ gap: gapProp, flexDirection: "row" }}>
//       {children}
//     </ItemRoot>
//   );
// };

// interface FlexColumnProps {
//   gap: "inherit" | number;
//   children: React.ReactNode;
// }
// export const FlexColumn = ({ gap: gapProp, children }: FlexColumnProps) => {
//   return (
//     <ItemRoot styleProps={{ gap: gapProp, flexDirection: "column" }}>
//       {children}
//     </ItemRoot>
//   );
// };

// export const Item = ({ children }) => {
//   return <div className="Item">{children}</div>;
// };

const useUtilityClasses = (styleProps: FlexProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ["root"],
  };
  return composeClasses(slots, getFlexUtilityClass, classes);
};

const FlexRoot = styled("div", {
  name: "JunFlex",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ styleProps: FlexProps }>({});

export const Flex: OverridableComponent<FlexProps> = React.forwardRef<
  any,
  PropsWithChildren<FlexProps>
>(function Flex({ children, ...inProps }, ref) {
  const props = useThemeProps<Theme, FlexProps, "JunFlex">({
    props: inProps,
    name: "JunFlex",
  });
  const { ...other } = props;

  const styleProps = {
    ...props,
  };

  const classes = useUtilityClasses(styleProps);

  return (
    <FlexRoot
      ref={ref}
      {...other}
      styleProps={styleProps}
      className={cx(classes.root, props.className)}
    >
      {children}
    </FlexRoot>
  );
});

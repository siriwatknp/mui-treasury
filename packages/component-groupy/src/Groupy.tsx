import React, { PropsWithChildren } from "react";
import cx from "clsx";
import { styled, useThemeProps, Theme } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/core";
import { SxProps } from "@mui/system";
import { OverridableComponent } from "@mui-treasury/types";
import { getGroupyUtilityClass, groupyClasses } from "./groupyClasses";

export type GroupyClassKey = keyof typeof groupyClasses;
export type GroupyClasses = Partial<typeof groupyClasses>;
export type GroupyProps = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: GroupyClasses;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;

  /**
   * orientation of the children
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical";
};

const useUtilityClasses = (ownerState: GroupyProps) => {
  const { classes, orientation } = ownerState;
  const slots = {
    root: ["root", orientation],
  };
  return composeClasses(
    slots,
    getGroupyUtilityClass,
    classes as Required<GroupyProps["classes"]>
  );
};

const GroupyRoot = styled("div", {
  name: "JunGroupy",
  slot: "Root",
  overridesResolver: (props: { ownerState: GroupyProps }, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      ownerState.orientation && styles[ownerState.orientation],
    ];
  },
})<{ ownerState: GroupyProps }>(({ ownerState }) => ({
  display: "flex",
  ...(ownerState.orientation === "horizontal" && {
    flexDirection: "row",
    // separate MuiInputBase into another scope
    "& > :not(:first-of-type):not(label + *):not(.MuiInputBase-root)": {
      marginLeft: -1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    // MuiInputBase
    "& > :first-of-type:not(label) + .MuiInputBase-root": {
      marginLeft: -1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    "& > *:not(:first-of-type)": {
      "& label + .MuiInputBase-root": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
    "& > :not(:last-child)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      "& .MuiInputBase-root": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  }),
  ...(ownerState.orientation === "vertical" && {
    flexDirection: "column",
    "& > :not(:first-of-type)": {
      marginTop: -1,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    "& > :not(:last-child)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  }),
}));

type GroupyComponent = OverridableComponent<PropsWithChildren<GroupyProps>>;

export const Groupy: GroupyComponent = React.forwardRef<
  any,
  PropsWithChildren<GroupyProps & { component?: React.ElementType }>
>(function Groupy({ children, component, ...inProps }, ref) {
  const props = useThemeProps<Theme, GroupyProps, "JunGroupy">({
    props: inProps,
    name: "JunGroupy",
  });
  const { orientation = "horizontal", ...other } = props;

  const ownerState = {
    ...props,
    orientation,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <GroupyRoot
      ref={ref}
      as={component}
      {...other}
      ownerState={ownerState}
      className={cx(classes.root, props.className)}
    >
      {children}
    </GroupyRoot>
  );
});

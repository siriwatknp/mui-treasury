import React from "react";
import cx from "clsx";
import { styled, useThemeProps } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/base";
import { useDayMonthYearInput } from "@mui-treasury/use-daymonthyear-input";
import { getDayMonthYearUtilityClass } from "./dayMonthYearClasses";
const DayMonthYearRoot = styled("div", {
  name: "JunDayMonthYear",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})({
  display: "flex",
  gap: "8px",
});
const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ["root"],
  };
  return composeClasses(slots, getDayMonthYearUtilityClass, classes);
};
export const DayMonthYear = React.forwardRef(function DayMonthYear(
  inProps,
  ref
) {
  const props = useThemeProps({
    props: inProps,
    name: "JunDayMonthYear",
  });
  const {
    className,
    children,
    defaultValue,
    value,
    onChange,
    onBlur,
    ...other
  } = props;
  const { getDayInputProps, getMonthInputProps, getYearInputProps } =
    useDayMonthYearInput({
      ...props,
      defaultValue,
      value,
      onChange,
      onBlur,
    });
  const inputMapping = {
    day: getDayInputProps,
    month: getMonthInputProps,
    year: getYearInputProps,
  };
  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);
  return (
    <DayMonthYearRoot
      ref={ref}
      className={cx(classes?.root, className)}
      ownerState={ownerState}
      {...other}
    >
      {children.map((child) => {
        // @ts-expect-error
        const getInputProps = inputMapping[child.props["data-slot"]];
        if (!getInputProps) {
          if (process.env.NODE_ENV !== "production") {
            console.error(
              'DayMonthYear: <Input data-slot="day | month | year" /> data-slot is missing or invalid'
            );
          }
          return null;
        }
        return React.cloneElement(child, {
          key: child.props["data-slot"],
          inputProps: getInputProps({
            ...child.props.inputProps,
          }),
        });
      })}
    </DayMonthYearRoot>
  );
});

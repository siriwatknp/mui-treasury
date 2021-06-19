import React from "react";
import cx from "clsx";
import {
  styled,
  unstable_useThemeProps as useThemeProps,
  Theme,
} from "@material-ui/core/styles";
import { unstable_composeClasses as composeClasses } from "@material-ui/unstyled";
import { OverridableComponent } from "@mui-treasury/types";
import { SxProps } from "@material-ui/system";
import {
  useDayMonthYearInput,
  UseDayMonthYearInputOptions,
} from "@mui-treasury/use-daymonthyear-input";
import {
  DayMonthYearClasses,
  getDayMonthYearUtilityClass,
} from "./dayMonthYearClasses";

export type DayMonthYearProps = {
  /**
   * className append to the root element
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: DayMonthYearClasses;

  children: Array<React.ReactElement>;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & UseDayMonthYearInputOptions &
  Omit<JSX.IntrinsicElements["div"], "ref" | "onChange">;

const DayMonthYearRoot = styled("div", {
  name: "JunDayMonthYear",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ styleProps: DayMonthYearProps }>({
  display: "flex",
  gap: "8px",
});

const useUtilityClasses = (styleProps: DayMonthYearProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ["root"],
  };
  return composeClasses(
    slots,
    getDayMonthYearUtilityClass,
    classes as unknown as Record<string, string>
  );
};

export const DayMonthYear: OverridableComponent<DayMonthYearProps> =
  React.forwardRef<HTMLDivElement, DayMonthYearProps>(function DayMonthYear(
    inProps,
    ref
  ) {
    const props = useThemeProps<Theme, DayMonthYearProps, "JunDayMonthYear">({
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
    const styleProps = { ...props };
    const classes = useUtilityClasses(styleProps);
    return (
      <DayMonthYearRoot
        ref={ref}
        className={cx(classes?.root, className)}
        styleProps={styleProps}
        {...other}
      >
        {children.map((child) => {
          // @ts-expect-error
          const getInputProps = inputMapping[child.props["data-slot"]];
          if (!getInputProps) {
            return null;
          }
          return React.cloneElement(child, {
            inputProps: getInputProps({
              ...child.props.inputProps,
            }),
          });
        })}
      </DayMonthYearRoot>
    );
  });

import React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import {
  useDayMonthYearInput,
  UseDayMonthYearInputOptions,
} from "../use-dayMonthYear-input";

export type DayMonthYearProps = {
  /**
   * className append to the root element
   */
  className?: string;

  children: Array<React.ReactElement>;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
} & UseDayMonthYearInputOptions &
  Omit<JSX.IntrinsicElements["div"], "ref" | "onChange">;

export const DayMonthYear = React.forwardRef<HTMLDivElement, DayMonthYearProps>(
  function DayMonthYear(props, ref) {
    const {
      className,
      children,
      defaultValue,
      value,
      onChange,
      onBlur,
      sx,
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
    return (
      <Box
        ref={ref}
        sx={[
          {
            display: "flex",
            gap: "8px",
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
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
      </Box>
    );
  }
);

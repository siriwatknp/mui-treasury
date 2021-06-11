import React from "react";
import {
  useInput,
  useTwoNumbersInput,
  useInputSiblings,
} from "@mui-treasury/use-input-siblings";

export interface DayMonthYear {
  day: string;
  month: string;
  year: string;
}

export interface UseDayMonthYearInputOptions {
  /**
   * initial value (don't use together with `value`)
   */
  defaultValue?: Partial<DayMonthYear>;
  /**
   * value for controlled input
   */
  value?: Partial<DayMonthYear>;
  /**
   * a callback function when input value changed
   */
  onChange?: (value: DayMonthYear) => void;
  /**
   * a callback function when all inputs are not focused
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputHanders {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const parseDayMonthYear = (value: Partial<DayMonthYear>) => {
  return {
    day: value.day || "",
    month: value.month || "",
    year: value.year || "",
  };
};

export const useDayMonthYearInput = (options?: UseDayMonthYearInputOptions) => {
  const { defaultValue, value } = options || {};
  const parsedValue = parseDayMonthYear(value || defaultValue || {});

  const day = useTwoNumbersInput({
    defaultValue: defaultValue?.day,
    value: parsedValue.day,
  });
  const month = useTwoNumbersInput({
    defaultValue: defaultValue?.month,
    value: parsedValue.month,
  });
  const year = useInput({
    maxLength: 4,
    defaultValue: defaultValue?.year,
    value: parsedValue.year,
    validator: (value) =>
      new RegExp(/^(^$|[1-2]|[1-2][0-9]{0,3})$/).test(value),
  });
  const [getDayInputProps, getMonthInputProps, getYearInputProps] =
    useInputSiblings({ siblings: [day, month, year], onBlur: options?.onBlur });

  React.useEffect(() => {
    if (
      parsedValue.day !== day.value ||
      parsedValue.month !== month.value ||
      parsedValue.year !== year.value
    ) {
      options?.onChange?.({
        day: day.value,
        month: month.value,
        year: year.value,
      });
    }
  }, [day.value, month.value, year.value]);

  return {
    day,
    month,
    year,
    getDayInputProps: (handlers?: Omit<InputHanders, "onKeyDown">) => ({
      pattern: "^(^$|[0-9]|0[0-9]|1[0-9]|2[0-9]|3[0-1])$",
      size: 2,
      maxLength: 2,
      type: "tel",
      ...getDayInputProps(handlers),
    }),
    getMonthInputProps: (handlers?: InputHanders) => ({
      pattern: "^(^$|[0-9]|0[1-9]|1[0-2])$",
      size: 2,
      maxLength: 2,
      type: "tel",
      ...getMonthInputProps(handlers),
    }),
    getYearInputProps: (handlers?: InputHanders) => ({
      pattern: "^(^$|[1-2]|[1-2][0-9]{0,3})$",
      size: 4,
      maxLength: 4,
      type: "tel",
      ...getYearInputProps(handlers),
    }),
  };
};

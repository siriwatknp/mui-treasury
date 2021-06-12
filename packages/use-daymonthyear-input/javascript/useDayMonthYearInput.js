import React from "react";
import {
  useInput,
  useTwoNumbersInput,
  useInputSiblings,
} from "@mui-treasury/use-input-siblings";
const parseDayMonthYear = (value) => {
  return {
    day: value.day || "",
    month: value.month || "",
    year: value.year || "",
  };
};
export const useDayMonthYearInput = (options) => {
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
    getDayInputProps: (handlers) => ({
      pattern: "^(^$|[0-9]|0[0-9]|1[0-9]|2[0-9]|3[0-1])$",
      size: 2,
      maxLength: 2,
      type: "tel",
      ...getDayInputProps(handlers),
    }),
    getMonthInputProps: (handlers) => ({
      pattern: "^(^$|[0-9]|0[1-9]|1[0-2])$",
      size: 2,
      maxLength: 2,
      type: "tel",
      ...getMonthInputProps(handlers),
    }),
    getYearInputProps: (handlers) => ({
      pattern: "^(^$|[1-2]|[1-2][0-9]{0,3})$",
      size: 4,
      maxLength: 4,
      type: "tel",
      ...getYearInputProps(handlers),
    }),
  };
};

import React from "react";
import {
  InputHanders,
  useInput,
  useInputSiblings,
  useIsFirstMount,
  useTwoNumbersInput,
} from "../use-input-siblings";

export interface DayMonthYear {
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
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
  onChange?: (value: DayMonthYear, meta: { invalid: boolean }) => void;
  /**
   * a callback function when all inputs are not focused
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const prependZero = (value: number | undefined) => {
  if (!value) return undefined;
  return value <= 9 ? `0${value}` : `${value}`;
};

const dayMonthYearValidator = (day?: string, month?: string, year?: string) => {
  return (
    Number(day) >= 1 &&
    Number(day) <= 31 &&
    Number(month) >= 1 &&
    Number(month) <= 12 &&
    Number(year) >= 1500 &&
    Number(year) <= 2999
  );
};

export const useDayMonthYearInput = (options?: UseDayMonthYearInputOptions) => {
  const { value } = options || {};
  const [defaultValue] = React.useState(options?.defaultValue);

  const day = useTwoNumbersInput({
    value: prependZero(value?.day || defaultValue?.day),
  });
  const month = useTwoNumbersInput({
    value: prependZero(value?.month || defaultValue?.month),
  });
  const year = useInput({
    maxLength: 4,
    value: prependZero(value?.year || defaultValue?.year),
  });
  const [getDayInputProps, getMonthInputProps, getYearInputProps] =
    useInputSiblings({ siblings: [day, month, year], onBlur: options?.onBlur });

  const isFirstMount = useIsFirstMount();

  React.useEffect(() => {
    if (!isFirstMount) {
      options?.onChange?.(
        {
          day: Number(day.value) || undefined,
          month: Number(month.value) || undefined,
          year: Number(year.value) || undefined,
        },
        {
          invalid: !dayMonthYearValidator(day.value, month.value, year.value),
        }
      );
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

import React from "react";
import { useSeparatorInput } from "../use-input-siblings";

export interface UseBirthdateInputOptions {
  /**
   * separator between number, 10/02/1999
   * @default "/"
   */
  separator?: string;
  /**
   * initial value (don't use together with `value`)
   */
  defaultValue?: string;
  /**
   * value for controlled input
   */
  value?: string;
  /**
   * a callback function when input value changed
   */
  onChange?: (value: string, meta: { invalid: boolean }) => void;
}
interface InputHanders {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

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

export const useBirthdateInput = (options: UseBirthdateInputOptions = {}) => {
  const { separator = "/" } = options;
  const result = useSeparatorInput({
    ...options,
    separator,
    maxLength: [2, 2, 4],
    validator: (value) => dayMonthYearValidator(...value.split(separator)),
  });
  return {
    ...result,
    getInputProps: (handlers?: InputHanders) => ({
      size: 10,
      pattern: "[0-9]{2}.[0-9]{2}.[0-9]{4}",
      inputMode: "numeric" as const,
      ...result.getInputProps(handlers),
    }),
  };
};

import React from "react";
import { useSeparatorInput } from "@mui-treasury/use-input-siblings";

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
  onChange?: (value: string) => void;
}
interface InputHanders {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const useBirthdateInput = (options: UseBirthdateInputOptions = {}) => {
  const { separator = "/" } = options;
  const result = useSeparatorInput({
    ...options,
    separator,
    maxLength: [2, 2, 4],
    validator: (value) =>
      new RegExp(/^\d+$/).test(value.replace(new RegExp(separator, "g"), "")), // last char must be number or separator
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

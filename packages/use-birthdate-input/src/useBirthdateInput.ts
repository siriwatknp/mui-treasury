import React from "react";

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
const someEqual = <T>(value: T, matches: Array<T>) =>
  matches.some((match) => value === match);

export const useBirthdateInput = (options?: UseBirthdateInputOptions) => {
  const { separator = "/", defaultValue } = options || {};
  const [value, setValue] = React.useState(defaultValue || "");
  const codeRef = React.useRef<string | undefined>();
  return {
    getInputProps: (handlers?: InputHanders) => ({
      maxLength: 10,
      size: 10,
      pattern: "[0-9]{2}.[0-9]{2}.[0-9]{4}",
      type: "tel",
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        handlers?.onChange?.(event);
        const inputValue = event.target.value;
        let newValue = inputValue;
        if (
          codeRef.current === "Backspace" &&
          someEqual(inputValue.length, [2, 3, 5, 6])
        ) {
          newValue = inputValue.slice(0, -1);
        } else {
          const latestChar = inputValue.substr(-1);
          if (
            !!latestChar &&
            latestChar !== separator &&
            !/\d/.test(latestChar)
          )
            return; // should be separator or number
          if (
            latestChar !== separator &&
            inputValue.length === 3 &&
            inputValue[2] !== separator
          ) {
            newValue = `${inputValue.substr(0, 2)}${separator}${inputValue[2]}`;
          } else if (
            latestChar !== separator &&
            inputValue.length === 6 &&
            inputValue[4] !== separator
          ) {
            newValue = `${inputValue.substr(0, 5)}${separator}${inputValue[5]}`;
          } else if (someEqual(inputValue.length, [2, 5])) {
            newValue = `${inputValue}${separator}`;
          }
        }
        setValue(newValue);
        options?.onChange?.(newValue);
      },
      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
        handlers?.onKeyDown?.(event);
        codeRef.current = event.code;
      },
    }),
  };
};

import React from "react";
import { InputHanders } from "./types";
import { useIsFirstMount } from "./useInput";

const someEqual = <T>(value: T, matches: Array<T>) =>
  matches.some((match) => value === match);
const getSeparatorChars = (maxLength: Array<number>) => {
  const chars: Array<number> = [];
  let count = 0;
  maxLength.forEach((num, index, array) => {
    count += num;
    if (index !== array.length - 1) {
      chars.push(count);
    }
    count += 1; // for separator
  });
  return chars;
};
const appendSeparator = (value: string, separatorIndexes: Array<number>) =>
  someEqual(value.length, separatorIndexes) ? `${value}/` : value;
export interface UseSeparatorInputOptions {
  /**
   * number of characters allowed for this input
   */
  maxLength: Array<number>;
  /**
   * separator between number, 10/02/1999
   * @default "/"
   */
  separator?: string;
  /**
   * If `true`, the input will be focused
   */
  autoFocus?: boolean;
  /**
   * initial value (don't use together with `value`)
   */
  defaultValue?: string;
  /**
   * value for controlled input
   */
  value?: string;
  /**
   * a function to validate the user input before setting the state
   */
  validator?: (value: string) => boolean;
  /**
   * a callback function when input value changed
   */
  onChange?: (value: string, meta: { invalid: boolean }) => void;
}
export const useSeparatorInput = (options: UseSeparatorInputOptions) => {
  const {
    autoFocus = false,
    defaultValue,
    value,
    maxLength,
    separator = "/",
    validator,
  } = options;
  const maxCharaters =
    maxLength.reduce((total, num) => total + num) + maxLength.length - 1;
  const separatorIndexes = getSeparatorChars(maxLength);

  const ref = React.useRef<HTMLInputElement | null>(null);
  const codeRef = React.useRef<string | undefined>();
  const [internalValue, setInternalValue] = React.useState(
    appendSeparator(
      (value || defaultValue || "").slice(0, maxCharaters),
      separatorIndexes
    )
  );

  React.useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  const isFirstMount = useIsFirstMount();

  React.useEffect(() => {
    if (!isFirstMount) {
      setInternalValue(value || "");
    }
  }, [value]);

  return {
    options,
    value: internalValue,
    setValue: setInternalValue,
    invalid: typeof validator === "function" && !validator(internalValue),
    getDOM: () => ref.current,
    getInputProps: (handlers?: InputHanders) => ({
      ref,
      value: internalValue,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        handlers?.onChange?.(event);
        const inputValue = event.target.value;
        let newValue = inputValue;
        if (
          codeRef.current === "Backspace" &&
          someEqual(inputValue.length, separatorIndexes)
        ) {
          newValue = inputValue.slice(0, -1);
        } else {
          if (someEqual(inputValue.length, separatorIndexes)) {
            newValue = `${inputValue}${separator}`;
          }
        }

        newValue = newValue.substr(0, maxCharaters);
        setInternalValue(newValue);
        options?.onChange?.(newValue, {
          invalid: typeof validator === "function" && !validator(newValue),
        });
      },
      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
        handlers?.onKeyDown?.(event);
        codeRef.current = event.code;
      },
    }),
  };
};

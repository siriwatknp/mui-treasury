import React, { useEffect } from "react";

export interface UseInputOptions {
  /**
   * number of characters allowed for this input
   */
  maxLength: number;
  autoFocus?: boolean;
  defaultValue?: string;
  value?: string;
  validator?: (value: string) => boolean;
  onChange?: (value: string) => void;
}
export const useInput = (options: UseInputOptions) => {
  const { autoFocus = false, value } = options;
  const ref = React.useRef<HTMLInputElement | null>(null);
  const [internalValue, setInternalValue] = React.useState(
    value || options.defaultValue || ""
  );

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    if (typeof value !== "undefined" && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value]);

  return {
    getDOM: () => ref.current,
    getInputProps: () => ({
      ref,
      value: internalValue,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (
          typeof options.validator !== "function" ||
          options.validator(inputValue)
        ) {
          setInternalValue(inputValue);
          options.onChange?.(inputValue);
        }
      },
      maxLength: options.maxLength,
    }),
  };
};

export const useInputSiblings = () => {};

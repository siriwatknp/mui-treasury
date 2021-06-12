import React from "react";
const someEqual = (value, matches) => matches.some((match) => value === match);
const getSeparatorChars = (maxLength) => {
  const chars = [];
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
const appendSeparator = (value, separatorIndexes) =>
  someEqual(value.length, separatorIndexes) ? `${value}/` : value;
export const useSeparatorInput = (options) => {
  const {
    autoFocus = false,
    value,
    maxLength,
    separator = "/",
    validator,
  } = options;
  const maxCharaters =
    maxLength.reduce((total, num) => total + num) + maxLength.length - 1;
  const separatorIndexes = getSeparatorChars(maxLength);
  const ref = React.useRef(null);
  const codeRef = React.useRef();
  const [internalValue, setInternalValue] = React.useState(
    appendSeparator(
      (value || options.defaultValue || "").slice(0, maxCharaters),
      separatorIndexes
    )
  );
  React.useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);
  return {
    options,
    value: internalValue,
    setValue: setInternalValue,
    getDOM: () => ref.current,
    getInputProps: (handlers) => ({
      ref,
      value: internalValue,
      onChange: (event) => {
        handlers?.onChange?.(event);
        const inputValue = event.target.value;
        let newValue = inputValue;
        if (
          codeRef.current === "Backspace" &&
          someEqual(inputValue.length, separatorIndexes)
        ) {
          newValue = inputValue.slice(0, -1);
        } else {
          const latestChar = inputValue.substr(-1);
          if (
            !!latestChar &&
            typeof validator === "function" &&
            !validator(inputValue)
          )
            return; // should be separator or number
          if (someEqual(inputValue.length, separatorIndexes)) {
            newValue = `${inputValue}${separator}`;
          }
        }
        if (newValue.length <= maxCharaters) {
          setInternalValue(newValue);
          options?.onChange?.(newValue);
        }
      },
      onKeyDown: (event) => {
        handlers?.onKeyDown?.(event);
        codeRef.current = event.code;
      },
    }),
  };
};

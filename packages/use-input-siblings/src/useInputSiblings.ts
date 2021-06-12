import React from "react";
import { InputHanders } from "./types";

interface Sibling {
  /**
   * a fn that return input props
   */
  getInputProps: () => Partial<JSX.IntrinsicElements["input"]>;
  /**
   * a fn that provide access to the HTMLInputElement
   */
  getDOM: () => HTMLInputElement | null;
  /**
   * options that contain `maxLength`
   */
  options: {
    maxLength: number | Array<number>;
    validator?: (value: string) => boolean;
  };
}
export interface UseInputSiblingsOptions {
  siblings: Array<Sibling>;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function getJumpLength(maxLength: Sibling["options"]["maxLength"]) {
  if (typeof maxLength === "number") return maxLength;
  return maxLength.reduce((total, num) => total + num) + maxLength.length - 1;
}
export const useInputSiblings = (options: UseInputSiblingsOptions) => {
  const { siblings } = options;
  const blurEvent =
    React.useRef<React.FocusEvent<HTMLInputElement> | undefined>(undefined);
  const [unFocused, setUnFocused] = React.useState(false);

  React.useEffect(() => {
    if (unFocused) {
      if (
        siblings.every((input) => {
          const DOM = input.getDOM();
          return DOM && DOM.ownerDocument.activeElement !== DOM;
        })
      ) {
        blurEvent.current && options?.onBlur?.(blurEvent.current);
      }
    }
  }, [unFocused]);

  return siblings.map((input, index) => {
    return function (handlers?: InputHanders) {
      const inputProps = input.getInputProps();
      return {
        ...inputProps,
        onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
          handlers?.onFocus?.(event);
          inputProps.onFocus?.(event);
          setUnFocused(false);
        },
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          handlers?.onChange?.(event);
          inputProps.onChange?.(event);
          const { value } = event.target;
          const jumpLength = getJumpLength(input.options.maxLength);
          let validator = input.options.validator || (() => true);
          if (value.length === jumpLength && validator(value)) {
            const nextDOM = siblings[index + 1]?.getDOM();
            if (nextDOM) {
              nextDOM.focus();
              nextDOM.setSelectionRange(0, nextDOM.value.length);
            }
          }
        },
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
          handlers?.onBlur?.(event);
          inputProps.onBlur?.(event);
          blurEvent.current = event;
          setUnFocused(true);
        },
        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
          handlers?.onKeyDown?.(event);
          inputProps.onKeyDown?.(event);
          if (index > 0) {
            const DOM = siblings[index].getDOM();
            if (event.code === "Backspace" && DOM && !DOM.value.length) {
              siblings[index - 1].getDOM()?.focus();
            }
          }
        },
      };
    };
  });
};

import React from "react";
function getJumpLength(maxLength) {
  if (typeof maxLength === "number") return maxLength;
  return maxLength.reduce((total, num) => total + num) + maxLength.length - 1;
}
export const useInputSiblings = (options) => {
  const { siblings } = options;
  const blurEvent = React.useRef(undefined);
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
    return function (handlers) {
      const inputProps = input.getInputProps();
      return {
        ...inputProps,
        onFocus: (event) => {
          handlers?.onFocus?.(event);
          inputProps.onFocus?.(event);
          setUnFocused(false);
        },
        onChange: (event) => {
          handlers?.onChange?.(event);
          inputProps.onChange?.(event);
          const { value } = event.target;
          const jumpLength = getJumpLength(input.options.maxLength);
          if (value.length === jumpLength) {
            const nextDOM = siblings[index + 1]?.getDOM();
            if (nextDOM) {
              nextDOM.focus();
              nextDOM.setSelectionRange(0, nextDOM.value.length);
            }
          }
        },
        onBlur: (event) => {
          handlers?.onBlur?.(event);
          inputProps.onBlur?.(event);
          blurEvent.current = event;
          setUnFocused(true);
        },
        onKeyDown: (event) => {
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

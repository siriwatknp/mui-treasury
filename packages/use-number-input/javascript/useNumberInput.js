import { useEffect, useRef, useState } from "react";
import { useSpinner } from "./useSpinner";
/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */
function normalizeEventKey(event) {
  const { key, keyCode } = event;
  const isArrowKey =
    keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;
  const eventKey = isArrowKey ? `Arrow${key}` : key;
  return eventKey;
}
export const minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
export const maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;
export const toNumber = (value) => {
  if (value === "") return undefined;
  const result = Number(value);
  return Number.isNaN(result) ? undefined : result;
};
export const numberToString = (value, precision = 0) => {
  const result = value?.toFixed(precision) ?? "";
  if (result === "NaN") return "";
  return result;
};
export const getStepFactor = (event, step, precision) => {
  let ratio = 1;
  if (event.metaKey || event.ctrlKey) {
    ratio = 0.1;
  }
  if (event.shiftKey) {
    ratio = 10;
  }
  let stepFactor = ratio * step;
  if (stepFactor < 1 / Math.pow(10, precision)) {
    stepFactor = step;
  }
  return stepFactor;
};
const noop = (value) => value;
export const useNumberBoundary = (options = {}) => {
  const {
    min = minSafeInteger,
    max = maxSafeInteger,
    defaultValue,
    value,
    precision = 0,
    step = 1,
    keepWithinRange = true,
    formatter = noop,
    parser = noop,
  } = options;
  const [interfaceValue, setInterfaceValue] = useState(
    formatter(numberToString(defaultValue, precision))
  );
  const numberValue = toNumber(parser(interfaceValue));
  useEffect(() => {
    if (defaultValue === undefined && value !== numberValue) {
      setInterfaceValue(formatter(numberToString(value, precision)));
    }
  }, [value]);
  function change(multiplier = 1, params = {}) {
    setInterfaceValue((current) => {
      const result =
        (toNumber(parser(current)) ?? 0) + multiplier * (params.step ?? step);
      const digits = params.precision ?? precision;
      if (keepWithinRange) {
        if (result > max) return max.toFixed(digits);
        if (result < min) return min.toFixed(digits);
      }
      return formatter(result.toFixed(digits));
    });
  }
  function increment(params = {}) {
    change(1, params);
  }
  function decrement(params = {}) {
    change(-1, params);
  }
  return {
    numberValue,
    interfaceValue,
    setInterfaceValue: (value) => {
      setInterfaceValue(formatter(value));
    },
    increment,
    decrement,
  };
};
function callAllHandlers(...handlers) {
  return (event) => {
    handlers.forEach((handler) => {
      if (typeof handler === "function") {
        handler(event);
      }
    });
  };
}
const useIsFirstMount = () => {
  const isFirstMount = useRef(true);
  useEffect(() => {
    isFirstMount.current = false;
  }, []);
  return isFirstMount.current;
};
function getError(value, min, max) {
  if (typeof value === "number") {
    if (value < min) return "below-min";
    if (value > max) return "exceed-max";
  }
  return null;
}
export const useNumberInput = (options = {}) => {
  const inputRef = useRef(null);
  const {
    min = minSafeInteger,
    max = maxSafeInteger,
    step = 1,
    precision = 0,
    focusInputOnChange = true,
    keepWithinRange = true,
    clampValueOnBlur = true,
    allowMouseWheel = false,
    parser = noop,
    formatter = noop,
    onChange,
  } = options;
  const {
    interfaceValue,
    setInterfaceValue,
    numberValue,
    increment,
    decrement,
  } = useNumberBoundary(options);
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      if (focusInputOnChange && !inputRef.current) {
        console.warn(`Cannot find inputRef, make sure to pass it to <input /> like this 👇

function NumberInput() {
  const { inputRef } = useNumberInput(options)
  return (
    <input ref={inputRef} />
  )
}
        `);
      }
    }
    function handler(event) {
      const isInputFocused = document.activeElement === inputRef.current;
      if (!allowMouseWheel || !isInputFocused) return;
      event.preventDefault();
      const stepFactor = getStepFactor(event, step, precision);
      const direction = Math.sign(event.deltaY);
      if (direction === -1) {
        increment({ step: stepFactor });
      } else if (direction === 1) {
        decrement({ step: stepFactor });
      }
    }
    document.addEventListener("wheel", handler);
    return () => {
      document.removeEventListener("wheel", handler);
    };
  }, [inputRef.current]);
  const isFirstMount = useIsFirstMount();
  useEffect(() => {
    if (!isFirstMount) {
      onChange?.(numberValue, {
        valueText: interfaceValue,
        error: getError(numberValue, min, max),
        eventType: "change",
      });
    }
  }, [interfaceValue]);
  const tempInterfaceValue = useRef(interfaceValue);
  const spinner = useSpinner(increment, decrement);
  const spinUp = (event) => {
    event.preventDefault();
    spinner.up({ step: getStepFactor(event, step, precision) });
    if (focusInputOnChange) inputRef.current?.focus();
  };
  const spinDown = (event) => {
    event.preventDefault();
    spinner.down({ step: getStepFactor(event, step, precision) });
    if (focusInputOnChange) inputRef.current?.focus();
  };
  const handleKeyDown = (event) => {
    const stepFactor = getStepFactor(event, step, precision);
    const keyMap = {
      ArrowUp: () => increment({ step: stepFactor }),
      ArrowDown: () => decrement({ step: stepFactor }),
    };
    const eventKey = normalizeEventKey(event);
    const action = keyMap[eventKey];
    if (action) {
      event.preventDefault();
      action(event);
    }
  };
  const handleChange = (event) => {
    tempInterfaceValue.current = interfaceValue;
    const result = parser(event.target.value);
    if (result.match(/^(-|\+)?(0|[1-9]\d*)?(\.)?(\d+)?$/)) {
      setInterfaceValue(result);
    }
  };
  const handleBlur = (event) => {
    const parsedValue = parser(event.target.value);
    if (parsedValue !== "") {
      const nextNum = Number(parsedValue);
      let result = "";
      if (Number.isNaN(nextNum)) {
        result = tempInterfaceValue.current;
      } else {
        result = nextNum.toFixed(precision);
        if (clampValueOnBlur) {
          if (nextNum > max) result = max.toFixed(precision);
          if (nextNum < min) result = min.toFixed(precision);
        }
      }
      setInterfaceValue(result);
      onChange?.(Number(result), {
        valueText: formatter(result),
        error: getError(Number(result), min, max),
        eventType: "blur",
      });
    } else {
      onChange?.(undefined, {
        valueText: "",
        error: null,
        eventType: "blur",
      });
    }
  };
  const incrementDisabled =
    keepWithinRange && typeof numberValue === "number" && numberValue >= max;
  const decrementDisabled =
    keepWithinRange && typeof numberValue === "number" && numberValue <= min;
  return {
    inputRef,
    getInputProps: (handlers) => ({
      pattern: "[0-9]*(.[0-9]+)?",
      role: "spinbutton",
      "aria-valuemin": min,
      "aria-valuemax": max,
      autoComplete: "off",
      autoCorrect: "off",
      "aria-valuetext": interfaceValue,
      "aria-valuenow": numberValue,
      value: interfaceValue,
      onChange: handleChange,
      onBlur: callAllHandlers(handleBlur, handlers?.onBlur),
      onKeyDown: callAllHandlers(handleKeyDown, handlers?.onKeyDown),
    }),
    getIncrementProps: (handlers) => ({
      tabIndex: -1,
      ...(typeof window !== "undefined" &&
      !!document.documentElement.ontouchstart
        ? {
            onTouchStart: callAllHandlers(spinUp, handlers?.onTouchStart),
          }
        : {
            onMouseDown: callAllHandlers(spinUp, handlers?.onMouseDown),
          }),
      onMouseUp: callAllHandlers(spinner.stop, handlers?.onMouseUp),
      onMouseLeave: callAllHandlers(spinner.stop, handlers?.onMouseLeave),
      onTouchEnd: callAllHandlers(spinner.stop, handlers?.onTouchEnd),
      disabled: incrementDisabled,
      "aria-disabled": incrementDisabled ? true : undefined,
    }),
    getDecrementProps: (handlers) => ({
      tabIndex: -1,
      ...(typeof window !== "undefined" &&
      !!document.documentElement.ontouchstart
        ? {
            onTouchStart: callAllHandlers(spinDown, handlers?.onTouchStart),
          }
        : {
            onMouseDown: callAllHandlers(spinDown, handlers?.onMouseDown),
          }),
      onMouseUp: callAllHandlers(spinner.stop, handlers?.onMouseUp),
      onMouseLeave: callAllHandlers(spinner.stop, handlers?.onMouseLeave),
      onTouchEnd: callAllHandlers(spinner.stop, handlers?.onTouchEnd),
      disabled: decrementDisabled,
      "aria-disabled": decrementDisabled ? true : undefined,
    }),
  };
};

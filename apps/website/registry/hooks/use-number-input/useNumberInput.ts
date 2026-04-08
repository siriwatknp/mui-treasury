import React, { useEffect, useRef, useState } from "react";
import { useSpinner } from "./useSpinner";

type EventKeys =
  | "ArrowDown"
  | "ArrowUp"
  | "ArrowLeft"
  | "ArrowRight"
  | "Enter"
  | "Space"
  | "Tab"
  | "Backspace"
  | "Control"
  | "Meta"
  | "Home"
  | "End"
  | "PageDown"
  | "PageUp"
  | "Delete"
  | "Escape"
  | " "
  | "Shift";

type EventKeyMap = Partial<Record<EventKeys, React.KeyboardEventHandler>>;

/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */
function normalizeEventKey(event: Pick<KeyboardEvent, "key" | "keyCode">) {
  const { key, keyCode } = event;

  const isArrowKey =
    keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;

  const eventKey = isArrowKey ? `Arrow${key}` : key;

  return eventKey as EventKeys;
}

export const minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
export const maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;

export interface BoundaryParams {
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
}

export interface SpinParams {
  precision?: number;
  step?: number;
}

export const toNumber = (value: string | undefined) => {
  if (value === "") return undefined;
  const result = Number(value);
  return Number.isNaN(result) ? undefined : result;
};

export const numberToString = (value: number | undefined, precision = 0) => {
  const result = value?.toFixed(precision) ?? "";
  if (result === "NaN") return "";
  return result;
};

export const getStepFactor = (
  event: Partial<{ metaKey: boolean; ctrlKey: boolean; shiftKey: boolean }>,
  step: number,
  precision: number
) => {
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

const noop = <T>(value: T) => value;

export const useNumberBoundary = (options: UseNumberInputOptions = {}) => {
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
  const [interfaceValue, setInterfaceValue] = useState<string>(
    formatter(numberToString(defaultValue, precision))
  );
  const numberValue = toNumber(parser(interfaceValue));

  useEffect(() => {
    if (defaultValue === undefined && value !== numberValue) {
      setInterfaceValue(formatter(numberToString(value, precision)));
    }
  }, [value]);

  function change(multiplier = 1, params: SpinParams = {}) {
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

  function increment(params: SpinParams = {}) {
    change(1, params);
  }

  function decrement(params: SpinParams = {}) {
    change(-1, params);
  }

  return {
    numberValue,
    interfaceValue,
    setInterfaceValue: (value: string) => {
      setInterfaceValue(formatter(value));
    },
    increment,
    decrement,
  };
};

export type NumberInputEventType = "change" | "blur";
export type NumberInputError = "exceed-max" | "below-min";
export type UseNumberInputOptions = {
  /**
   * If true, the input's value will change based on mouse wheel
   */
  allowMouseWheel?: boolean;
  /**
   * When user types number directly into the input.
   * This controls the value update when you blur out of the input.
   * - If true and the value is greater than max, the value will be reset to max
   * - Else, the value remains the same.
   * @default true
   */
  clampValueOnBlur?: boolean;
  /**
   * This controls the value update behavior in general.
   * - If true and you use the stepper or up/down arrow keys, the value will not exceed the max or go lower than min
   * - If false, the value will be allowed to go out of range.
   * @default true
   */
  keepWithinRange?: boolean;
  /**
   * If true, the input will be focused as you increment or decrement the value with the stepper
   * @default true
   */
  focusInputOnChange?: boolean;
  formatter?: (value: string) => string;
  parser?: (value: string) => string;
  /**
   * a callback function when input value changed
   */
  onChange?: (
    value: number | undefined,
    metadata: {
      error: NumberInputError | null;
      eventType?: NumberInputEventType;
      valueText?: string;
    }
  ) => void;
} & BoundaryParams &
  SpinParams;

interface InputHandlers {
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
interface ButtonHandlers {
  onTouchStart: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchEnd: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function callAllHandlers<T>(
  ...handlers: Array<undefined | ((event: T) => void)>
) {
  return (event: T) => {
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

function getError(
  value: number | undefined,
  min: number,
  max: number
): NumberInputError | null {
  if (typeof value === "number") {
    if (value < min) return "below-min";
    if (value > max) return "exceed-max";
  }
  return null;
}

export const useNumberInput = (options: UseNumberInputOptions = {}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
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
    function handler(event: WheelEvent) {
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
    // Use passive: false to allow preventDefault to work
    const element = inputRef.current;
    if (element && allowMouseWheel) {
      element.addEventListener("wheel", handler as EventListener, {
        passive: false,
      });
      return () => {
        element.removeEventListener("wheel", handler as EventListener);
      };
    }
  }, [
    allowMouseWheel,
    decrement,
    focusInputOnChange,
    increment,
    precision,
    step,
  ]);

  const isFirstMount = useIsFirstMount();
  useEffect(() => {
    if (!isFirstMount) {
      onChange?.(numberValue, {
        valueText: interfaceValue,
        error: getError(numberValue, min, max),
        eventType: "change",
      });
    }
  }, [interfaceValue, isFirstMount, max, min, numberValue, onChange]);

  const tempInterfaceValue = useRef(interfaceValue);
  const spinner = useSpinner(increment, decrement);

  const spinUp = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    spinner.up({ step: getStepFactor(event, step, precision) });
    if (focusInputOnChange) inputRef.current?.focus();
  };

  const spinDown = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    spinner.down({ step: getStepFactor(event, step, precision) });
    if (focusInputOnChange) inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const stepFactor = getStepFactor(event, step, precision);
    const keyMap: EventKeyMap = {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    tempInterfaceValue.current = interfaceValue;
    const result = parser(event.target.value);
    if (result.match(/^(-|\+)?(0|[1-9]\d*)?(\.)?(\d+)?$/)) {
      setInterfaceValue(result);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
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
    getInputProps: (handlers?: Partial<InputHandlers>) => ({
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
    getIncrementProps: (handlers?: Partial<ButtonHandlers>) => ({
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
    getDecrementProps: (handlers?: Partial<ButtonHandlers>) => ({
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

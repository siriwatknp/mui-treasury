import React from "react";

export interface DayMonthYear {
  day: string;
  month: string;
  year: string;
}

export interface UseDayMonthYearInputOptions {
  /**
   * initial value (don't use together with `value`)
   */
  defaultValue?: Partial<DayMonthYear>;
  /**
   * value for controlled input
   */
  value?: Partial<DayMonthYear>;
  /**
   * a callback function when input value changed
   */
  onChange?: (value: DayMonthYear) => void;
  /**
   * a callback function when all inputs are not focused
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputHanders {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const prependZero = (value?: string) => {
  if (!value) return "";
  return value.length === 1 ? `0${value}` : value;
};
const parseDayMonthYear = (value: Partial<DayMonthYear>) => {
  return {
    day: prependZero(value.day),
    month: prependZero(value.month),
    year: value.year || "",
  };
};

export const useDayMonthYearInput = (options?: UseDayMonthYearInputOptions) => {
  const { defaultValue, value } = options || {};
  const [state, setState] = React.useState(
    parseDayMonthYear(defaultValue || {})
  );
  const blurEvent =
    React.useRef<React.FocusEvent<HTMLInputElement> | undefined>(undefined);
  const [unFocused, setUnFocused] = React.useState(false);
  const dayRef = React.useRef<HTMLInputElement | null>(null);
  const monthRef = React.useRef<HTMLInputElement | null>(null);
  const yearRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    options?.onChange?.(state);
  }, [state]);

  React.useEffect(() => {
    if (value) {
      if (
        value?.day !== state.day ||
        value?.month !== state.month ||
        value?.year !== state.year
      ) {
        // always trust the external value
        setState(parseDayMonthYear(value || {}));
      }
    }
  }, [value?.day, value?.month, value?.year]);

  React.useEffect(() => {
    if (unFocused) {
      if (
        [dayRef.current, monthRef.current, yearRef.current].every((dom) => {
          return dom?.ownerDocument.activeElement !== dom;
        })
      ) {
        blurEvent.current && options?.onBlur?.(blurEvent.current);
      }
    }
  }, [unFocused]);

  return {
    dayRef,
    monthRef,
    yearRef,
    getDayInputProps: (handlers?: Omit<InputHanders, "onKeyDown">) => ({
      pattern: "^(^$|[0-9]|0[0-9]|1[0-9]|2[0-9]|3[0-1])$",
      size: 2,
      maxLength: 2,
      type: "tel",
      ref: dayRef,
      value: state.day,
      onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
        handlers?.onFocus?.(event);
        setUnFocused(false);
      },
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        handlers?.onChange?.(event);
        const { value } = event.target;
        if (
          new RegExp(/^(^$|[0-9]|0[0-9]|1[0-9]|2[0-9]|3[0-1])$/).test(value)
        ) {
          setState((currentState) => ({ ...currentState, day: value }));
        }
        if (value.length === 2) {
          monthRef.current?.focus();
          monthRef.current?.setSelectionRange(0, 2);
        }
      },
      onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        handlers?.onBlur?.(event);
        blurEvent.current = event;
        setUnFocused(true);
        setState((currentState) => ({
          ...currentState,
          day:
            currentState.day.length === 1
              ? `0${currentState.day}`
              : currentState.day,
        }));
      },
    }),
    getMonthInputProps: (handlers?: InputHanders) => ({
      pattern: "^(^$|[0-9]|0[1-9]|1[0-2])$",
      size: 2,
      maxLength: 2,
      type: "tel",
      ref: monthRef,
      value: state.month,
      onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
        handlers?.onFocus?.(event);
        setUnFocused(false);
      },
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        handlers?.onChange?.(event);
        const { value } = event.target;
        if (new RegExp(/^(^$|[0-9]|0[1-9]|1[0-2])$/).test(value)) {
          // allow only number
          setState((currentState) => ({ ...currentState, month: value }));
          if (value.length === 2) {
            yearRef.current?.focus();
            yearRef.current?.setSelectionRange(0, 4);
          }
        }
      },
      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
        handlers?.onKeyDown?.(event);
        // Note: `day: "10", month: ""`
        // keydown on Month trigger this fn, this event (Backspace) pass to dayRef
        // as a result `dat: "1"`
        if (event.code === "Backspace" && !state.month.length) {
          dayRef.current?.focus();
        }
      },
      onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        handlers?.onFocus?.(event);
        blurEvent.current = event;
        setUnFocused(true);
        setState((currentState) => ({
          ...currentState,
          month:
            currentState.month.length === 1
              ? `0${currentState.month}`
              : currentState.month,
        }));
      },
    }),
    getYearInputProps: (handlers?: InputHanders) => ({
      pattern: "^(^$|[1-2]|[1-2][0-9]{0,3})$",
      size: 4,
      maxLength: 4,
      type: "tel",
      ref: yearRef,
      value: state.year,
      onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
        handlers?.onFocus?.(event);
        setUnFocused(false);
      },
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        handlers?.onChange?.(event);
        const { value } = event.target;
        // year 1000-2999
        if (new RegExp(/^(^$|[1-2]|[1-2][0-9]{0,3})$/).test(value)) {
          setState((currentState) => ({ ...currentState, year: value }));
        }
      },
      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
        handlers?.onKeyDown?.(event);
        if (event.code === "Backspace" && !state.year.length) {
          monthRef.current?.focus();
        }
      },
      onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        handlers?.onBlur?.(event);
        blurEvent.current = event;
        setUnFocused(true);
      },
    }),
  };
};

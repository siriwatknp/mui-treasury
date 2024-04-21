import { Breakpoint } from "@mui/system";
import { createSxResult } from "../utils/createSxResult";
import { BREAKPOINT_KEYS } from "../utils/muiBreakpoints";
import { Responsive } from "../utils/types";

type Result = string | number | undefined;

export class ResponsiveBuilder<T> {
  readonly config: Responsive<T>;
  readonly hidden?: boolean | Breakpoint[];
  readonly breakpointKeys: Breakpoint[];

  constructor(params: {
    config: Responsive<T>;
    hidden?: boolean | Breakpoint[];
  }) {
    this.config = params.config;
    this.hidden = params.hidden;
    this.breakpointKeys = Object.keys(params.config) as Breakpoint[];
  }

  isHidden(breakpoint: Breakpoint) {
    if (!this.hidden) return false;
    if (typeof this.hidden === "boolean" && this.hidden) return true;
    return this.hidden.includes(breakpoint);
  }

  /**
   * use target as base breakpoints, the result will start from the minimum of target
   *          xs | sm | md | lg | xl
   *  target     | y  |    |  y |
   *   this   y  |    | y  |    |
   *  ===============================
   *  result     | y  | y  | y  |
   */
  mergeBreakpoints(target: Responsive<any> | Breakpoint[]) {
    let targetFound = false;
    const result: Breakpoint[] = [];
    const targetKeys = Array.isArray(target) ? target : Object.keys(target);
    const thisKeys = Object.keys(this.config);
    BREAKPOINT_KEYS.forEach((key) => {
      if (targetKeys.includes(key)) {
        targetFound = true;
        result.push(key);
      } else {
        if (thisKeys.includes(key) && targetFound) {
          result.push(key);
        }
      }
    });
    return result;
  }

  generateSxWithHidden<R extends Result = Result>(options: {
    assignValue: (
      breakpointConfig: T,
      bp: Breakpoint,
      lastResultVal: R | undefined
    ) => R | undefined;
    hiddenValue?: R;
    /**
     * if true, will calculate from xs
     */
    strict?: boolean;
  }) {
    const { config, hidden } = this;
    const hiddenValue = options.hiddenValue;

    if (hidden === true) {
      return hiddenValue !== undefined
        ? ({ xs: hiddenValue } as Responsive<R>)
        : {};
    }

    let candidate: T | undefined;
    return createSxResult<R>((bp, lastResultVal) => {
      candidate = config[bp] ?? candidate;
      if (
        options.strict &&
        lastResultVal === undefined &&
        candidate === undefined
      ) {
        // cannot find valid config and no result yet
        return hiddenValue;
      }
      if (candidate !== undefined) {
        const assignedValue = options.assignValue(candidate, bp, lastResultVal);
        const isHidden = Array.isArray(hidden) && hidden.includes(bp);
        return isHidden ? hiddenValue : assignedValue;
      }
      return undefined;
    });
  }

  generateSx<R extends any = Result>(
    getValue: (breakpointConfig: T, bp: Breakpoint) => R,
    initialValue?: R
  ) {
    return createSxResult((bp) => getValue(this.config[bp]!, bp), {
      breakpoints: this.breakpointKeys,
      initialValue,
    });
  }

  getSxDisplay(appearance: string) {
    return this.generateSxWithHidden({
      assignValue: () => appearance,
      hiddenValue: "none",
      strict: true,
    });
  }
}

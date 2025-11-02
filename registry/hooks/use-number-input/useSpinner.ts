/**
 * ======== CREDIT: Chakra UI ==========
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/number-input/src/use-spinner.ts
 */
import React, { useCallback, useRef, useState } from "react";

function canUseDOM(): boolean {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

const isBrowser = canUseDOM();

/**
 * useSafeLayoutEffect enables us to safely call `useLayoutEffect` on the browser
 * (for SSR reasons)
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser.
 *
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */
const useSafeLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

function useCallbackRef<T extends (...args: unknown[]) => unknown>(
  fn: T | undefined,
  deps: React.DependencyList = [],
): T {
  const ref = React.useRef(fn);

  useSafeLayoutEffect(() => {
    ref.current = fn;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(((...args) => ref.current?.(...args)) as T, deps);
}

function useInterval(callback: () => void, delay: number | null) {
  const fn = useCallbackRef(callback);

  React.useEffect(() => {
    let intervalId: number | null = null;
    const tick = () => fn();
    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn]);
}

function useUnmountEffect(fn: () => void, deps: unknown[] = []) {
  return React.useEffect(
    () => () => fn(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
}

/**
 * When click and hold on a button - the speed of auto changing the value.
 */
const CONTINUOUS_CHANGE_INTERVAL = 50;

/**
 * When click and hold on a button - the delay before auto changing the value.
 */
const CONTINUOUS_CHANGE_DELAY = 300;

type Action = "increment" | "decrement";

/**
 * React hook used in the number input to spin its
 * value on long press of the spin buttons
 *
 * @param increment the function to increment
 * @param decrement the function to decrement
 */
export function useSpinner<T>(
  increment: (params?: T) => void,
  decrement: (params?: T) => void,
) {
  /**
   * To keep incrementing/decrementing on press, we call that `spinning`
   */
  const [isSpinning, setIsSpinning] = useState(false);

  // This state keeps track of the action ("increment" or "decrement")
  const [action, setAction] = useState<Action | null>(null);

  // To increment the value the first time you mousedown, we call that `runOnce`
  const [runOnce, setRunOnce] = useState(true);

  const paramsRef = useRef<T | undefined>(undefined);

  // Store the timeout instance id in a ref, so we can clear the timeout later
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Clears the timeout from memory
  const removeTimeout = () => clearTimeout(timeoutRef.current);

  /**
   * useInterval hook provides a performant way to
   * update the state value at specific interval
   */
  useInterval(
    () => {
      if (action === "increment") {
        increment(paramsRef.current);
      }
      if (action === "decrement") {
        decrement(paramsRef.current);
      }
    },
    isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null,
  );

  // Function to activate the spinning and increment the value
  const up = useCallback(
    (params?: T) => {
      paramsRef.current = params;
      // increment the first fime
      if (runOnce) {
        increment(params);
      }

      // after a delay, keep incrementing at interval ("spinning up")
      timeoutRef.current = setTimeout(() => {
        setRunOnce(false);
        setIsSpinning(true);
        setAction("increment");
      }, CONTINUOUS_CHANGE_DELAY);
    },
    [increment, runOnce],
  );

  // Function to activate the spinning and increment the value
  const down = useCallback(
    (params?: T) => {
      paramsRef.current = params;
      // decrement the first fime
      if (runOnce) {
        decrement(paramsRef.current);
      }

      // after a delay, keep decrementing at interval ("spinning down")
      timeoutRef.current = setTimeout(() => {
        setRunOnce(false);
        setIsSpinning(true);
        setAction("decrement");
      }, CONTINUOUS_CHANGE_DELAY);
    },
    [decrement, runOnce],
  );

  // Function to stop spinng (useful for mouseup, keyup handlers)
  const stop = useCallback(() => {
    paramsRef.current = undefined;
    setRunOnce(true);
    setIsSpinning(false);
    removeTimeout();
  }, []);

  /**
   * If the component unmounts while spinning,
   * let's clear the timeout as well
   */
  useUnmountEffect(removeTimeout);

  return { up, down, stop };
}

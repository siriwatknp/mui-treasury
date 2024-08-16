import React from "react";
import { Button } from "@storybook/components";
import { CloseIcon } from "@storybook/icons";
import { useGlobals, useStorybookState } from "@storybook/manager-api";

const PARAM_KEY = "blockUsage";

function usePrevious<T>(value: T) {
  const ref = React.useRef<T>(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const BlockUsage = React.memo(function BlockUsage() {
  const { path } = useStorybookState();
  const prevPath = usePrevious(path);
  const [globals, updateGlobals] = useGlobals();

  const isActive = [true, "true"].includes(globals[PARAM_KEY]);

  const openUsage = React.useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);

  React.useEffect(() => {
    if (path !== prevPath && isActive) {
      updateGlobals({
        [PARAM_KEY]: false,
      });
    }
  }, [path, isActive]);

  return (
    <Button
      key="block-usage/toolbar"
      title="See usage"
      active={isActive}
      onClick={openUsage}
      style={{
        boxShadow: isActive ? "#029CFD 0 0 0 1px inset" : undefined,
        minWidth: 72,
      }}
    >
      {isActive && ((<CloseIcon />) as any)}
      {isActive ? "Close" : "See code"}
    </Button>
  );
});

import React from "react";
import { Button } from "@storybook/components";
import { CloseIcon } from "@storybook/icons";
import { useGlobals } from "@storybook/manager-api";

const PARAM_KEY = "blockUsage";

export const BlockUsage = React.memo(function BlockUsage() {
  const [globals, updateGlobals] = useGlobals();

  const isActive = [true, "true"].includes(globals[PARAM_KEY]);

  const openUsage = React.useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);

  return (
    <Button
      key="block-usage/toolbar"
      title="See usage"
      active={isActive}
      onClick={openUsage}
      style={{ boxShadow: isActive ? "#029CFD 0 0 0 1px inset" : undefined }}
    >
      {isActive && ((<CloseIcon />) as any)}
      {isActive ? "Close" : "See usage"}
    </Button>
  );
});

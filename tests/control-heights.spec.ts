import { test, expect } from "@playwright/test";

import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  SWITCH_SIZES,
  SWITCH_TOUCH_SIZES,
} from "../registry/themes/mui-treasury/scales";

/**
 * Control Heights Tests
 *
 * Verifies that MUI components using the CONTROL_HEIGHTS scale system
 * render at the correct heights for both desktop and touch viewports.
 */

function getExpectedHeight(
  size: "sm" | "md" | "lg",
  projectName: string,
): number {
  if (projectName === "touch") {
    return CONTROL_TOUCH_HEIGHTS[size];
  }
  return CONTROL_HEIGHTS[size];
}

function getExpectedSwitchDimensions(
  size: "sm" | "md" | "lg",
  projectName: string,
): { height: number; width: number } {
  if (projectName === "touch") {
    return SWITCH_TOUCH_SIZES[size];
  }
  return SWITCH_SIZES[size];
}

test.beforeEach(async ({ page }) => {
  await page.goto("/test/control-heights");
});

// =============================================================================
// Button - Contained
// =============================================================================
test.describe("Button - Contained", () => {
  test("sm height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-contained-sm");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-contained-md");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-contained-lg");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Button - Outlined
// =============================================================================
test.describe("Button - Outlined", () => {
  test("sm height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-outlined-sm");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-outlined-md");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-outlined-lg");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Button - Text
// =============================================================================
test.describe("Button - Text", () => {
  test("sm height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-text-sm");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-text-md");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const button = page.getByTestId("button-text-lg");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// ToggleButton
// =============================================================================
test.describe("ToggleButton", () => {
  test("sm height", async ({ page }, testInfo) => {
    const button = page.getByTestId("toggle-button-sm");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const button = page.getByTestId("toggle-button-md");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const button = page.getByTestId("toggle-button-lg");
    const box = await button.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// TextField - Outlined
// =============================================================================
test.describe("TextField - Outlined", () => {
  test("sm height", async ({ page }, testInfo) => {
    const input = page.getByTestId("textfield-outlined-sm");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const input = page.getByTestId("textfield-outlined-md");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const input = page.getByTestId("textfield-outlined-lg");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Select - Outlined
// =============================================================================
test.describe("Select - Outlined", () => {
  test("sm height", async ({ page }, testInfo) => {
    const select = page.getByTestId("select-outlined-sm");
    const box = await select.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const select = page.getByTestId("select-outlined-md");
    const box = await select.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const select = page.getByTestId("select-outlined-lg");
    const box = await select.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Autocomplete - Outlined
// =============================================================================
test.describe("Autocomplete - Outlined", () => {
  test("sm height", async ({ page }, testInfo) => {
    const input = page.getByTestId("autocomplete-outlined-sm");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const input = page.getByTestId("autocomplete-outlined-md");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const input = page.getByTestId("autocomplete-outlined-lg");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Chip - Filled
// =============================================================================
test.describe("Chip - Filled", () => {
  test("sm height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-sm");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(testInfo.project.name === "touch" ? 26 : 23);
  });

  test("md height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-md");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(testInfo.project.name === "touch" ? 32 : 25);
  });

  test("lg height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-lg");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(testInfo.project.name === "touch" ? 34 : 29);
  });
});

// =============================================================================
// Chip - Outlined
// =============================================================================
test.describe("Chip - Outlined", () => {
  test("sm height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-outlined-sm");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(testInfo.project.name === "touch" ? 26 : 23);
  });

  test("md height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-outlined-md");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(testInfo.project.name === "touch" ? 32 : 25);
  });

  test("lg height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-outlined-lg");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(testInfo.project.name === "touch" ? 34 : 29);
  });
});

// =============================================================================
// Checkbox
// =============================================================================
test.describe("Checkbox", () => {
  test("sm height", async ({ page }, testInfo) => {
    const checkbox = page.getByTestId("checkbox-sm");
    const box = await checkbox.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const checkbox = page.getByTestId("checkbox-md");
    const box = await checkbox.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const checkbox = page.getByTestId("checkbox-lg");
    const box = await checkbox.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Radio
// =============================================================================
test.describe("Radio", () => {
  test("sm height", async ({ page }, testInfo) => {
    const radio = page.getByTestId("radio-sm");
    const box = await radio.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const radio = page.getByTestId("radio-md");
    const box = await radio.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const radio = page.getByTestId("radio-lg");
    const box = await radio.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Switch (uses separate scale)
// =============================================================================
test.describe("Switch", () => {
  test("sm dimensions", async ({ page }, testInfo) => {
    const switchEl = page.getByTestId("switch-sm");
    const box = await switchEl.boundingBox();
    const expected = getExpectedSwitchDimensions("sm", testInfo.project.name);
    expect(box?.height).toBe(expected.height);
    expect(box?.width).toBe(expected.width);
  });

  test("md dimensions", async ({ page }, testInfo) => {
    const switchEl = page.getByTestId("switch-md");
    const box = await switchEl.boundingBox();
    const expected = getExpectedSwitchDimensions("md", testInfo.project.name);
    expect(box?.height).toBe(expected.height);
    expect(box?.width).toBe(expected.width);
  });

  test("lg dimensions", async ({ page }, testInfo) => {
    const switchEl = page.getByTestId("switch-lg");
    const box = await switchEl.boundingBox();
    const expected = getExpectedSwitchDimensions("lg", testInfo.project.name);
    expect(box?.height).toBe(expected.height);
    expect(box?.width).toBe(expected.width);
  });
});

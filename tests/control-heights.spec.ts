import { test, expect } from "@playwright/test";

/**
 * Control Heights Tests
 *
 * Verifies that MUI components using the CONTROL_HEIGHTS scale system
 * render at the correct heights for both desktop and touch viewports.
 *
 * Expected heights from scales.ts:
 * - Desktop (>768px): sm=32, md=36, lg=42
 * - Touch (<=768px): sm=34, md=40, lg=48
 *
 * Switch uses separate scale:
 * - Desktop: sm={h:22,w:36}, md={h:28,w:44}
 * - Touch: sm={h:28,w:44}, md={h:34,w:56}
 */

const CONTROL_HEIGHTS = {
  sm: 32,
  md: 36,
  lg: 42,
};

const CONTROL_TOUCH_HEIGHTS = {
  sm: 34,
  md: 40,
  lg: 48,
};

const SWITCH_SIZES = {
  sm: { height: 22, width: 36 },
  md: { height: 28, width: 44 },
};

const SWITCH_TOUCH_SIZES = {
  sm: { height: 28, width: 44 },
  md: { height: 34, width: 56 },
};

function getExpectedHeight(
  size: "sm" | "md" | "lg",
  projectName: string
): number {
  if (projectName === "touch") {
    return CONTROL_TOUCH_HEIGHTS[size];
  }
  return CONTROL_HEIGHTS[size];
}

function getExpectedSwitchDimensions(
  size: "sm" | "md",
  projectName: string
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
    const input = page
      .getByTestId("textfield-outlined-sm")
      .locator(".MuiInputBase-root");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const input = page
      .getByTestId("textfield-outlined-md")
      .locator(".MuiInputBase-root");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const input = page
      .getByTestId("textfield-outlined-lg")
      .locator(".MuiInputBase-root");
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
    const input = page
      .getByTestId("autocomplete-outlined-sm")
      .locator(".MuiInputBase-root");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const input = page
      .getByTestId("autocomplete-outlined-md")
      .locator(".MuiInputBase-root");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const input = page
      .getByTestId("autocomplete-outlined-lg")
      .locator(".MuiInputBase-root");
    const box = await input.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
  });
});

// =============================================================================
// Chip
// =============================================================================
test.describe("Chip", () => {
  test("sm height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-sm");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("sm", testInfo.project.name));
  });

  test("md height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-md");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("md", testInfo.project.name));
  });

  test("lg height", async ({ page }, testInfo) => {
    const chip = page.getByTestId("chip-lg");
    const box = await chip.boundingBox();
    expect(box?.height).toBe(getExpectedHeight("lg", testInfo.project.name));
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
});

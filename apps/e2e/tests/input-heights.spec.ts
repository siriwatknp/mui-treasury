import { expect, test } from '@playwright/test';

import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
} from '../../website/registry/themes/mui-treasury/scales';

function getExpectedHeight(
  size: 'sm' | 'md' | 'lg',
  projectName: string,
): number {
  if (projectName === 'touch') {
    return CONTROL_TOUCH_HEIGHTS[size];
  }
  return CONTROL_HEIGHTS[size];
}

// Height is measured on the inner `.MuiInputBase-root`, not the wrapper, because
// the theme renders the outlined label above the field — the wrapper is taller.
test.beforeEach(async ({ page }) => {
  await page.goto('/test/input-heights');
});

// =============================================================================
// TextField - base
// =============================================================================
test.describe('TextField - base', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-base-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-base-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-base-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// TextField - label
// =============================================================================
test.describe('TextField - label', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-label-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-label-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-label-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// TextField - start adornment
// =============================================================================
test.describe('TextField - start adornment', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-start-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-start-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-start-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// TextField - end adornment
// =============================================================================
test.describe('TextField - end adornment', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-end-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-end-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('tf-end-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// TextField - multiline
// =============================================================================
test.describe('TextField - multiline', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('tf-multiline-sm')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('tf-multiline-md')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('tf-multiline-lg')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// OutlinedInput - base
// =============================================================================
test.describe('OutlinedInput - base', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-base-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-base-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-base-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// OutlinedInput - start adornment
// =============================================================================
test.describe('OutlinedInput - start adornment', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-start-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-start-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-start-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// OutlinedInput - end adornment
// =============================================================================
test.describe('OutlinedInput - end adornment', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-end-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-end-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('oi-end-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// OutlinedInput - multiline
// =============================================================================
test.describe('OutlinedInput - multiline', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('oi-multiline-sm')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('oi-multiline-md')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('oi-multiline-lg')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// Select - base
// =============================================================================
test.describe('Select - base', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-base-sm')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-base-md')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-base-lg')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// Select - label
// =============================================================================
test.describe('Select - label', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-label-sm')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-label-md')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-label-lg')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// Select - start adornment
// =============================================================================
test.describe('Select - start adornment', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-start-sm')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-start-md')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page
      .getByTestId('select-start-lg')
      .locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// Autocomplete - base
// =============================================================================
test.describe('Autocomplete - base', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('ac-base-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('ac-base-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('ac-base-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

// =============================================================================
// Autocomplete - label
// =============================================================================
test.describe('Autocomplete - label', () => {
  test('sm height', async ({ page }, testInfo) => {
    const root = page.getByTestId('ac-label-sm').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('sm', testInfo.project.name));
  });

  test('md height', async ({ page }, testInfo) => {
    const root = page.getByTestId('ac-label-md').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('md', testInfo.project.name));
  });

  test('lg height', async ({ page }, testInfo) => {
    const root = page.getByTestId('ac-label-lg').locator('.MuiInputBase-root');
    const box = await root.boundingBox();
    expect(box?.height).toBe(getExpectedHeight('lg', testInfo.project.name));
  });
});

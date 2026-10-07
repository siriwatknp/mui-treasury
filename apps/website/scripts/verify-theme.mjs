import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  SWITCH_SIZES,
  SWITCH_TOUCH_SIZES,
} from '../registry/themes/mui-treasury/scales.ts';

const WEBSITE = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const MUI = path.resolve(WEBSITE, '../../packages/mui-cli/bin/mui.mjs');
const THEME = 'registry/themes/mui-treasury/theme.tsx';
const FONT = '@fontsource-variable/geist';
const DESKTOP = '@>=769';
const TOUCH = '@<769';
const SIZES = { sm: 'small', md: 'medium', lg: 'large' };
const CHIP_HEIGHTS = { sm: 23, md: 25, lg: 29 };
const CHIP_TOUCH_HEIGHTS = { sm: 26, md: 32, lg: 34 };

const controls = [
  { component: 'Button', variants: ['contained', 'outlined', 'text'] },
  { component: 'ToggleButton' },
  { component: 'TextField', slot: 'InputBase.root' },
  { component: 'Select', slot: 'InputBase.root' },
  { component: 'Autocomplete', slot: 'InputBase.root' },
  { component: 'Checkbox' },
  { component: 'Radio' },
  {
    component: 'Chip',
    variants: ['filled', 'outlined'],
    extra: 'label=Chip',
    heights: CHIP_HEIGHTS,
    touchHeights: CHIP_TOUCH_HEIGHTS,
  },
];

const calls = [];
for (const [size, prop] of Object.entries(SIZES)) {
  for (const {
    component,
    variants = [null],
    slot = 'root',
    extra,
    heights = CONTROL_HEIGHTS,
    touchHeights = CONTROL_TOUCH_HEIGHTS,
  } of controls) {
    calls.push({
      component,
      props: variants.map((v) =>
        [v && `variant=${v}`, `size=${prop}`, extra].filter(Boolean).join(','),
      ),
      expect: [
        `${DESKTOP}:${slot}.box.height=${heights[size]}px`,
        `${TOUCH}:${slot}.box.height=${touchHeights[size]}px`,
      ],
    });
  }
  calls.push({
    component: 'Switch',
    props: [`size=${prop}`],
    expect: [
      `${DESKTOP}:root.box.height=${SWITCH_SIZES[size].height}px`,
      `${DESKTOP}:root.box.width=${SWITCH_SIZES[size].width}px`,
      `${TOUCH}:root.box.height=${SWITCH_TOUCH_SIZES[size].height}px`,
      `${TOUCH}:root.box.width=${SWITCH_TOUCH_SIZES[size].width}px`,
    ],
  });
}

let failed = 0;
for (const call of calls) {
  const args = [
    MUI,
    'verify',
    call.component,
    '--theme',
    THEME,
    '--font',
    FONT,
    '--width',
    '600,1280',
    ...call.props.flatMap((p) => ['--props', p]),
    ...call.expect.flatMap((e) => ['--expect', e]),
  ];
  const { status } = spawnSync(process.execPath, args, {
    cwd: WEBSITE,
    stdio: 'inherit',
  });
  if (status !== 0) {
    failed += 1;
  }
}
console.log(
  `\n${calls.length - failed}/${calls.length} control size checks pass`,
);
process.exitCode = failed ? 1 : 0;

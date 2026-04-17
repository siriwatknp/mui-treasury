'use client';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';

import { colors } from './colors';
import { alertTheme } from './components/alert';
import { autocompleteTheme } from './components/autocomplete';
import { avatarTheme } from './components/avatar';
import { buttonTheme } from './components/button';
import { cardTheme } from './components/card';
import { chipTheme } from './components/chip';
import { controlsTheme } from './components/controls';
import { dataGridTheme } from './components/data-grid';
import { datePickerTheme } from './components/date-picker';
import { dialogTheme } from './components/dialog';
import { layoutTheme } from './components/layout';
import { linkTheme } from './components/link';
import { listTheme } from './components/list';
import { menuTheme } from './components/menu';
import { selectTheme } from './components/select';
import { svgIconTheme } from './components/svg-icon';
import { tableTheme } from './components/table';
import { textFieldTheme } from './components/text-field';
import { treeViewTheme } from './components/tree-view';
import { shadows } from './shadows';
import { typography, typographyTheme } from './typography';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: colors,
  shape: {
    borderRadius: 8,
  },
  components: {
    ...buttonTheme,
    ...textFieldTheme,
    ...selectTheme,
    ...menuTheme,
    ...autocompleteTheme,
    ...chipTheme,
    ...avatarTheme,
    ...tableTheme,
    ...cardTheme,
    ...dialogTheme,
    ...datePickerTheme,
    ...svgIconTheme,
    ...dataGridTheme,
    ...alertTheme,
    ...treeViewTheme,
    ...layoutTheme,
    ...linkTheme,
    ...controlsTheme,
    ...listTheme,
    ...typographyTheme,
  },
  typography,
  shadows,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default theme;

import { buttonBaseClasses } from '@mui/material/ButtonBase';

import { ThemeComponents } from '../types';

export const layoutTheme: ThemeComponents = {
  MuiStack: {
    defaultProps: {
      useFlexGap: true,
    },
  },
  MuiImageList: {
    styleOverrides: {
      root: {
        [`& .${buttonBaseClasses.root}.${buttonBaseClasses.focusVisible}`]: {
          outlineOffset: '-2px',
        },
      },
    },
  },
};

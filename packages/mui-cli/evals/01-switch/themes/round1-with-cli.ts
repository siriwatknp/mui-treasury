import { createTheme, type Palette } from '@mui/material/styles';

const iosGreen = '#34C759';
const iosTrackOff = '#E9E9EA';
const iosThumbShadow = '0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06)';

const theme = createTheme({
  focusVisible: true,
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { labelPlacement: 'end' },
              style: { '&:has(> .MuiSwitch-root)': { marginLeft: -4 } },
            },
            {
              props: { labelPlacement: 'start' },
              style: { '&:has(> .MuiSwitch-root)': { marginRight: -4 } },
            },
          ],
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          width: 50,
          height: 34,
          padding: 4,
          variants: [
            { props: { edge: 'start' }, style: { marginLeft: -4 } },
            { props: { edge: 'end' }, style: { marginRight: -4 } },
            {
              props: { size: 'small' },
              style: {
                width: 42,
                height: 28,
                padding: 4,
                '& .MuiSwitch-thumb': { width: 16, height: 16 },
                '& .MuiSwitch-switchBase': {
                  padding: 0,
                  '&.Mui-checked': { transform: 'translateX(14px)' },
                },
              },
            },
          ],
        },
        switchBase: {
          padding: 0,
          margin: 6,
          color: '#fff',
          transitionDuration: '300ms',
          '&:hover, &.Mui-checked:hover': { backgroundColor: 'transparent' },
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
          },
          '&.Mui-disabled, &.Mui-checked.Mui-disabled': { color: '#fff' },
          '&.Mui-disabled .MuiSwitch-thumb': { boxShadow: 'none' },
          '&.Mui-checked + .MuiSwitch-track': { backgroundColor: iosGreen },
          '&.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: iosTrackOff,
            opacity: 0.5,
          },
          '&.Mui-checked.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: iosGreen,
            opacity: 0.5,
          },
          variants: [
            ...(['secondary', 'error', 'warning', 'info', 'success'] as const).map(
              (color) => ({
                props: { color },
                style: ({ theme: t }: { theme: { palette: Palette } }) => ({
                  '&.Mui-checked + .MuiSwitch-track, &.Mui-checked.Mui-disabled + .MuiSwitch-track':
                    { backgroundColor: t.palette[color].main },
                }),
              }),
            ),
          ],
        },
        thumb: {
          width: 22,
          height: 22,
          border: 0,
          boxShadow: iosThumbShadow,
        },
        track: {
          borderRadius: 13,
          backgroundColor: iosTrackOff,
          opacity: 1,
        },
      },
    },
  },
});

export default theme;

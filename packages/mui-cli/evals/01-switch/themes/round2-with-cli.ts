import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  focusVisible: true,
  components: {
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          width: 54,
          height: 38,
          padding: 6,
          variants: [
            { props: { edge: 'start' }, style: { marginLeft: -2 } },
            { props: { edge: 'end' }, style: { marginRight: -2 } },
            {
              props: { size: 'small' },
              style: {
                width: 44,
                height: 30,
                padding: 5,
                '& .MuiSwitch-thumb': { width: 16, height: 16 },
                '& .MuiSwitch-switchBase': {
                  padding: 7,
                  '&.Mui-checked': { transform: 'translateX(14px)' },
                },
                '& .MuiSwitch-track': { borderRadius: 10 },
              },
            },
          ],
          '&:has(.Mui-disabled)': { opacity: 0.5 },
        },
        switchBase: ({ theme }) => ({
          padding: 8,
          transitionDuration: '200ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
          },
          '&:hover, &.Mui-checked:hover': {
            backgroundColor: 'transparent',
          },
          '& + .MuiSwitch-track, &.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: '#E9E9EA',
            ...theme.applyStyles('dark', { backgroundColor: '#39393D' }),
          },
          '&.Mui-checked + .MuiSwitch-track, &.Mui-checked.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: theme.palette.grey[600],
          },
          variants: Object.keys(theme.palette)
            .filter((color) => {
              const value = theme.palette[color as keyof typeof theme.palette];
              return typeof value === 'object' && value !== null && 'main' in value && 'contrastText' in value;
            })
            .map((color) => ({
              props: { color },
              style: {
                '&.Mui-checked + .MuiSwitch-track, &.Mui-checked.Mui-disabled + .MuiSwitch-track': {
                  backgroundColor: (theme.palette[color as 'primary'] as { main: string }).main,
                },
              },
            })),
        }),
        track: {
          borderRadius: 13,
          opacity: 1,
          transitionDuration: '200ms',
        },
        thumb: {
          backgroundColor: '#fff',
          width: 22,
          height: 22,
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

export default theme;

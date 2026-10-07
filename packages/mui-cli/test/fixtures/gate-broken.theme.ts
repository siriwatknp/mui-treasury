import { switchClasses } from '@mui/material/Switch';

export default {
  focusVisible: true,
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: { width: 44, height: 24, padding: 0 },
        switchBase: { padding: 2, [`&.${switchClasses.checked}`]: { transform: 'translateX(20px)' } },
        input: { left: 0, width: '100%' },
        thumb: { width: 20, height: 20 },
        track: { borderRadius: 12 },
      },
    },
  },
};

import { createTheme } from '@mui/material/styles';
import { switchClasses } from '@mui/material/Switch';

const iosGreen = '#34C759';
const iosGreenDark = '#30D158';

const base = `& .${switchClasses.switchBase}`;
const track = `.${switchClasses.track}`;
const checked = `.${switchClasses.checked}`;
const disabled = `.${switchClasses.disabled}`;

const geometry = (width: number, height: number, baseStyles = {}) => {
  const inset = 2;
  const thumb = height - inset * 2;
  const travel = width - height;
  return {
    width,
    height,
    [`& .${switchClasses.thumb}`]: { width: thumb, height: thumb },
    [base]: {
      ...baseStyles,
      padding: inset,
      [`& .${switchClasses.input}`]: { left: 0, width },
      [`&${checked}`]: {
        transform: `translateX(${travel}px)`,
        [`& .${switchClasses.input}`]: { left: -travel },
      },
    },
    [`& ${track}`]: { borderRadius: height / 2 },
  };
};

const checkedTrack = (color: string) => ({
  [`${base}${checked} + ${track}, ${base}${checked}${disabled} + ${track}`]: {
    backgroundColor: color,
  },
});

const theme = createTheme({
  focusVisible: true,
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          [`&:has(> .${switchClasses.root})`]: {
            gap: 12,
            marginLeft: 0,
            '&.MuiFormControlLabel-labelPlacementStart': { marginRight: 0 },
          },
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          margin: 0,
          overflow: 'visible',
          ...geometry(51, 31, {
            margin: 0,
            '&:hover, &.Mui-checked:hover': { backgroundColor: 'transparent' },
          }),
          [`${base} + ${track}, ${base}${disabled} + ${track}`]: {
            opacity: 1,
            backgroundColor: 'rgba(120, 120, 128, 0.16)',
            ...theme.applyStyles('dark', { backgroundColor: 'rgba(120, 120, 128, 0.32)' }),
          },
          [`${base}${disabled}, ${base}${disabled} + ${track}`]: { opacity: 0.5 },
          ...checkedTrack(iosGreen),
          ...theme.applyStyles('dark', checkedTrack(iosGreenDark)),
          variants: [
            { props: { size: 'small' }, style: geometry(40, 24) },
            { props: { edge: 'start' }, style: { marginLeft: 0 } },
            { props: { edge: 'end' }, style: { marginRight: 0 } },
            ...(['secondary', 'error', 'info', 'success', 'warning'] as const).map((color) => ({
              props: { color },
              style: checkedTrack(theme.palette[color].main),
            })),
            {
              props: { color: 'default' },
              style: checkedTrack(theme.palette.grey[600]),
            },
          ],
        }),
        thumb: {
          backgroundColor: '#fff',
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15), 0 3px 1px rgba(0, 0, 0, 0.06)',
        },
        track: ({ theme }) => ({
          opacity: 1,
          transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.short,
          }),
        }),
      },
    },
  },
});

export default theme;

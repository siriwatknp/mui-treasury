import { createTheme } from '@mui/material/styles';
import { switchClasses } from '@mui/material/Switch';
import { formControlLabelClasses } from '@mui/material/FormControlLabel';

const RING_SPACE = 4;
const THUMB_INSET = 2;
const IOS_GREEN = '#34C759';

const sizes = {
  medium: { trackWidth: 51, trackHeight: 31, thumb: 27 },
  small: { trackWidth: 34, trackHeight: 20, thumb: 16 },
};

function sizeStyles({ trackWidth, trackHeight, thumb }: (typeof sizes)['medium']) {
  return {
    width: trackWidth + RING_SPACE * 2,
    height: trackHeight + RING_SPACE * 2,
    padding: RING_SPACE,
    [`& .${switchClasses.thumb}`]: { width: thumb, height: thumb },
    [`& .${switchClasses.switchBase}`]: {
      padding: 0,
      top: RING_SPACE,
      left: RING_SPACE,
      margin: THUMB_INSET,
      [`&.${switchClasses.checked}`]: {
        transform: `translateX(${trackWidth - thumb - THUMB_INSET * 2}px)`,
      },
    },
    [`& .${switchClasses.track}`]: { borderRadius: trackHeight / 2 },
  };
}

const withSwitch = `&:has(> .${switchClasses.root})`;
const LABEL_GAP = 8;

const theme = createTheme({
  focusVisible: true,
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { labelPlacement: 'end' },
              style: {
                [withSwitch]: { marginLeft: -RING_SPACE },
                [`${withSwitch} > .${formControlLabelClasses.label}`]: { marginLeft: LABEL_GAP },
              },
            },
            {
              props: { labelPlacement: 'start' },
              style: {
                [withSwitch]: { marginRight: -RING_SPACE },
                [`${withSwitch} > .${formControlLabelClasses.label}`]: { marginRight: LABEL_GAP },
              },
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
          ...sizeStyles(sizes.medium),
          [`&:has(.${switchClasses.disabled})`]: { opacity: 0.5 },
          variants: [
            { props: { size: 'small' }, style: sizeStyles(sizes.small) },
            { props: { edge: 'start' }, style: { marginLeft: -RING_SPACE } },
            { props: { edge: 'end' }, style: { marginRight: -RING_SPACE } },
          ],
        },
        switchBase: ({ theme }) => ({
          transitionDuration: '200ms',
          [`&:hover, &.${switchClasses.checked}:hover`]: { backgroundColor: 'transparent' },
          [`&.${switchClasses.checked} + .${switchClasses.track}, &.${switchClasses.checked}.${switchClasses.disabled} + .${switchClasses.track}`]:
            { backgroundColor: IOS_GREEN },
          [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
            backgroundColor: '#E9E9EA',
            ...theme.applyStyles('dark', { backgroundColor: '#39393D' }),
          },
          variants: Object.entries(theme.palette)
            .filter(
              (entry): entry is [string, { main: string }] =>
                typeof entry[1] === 'object' && entry[1] !== null && typeof entry[1].main === 'string',
            )
            .map(([color, { main }]) => ({
              props: { color },
              style: {
                [`&.${switchClasses.checked} + .${switchClasses.track}, &.${switchClasses.checked}.${switchClasses.disabled} + .${switchClasses.track}`]:
                  { backgroundColor: main },
              },
            })),
        }),
        thumb: {
          backgroundColor: '#fff',
          border: 'none',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        },
        track: ({ theme }) => ({
          opacity: 1,
          backgroundColor: '#E9E9EA',
          transitionDuration: '200ms',
          ...theme.applyStyles('dark', { backgroundColor: '#39393D' }),
        }),
      },
    },
  },
});

export default theme;

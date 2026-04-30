import React from 'react';

import { switchClasses } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { createSvgIcon } from '@mui/material/utils';

import {
  CONTROL_HEIGHTS,
  CONTROL_TOUCH_HEIGHTS,
  SWITCH_SIZES,
  SWITCH_TOUCH_SIZES,
  TOUCH_MEDIA_QUERY,
} from '../scales';
import { ThemeComponents } from '../types';

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/Switch' {
  interface SwitchPropsSizeOverrides {
    large: true;
  }
}

const borderWidth = 1;

const CheckIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
  >
    <defs />
    <path
      fill="currentColor"
      d="M11.943,1.75 L12.057,1.75 C14.248,1.75 15.969,1.75 17.312,1.931 C18.689,2.116 19.781,2.503 20.639,3.361 C21.497,4.219 21.884,5.311 22.069,6.688 C22.25,8.031 22.25,9.752 22.25,11.943 L22.25,12.057 C22.25,14.248 22.25,15.969 22.069,17.312 C21.884,18.689 21.497,19.781 20.639,20.639 C19.781,21.497 18.689,21.884 17.312,22.069 C15.969,22.25 14.248,22.25 12.057,22.25 L11.943,22.25 C9.752,22.25 8.031,22.25 6.688,22.069 C5.311,21.884 4.219,21.497 3.361,20.639 C2.503,19.781 2.116,18.689 1.931,17.312 C1.75,15.969 1.75,14.248 1.75,12.057 L1.75,11.943 C1.75,9.752 1.75,8.031 1.931,6.688 C2.116,5.311 2.503,4.219 3.361,3.361 C4.219,2.503 5.311,2.116 6.688,1.931 C8.031,1.75 9.752,1.75 11.943,1.75 L11.943,1.75 Z M4.422,4.422 C3.889,4.955 3.58,5.678 3.417,6.888 C3.252,8.12 3.25,9.74 3.25,12 C3.25,14.26 3.252,15.88 3.417,17.112 C3.58,18.322 3.889,19.045 4.422,19.578 C4.955,20.111 5.678,20.42 6.888,20.583 C8.12,20.748 9.74,20.75 12,20.75 C14.26,20.75 15.88,20.748 17.112,20.583 C18.322,20.42 19.045,20.111 19.578,19.578 C20.111,19.045 20.42,18.322 20.583,17.112 C20.748,15.88 20.75,14.26 20.75,12 C20.75,9.74 20.748,8.12 20.583,6.888 C20.42,5.678 20.111,4.955 19.578,4.422 C19.045,3.889 18.322,3.58 17.112,3.417 C15.88,3.252 14.26,3.25 12,3.25 C9.74,3.25 8.12,3.252 6.888,3.417 C5.678,3.58 4.955,3.889 4.422,4.422 Z M16.553,9.507 L11.053,15.507 C10.915,15.658 10.721,15.745 10.516,15.75 C10.312,15.754 10.114,15.675 9.97,15.53 L7.47,13.03 C7.177,12.737 7.177,12.263 7.47,11.97 C7.763,11.677 8.237,11.677 8.53,11.97 L10.476,13.916 L15.447,8.493 C15.727,8.188 16.201,8.167 16.507,8.447 C16.812,8.727 16.833,9.201 16.553,9.507 Z"
    />
  </svg>,
  'CheckOutline',
);
const CheckBorderIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
  >
    <defs />
    <path
      fill="currentColor"
      d="M11.943,1.75 L12.057,1.75 C14.248,1.75 15.969,1.75 17.312,1.931 C18.689,2.116 19.781,2.503 20.639,3.361 C21.497,4.219 21.884,5.311 22.069,6.688 C22.25,8.031 22.25,9.752 22.25,11.943 L22.25,12.057 C22.25,14.248 22.25,15.969 22.069,17.312 C21.884,18.689 21.497,19.781 20.639,20.639 C19.781,21.497 18.689,21.884 17.312,22.069 C15.969,22.25 14.248,22.25 12.057,22.25 L11.943,22.25 C9.752,22.25 8.031,22.25 6.688,22.069 C5.311,21.884 4.219,21.497 3.361,20.639 C2.503,19.781 2.116,18.689 1.931,17.312 C1.75,15.969 1.75,14.248 1.75,12.057 L1.75,11.943 C1.75,9.752 1.75,8.031 1.931,6.688 C2.116,5.311 2.503,4.219 3.361,3.361 C4.219,2.503 5.311,2.116 6.688,1.931 C8.031,1.75 9.752,1.75 11.943,1.75 L11.943,1.75 Z M4.422,4.422 C3.889,4.955 3.58,5.678 3.417,6.888 C3.252,8.12 3.25,9.74 3.25,12 C3.25,14.26 3.252,15.88 3.417,17.112 C3.58,18.322 3.889,19.045 4.422,19.578 C4.955,20.111 5.678,20.42 6.888,20.583 C8.12,20.748 9.74,20.75 12,20.75 C14.26,20.75 15.88,20.748 17.112,20.583 C18.322,20.42 19.045,20.111 19.578,19.578 C20.111,19.045 20.42,18.322 20.583,17.112 C20.748,15.88 20.75,14.26 20.75,12 C20.75,9.74 20.748,8.12 20.583,6.888 C20.42,5.678 20.111,4.955 19.578,4.422 C19.045,3.889 18.322,3.58 17.112,3.417 C15.88,3.252 14.26,3.25 12,3.25 C9.74,3.25 8.12,3.252 6.888,3.417 C5.678,3.58 4.955,3.889 4.422,4.422 Z"
    />
  </svg>,
  'CheckBorder',
);
const IntermediateIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    fill="none"
  >
    <defs />
    <path
      fill="currentColor"
      d="M11.943,1.75 L12.057,1.75 C14.248,1.75 15.969,1.75 17.312,1.931 C18.689,2.116 19.781,2.503 20.639,3.361 C21.497,4.219 21.884,5.311 22.069,6.688 C22.25,8.031 22.25,9.752 22.25,11.943 L22.25,12.057 C22.25,14.248 22.25,15.969 22.069,17.312 C21.884,18.689 21.497,19.781 20.639,20.639 C19.781,21.497 18.689,21.884 17.312,22.069 C15.969,22.25 14.248,22.25 12.057,22.25 L11.943,22.25 C9.752,22.25 8.031,22.25 6.688,22.069 C5.311,21.884 4.219,21.497 3.361,20.639 C2.503,19.781 2.116,18.689 1.931,17.312 C1.75,15.969 1.75,14.248 1.75,12.057 L1.75,11.943 C1.75,9.752 1.75,8.031 1.931,6.688 C2.116,5.311 2.503,4.219 3.361,3.361 C4.219,2.503 5.311,2.116 6.688,1.931 C8.031,1.75 9.752,1.75 11.943,1.75 L11.943,1.75 Z M4.422,4.422 C3.889,4.955 3.58,5.678 3.417,6.888 C3.252,8.12 3.25,9.74 3.25,12 C3.25,14.26 3.252,15.88 3.417,17.112 C3.58,18.322 3.889,19.045 4.422,19.578 C4.955,20.111 5.678,20.42 6.888,20.583 C8.12,20.748 9.74,20.75 12,20.75 C14.26,20.75 15.88,20.748 17.112,20.583 C18.322,20.42 19.045,20.111 19.578,19.578 C20.111,19.045 20.42,18.322 20.583,17.112 C20.748,15.88 20.75,14.26 20.75,12 C20.75,9.74 20.748,8.12 20.583,6.888 C20.42,5.678 20.111,4.955 19.578,4.422 C19.045,3.889 18.322,3.58 17.112,3.417 C15.88,3.252 14.26,3.25 12,3.25 C9.74,3.25 8.12,3.252 6.888,3.417 C5.678,3.58 4.955,3.889 4.422,4.422 Z M8,11.25 L16,11.25 C16.414,11.25 16.75,11.586 16.75,12 C16.75,12.414 16.414,12.75 16,12.75 L8,12.75 C7.586,12.75 7.25,12.414 7.25,12 C7.25,11.586 7.586,11.25 8,11.25 Z"
    />
  </svg>,
  'IndeterminateCheckBox',
);

const Unradio = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: '1.5rem',
  height: '1.5rem',
  padding: 2,
  borderRadius: '50%',
  color: (theme.vars || theme).palette.text.icon,
  '.MuiRadio-root:hover &, .MuiFormControlLabel-root:hover &': {
    color: (theme.vars || theme).palette.text.primary,
  },
  '&::before': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '100%',
    border: '1px solid',
    borderColor: 'currentColor',
    borderRadius: 'inherit',
  },
  '&[font-size="large"]': {
    width: '1.75rem',
    height: '1.75rem',
  },
}));
const RadioIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>,
  'RadioIcon',
);

const iconSize = 24; // 1.5rem icon size

export const controlsTheme: ThemeComponents = {
  MuiCheckbox: {
    defaultProps: {
      icon: <CheckBorderIcon />,
      checkedIcon: <CheckIcon />,
      indeterminateIcon: <IntermediateIcon />,
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        variants: [
          {
            props: { size: 'small' },
            style: {
              '--Icon-size': '1.5rem',
              padding: (CONTROL_HEIGHTS.sm - iconSize) / 2,
              [TOUCH_MEDIA_QUERY]: {
                ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                  padding: (CONTROL_TOUCH_HEIGHTS.sm - iconSize) / 2,
                }),
              },
            },
          },
          {
            props: { size: 'medium' },
            style: {
              '--Icon-size': '1.5rem',
              padding: (CONTROL_HEIGHTS.md - iconSize) / 2,
              [TOUCH_MEDIA_QUERY]: {
                ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
                  padding: (CONTROL_TOUCH_HEIGHTS.md - iconSize) / 2,
                }),
              },
            },
          },
          {
            props: { size: 'large' },
            style: {
              '--Icon-size': '1.75rem',
              padding: (CONTROL_HEIGHTS.lg - iconSize) / 2 - 2,
              [TOUCH_MEDIA_QUERY]: {
                ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
                  padding: (CONTROL_TOUCH_HEIGHTS.lg - iconSize) / 2 - 2,
                }),
              },
            },
          },
        ],
        '&.Mui-focusVisible': {
          outline: '2px solid',
          outlineOffset: '-2px',
        },
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      icon: <Unradio />,
      checkedIcon: <RadioIcon />,
    },
    styleOverrides: {
      root: {
        variants: [
          {
            props: { size: 'small' },
            style: {
              '--Icon-size': '1.5rem',
              padding: (CONTROL_HEIGHTS.sm - iconSize) / 2,
              [TOUCH_MEDIA_QUERY]: {
                ...(CONTROL_HEIGHTS.sm !== CONTROL_TOUCH_HEIGHTS.sm && {
                  padding: (CONTROL_TOUCH_HEIGHTS.sm - iconSize) / 2,
                }),
              },
            },
          },
          {
            props: { size: 'medium' },
            style: {
              '--Icon-size': '1.5rem',
              padding: (CONTROL_HEIGHTS.md - iconSize) / 2,
              [TOUCH_MEDIA_QUERY]: {
                ...(CONTROL_HEIGHTS.md !== CONTROL_TOUCH_HEIGHTS.md && {
                  padding: (CONTROL_TOUCH_HEIGHTS.md - iconSize) / 2,
                }),
              },
            },
          },
          {
            props: { size: 'large' },
            style: {
              '--Icon-size': '1.75rem',
              padding: (CONTROL_HEIGHTS.lg - iconSize) / 2 - 2,
              [TOUCH_MEDIA_QUERY]: {
                ...(CONTROL_HEIGHTS.lg !== CONTROL_TOUCH_HEIGHTS.lg && {
                  padding: (CONTROL_TOUCH_HEIGHTS.lg - iconSize) / 2 - 2,
                }),
              },
            },
          },
        ],
        '&.Mui-focusVisible': {
          outline: '2px solid',
          outlineOffset: '-2px',
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ theme }) => ({
        '--_h': `${SWITCH_SIZES.md.height}px`,
        '--_w': `${SWITCH_SIZES.md.width}px`,
        '--_inset': `${SWITCH_SIZES.md.inset}px`,
        '--_b': '1px',
        '--_thumb-size': 'calc(var(--_h) - var(--_b) * 2 - var(--_inset) * 2)',
        '--_thumb-w': 'var(--_thumb-size)',
        '--_thumb-h': 'var(--_thumb-size)',
        '--mui-opacity-switchTrackDisabled': '0.5',
        width: 'var(--_w)',
        height: 'var(--_h)',
        padding: 0,
        borderRadius: 'var(--_h)',
        '&:has(.Mui-focusVisible)': {
          outline: '2px solid',
          outlineOffset: '4px',
          outlineColor: (theme.vars || theme).palette.text.primary,
        },
        [TOUCH_MEDIA_QUERY]: {
          ...(SWITCH_SIZES.md.height !== SWITCH_TOUCH_SIZES.md.height && {
            '--_h': `${SWITCH_TOUCH_SIZES.md.height}px`,
          }),
          ...(SWITCH_SIZES.md.width !== SWITCH_TOUCH_SIZES.md.width && {
            '--_w': `${SWITCH_TOUCH_SIZES.md.width}px`,
          }),
          ...(SWITCH_SIZES.md.inset !== SWITCH_TOUCH_SIZES.md.inset && {
            '--_inset': `${SWITCH_TOUCH_SIZES.md.inset}px`,
          }),
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              '--_h': `${SWITCH_SIZES.sm.height}px`,
              '--_w': `${SWITCH_SIZES.sm.width}px`,
              '--_inset': `${SWITCH_SIZES.sm.inset}px`,
              [TOUCH_MEDIA_QUERY]: {
                ...(SWITCH_SIZES.sm.height !== SWITCH_TOUCH_SIZES.sm.height && {
                  '--_h': `${SWITCH_TOUCH_SIZES.sm.height}px`,
                }),
                ...(SWITCH_SIZES.sm.width !== SWITCH_TOUCH_SIZES.sm.width && {
                  '--_w': `${SWITCH_TOUCH_SIZES.sm.width}px`,
                }),
                ...(SWITCH_SIZES.sm.inset !== SWITCH_TOUCH_SIZES.sm.inset && {
                  '--_inset': `${SWITCH_TOUCH_SIZES.sm.inset}px`,
                }),
              },
            },
          },
          {
            props: { size: 'large' },
            style: {
              '--_h': `${SWITCH_SIZES.lg.height}px`,
              '--_w': `${SWITCH_SIZES.lg.width}px`,
              '--_inset': `${SWITCH_SIZES.lg.inset}px`,
              [TOUCH_MEDIA_QUERY]: {
                ...(SWITCH_SIZES.lg.height !== SWITCH_TOUCH_SIZES.lg.height && {
                  '--_h': `${SWITCH_TOUCH_SIZES.lg.height}px`,
                }),
                ...(SWITCH_SIZES.lg.width !== SWITCH_TOUCH_SIZES.lg.width && {
                  '--_w': `${SWITCH_TOUCH_SIZES.lg.width}px`,
                }),
                ...(SWITCH_SIZES.lg.inset !== SWITCH_TOUCH_SIZES.lg.inset && {
                  '--_inset': `${SWITCH_TOUCH_SIZES.lg.inset}px`,
                }),
              },
            },
          },
        ],
        [`& .${switchClasses.switchBase}`]: {
          padding: borderWidth,
          top: 'var(--_inset)',
          left: 'var(--_inset)',
          [`&.${switchClasses.checked}`]: {
            color: (theme.vars || theme).palette.common.white,
            transform: `translateX(calc(var(--_w) - var(--_thumb-w) - var(--_b) * 2 - var(--_inset) * 2))`,
            ...theme.applyStyles('dark', {
              [`& .${switchClasses.thumb}`]: {
                background: (theme.vars || theme).palette.grey[900],
              },
            }),
          },
          [`&.${switchClasses.checked}:not(.Mui-disabled) + .${switchClasses.track}`]:
            {
              opacity: 1,
              border: 'none',
            },
          '&:active': {
            '--_thumb-w': 'calc(var(--_thumb-size) + 4px)',
          },
          '&.Mui-disabled': {
            [`& .${switchClasses.thumb}`]: {
              opacity: 'var(--mui-opacity-switchTrackDisabled)',
            },
          },
        },
        [`& .${switchClasses.thumb}`]: {
          borderRadius: 'var(--_thumb-size)',
          background: (theme.vars || theme).palette.common.white,
          width: 'var(--_thumb-w)',
          height: 'var(--_thumb-h)',
          boxShadow:
            '0 3px 8px 0 rgba(0,0,0,0.1), 0 1px 1px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.08)',
          transition: 'width 120ms ease-out 0ms',
        },
        [`& .${switchClasses.track}`]: {
          borderRadius: 'var(--_thumb-size)',
          border: `solid ${(theme.vars || theme).palette.grey[300]}`,
          borderWidth,
          backgroundColor: (theme.vars || theme).palette.grey[300],
          opacity: 1,
          transition: 'none',
          ...theme.applyStyles('dark', {
            border: `solid ${(theme.vars || theme).palette.grey[700]}`,
            backgroundColor: (theme.vars || theme).palette.grey[900],
          }),
        },
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        gap: 'var(--_gap)',
        marginLeft: -4,
        [`&:has(.${switchClasses.root})`]: {
          '--_gap': theme.spacing(1),
          margin: 0,
        },
      }),
    },
  },
};

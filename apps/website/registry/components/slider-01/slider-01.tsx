'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Slider, { SliderProps } from '@mui/material/Slider';

export interface Slider01Props
  extends Omit<SliderProps, 'value' | 'defaultValue' | 'onChange'> {
  label?: React.ReactNode;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export const Slider01 = React.forwardRef<HTMLDivElement, Slider01Props>(
  function Slider01(
    {
      label = 'Level',
      value: controlledValue,
      defaultValue = 61,
      onChange,
      min = 0,
      max = 100,
      sx,
      ...props
    },
    ref,
  ) {
    const labelId = React.useId();
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
    const value = controlledValue ?? uncontrolled;

    const handleChange = (_: Event, v: number | number[]) => {
      const next = Array.isArray(v) ? v[0] : v;
      if (controlledValue === undefined) setUncontrolled(next);
      onChange?.(next);
    };

    return (
      <Box
        ref={ref}
        sx={[
          {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1.5,
            p: 1,
            pl: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      >
        <Box
          component="span"
          id={labelId}
          sx={{
            fontSize: 18,
            fontWeight: 400,
            color: 'text.secondary',
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          {label}
        </Box>
        <Box
          component="span"
          aria-hidden
          sx={{
            minWidth: 44,
            height: 36,
            px: 1,
            borderRadius: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'common.black',
            color: 'common.white',
            fontSize: 18,
            fontWeight: 500,
            fontVariantNumeric: 'tabular-nums',
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          {value}
        </Box>
        <Slider
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          aria-labelledby={labelId}
          aria-valuetext={`${value}`}
          sx={(theme) => {
            const gripGradient =
              'linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45))';
            const focusRing = `0 0 0 2px ${(theme.vars || theme).palette.action.focus}`;
            return {
              flex: 1,
              minWidth: 240,
              height: 36,
              padding: 0,
              '& .MuiSlider-rail': {
                opacity: 1,
                height: 36,
                borderRadius: 1,
                bgcolor: 'secondary.main',
              },
              '& .MuiSlider-track': {
                border: 'none',
                bgcolor: 'transparent',
                height: 36,
              },
              '& .MuiSlider-thumb': {
                width: 28,
                height: 30,
                borderRadius: 1,
                bgcolor: 'secondary.text',
                boxShadow: 'none',
                transition: 'box-shadow 120ms',
                backgroundImage: `${gripGradient}, ${gripGradient}, ${gripGradient}`,
                backgroundSize: '1.5px 14px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition:
                  'calc(50% - 4px) 50%, 50% 50%, calc(50% + 4px) 50%',
                '&::before': { display: 'none' },
                '&.Mui-focusVisible, &.Mui-active': {
                  boxShadow: focusRing,
                },
                '@media (hover: hover)': {
                  '&:hover': {
                    boxShadow: focusRing,
                  },
                },
              },
              ...theme.applyStyles('dark', {
                '& .MuiSlider-rail': {
                  bgcolor: 'background.default',
                },
                '& .MuiSlider-thumb': {
                  bgcolor: 'secondary.main',
                },
              }),
            };
          }}
          {...props}
        />
      </Box>
    );
  },
);

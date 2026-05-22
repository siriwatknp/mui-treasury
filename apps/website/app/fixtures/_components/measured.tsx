'use client';
import * as React from 'react';

import Box from '@mui/material/Box';

// Wraps a single instance and overlays its measured width × height as a design-tool
// style annotation: dashed bounds + a px pill on the right (height) and bottom (width).
// The measured numbers act as embedded visual-regression assertions — a height drift
// changes the pill text and the diff catches it.

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        px: 0.625,
        py: 0.125,
        borderRadius: 0.75,
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        color: 'background.default',
        bgcolor: 'text.primary',
      }}
    >
      {children}
    </Box>
  );
}

export function Measured({
  children,
  width = true,
  height = true,
}: {
  children: React.ReactNode;
  width?: boolean;
  height?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [dim, setDim] = React.useState<{ w: number; h: number } | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setDim({ w: Math.round(r.width), h: Math.round(r.height) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        // reserve room for the right (height) + bottom (width) annotations
        mr: height ? '52px' : 0,
        mb: width ? '34px' : 0,
      }}
    >
      <Box
        ref={ref}
        sx={{
          display: 'inline-block',
          outline: '1px dashed',
          outlineColor: 'text.secondary',
          outlineOffset: 2,
        }}
      >
        {children}
      </Box>

      {height && dim && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '100%',
            ml: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Box
            sx={{
              width: '1px',
              alignSelf: 'stretch',
              bgcolor: 'text.secondary',
            }}
          />
          <Pill>{dim.h}px</Pill>
        </Box>
      )}

      {width && dim && (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            mt: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Box
            sx={{
              height: '1px',
              alignSelf: 'stretch',
              bgcolor: 'text.secondary',
            }}
          />
          <Pill>{dim.w}px</Pill>
        </Box>
      )}
    </Box>
  );
}

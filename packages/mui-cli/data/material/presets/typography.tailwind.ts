import { unstable_createBreakpoints as createBreakpoints } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

// Tailwind-inspired type scale: headings step up at sm / md / xl through private size and line-height variables
const breakpoints = createBreakpoints({});

const h1 = {
  '--_fs': '2.25rem',
  '--_lh': '1.11111111',
  fontWeight: 800,
  fontSize: 'var(--_fs)',
  lineHeight: 'var(--_lh)',
  [breakpoints.up('sm')]: { '--_fs': '3rem', '--_lh': '1' },
  [breakpoints.up('md')]: { '--_fs': '3.5rem' },
  [breakpoints.up('xl')]: { '--_fs': '4rem' },
};

const h2 = {
  '--_fs': '1.5rem',
  '--_lh': '1.5',
  fontWeight: 700,
  fontSize: 'var(--_fs)',
  lineHeight: 'var(--_lh)',
  [breakpoints.up('sm')]: { '--_fs': '1.875rem' },
  [breakpoints.up('md')]: { '--_fs': '2.25rem', '--_lh': '1.11111111' },
  [breakpoints.up('xl')]: { '--_fs': '3rem', '--_lh': '1.08333' },
};

const h3 = {
  '--_fs': '1.25rem',
  '--_lh': '1.6',
  fontWeight: 600,
  fontSize: 'var(--_fs)',
  lineHeight: 'var(--_lh)',
  [breakpoints.up('sm')]: { '--_fs': '1.5rem', '--_lh': '1.5' },
  [breakpoints.up('md')]: { '--_fs': '1.875rem', '--_lh': '1.33333' },
  [breakpoints.up('xl')]: { '--_fs': '2.25rem', '--_lh': '1.22222' },
};

const h4 = {
  '--_fs': '1.125rem',
  '--_lh': '1.55556',
  fontWeight: 600,
  fontSize: 'var(--_fs)',
  lineHeight: 'var(--_lh)',
  [breakpoints.up('sm')]: { '--_fs': '1.25rem' },
  [breakpoints.up('md')]: { '--_lh': '1.6' },
  [breakpoints.up('xl')]: { '--_lh': '1.5' },
};

export const typography: ThemeOptions['typography'] = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  h1,
  h2,
  h3,
  h4,
  h5: h4,
  h6: h4,
  body2: { lineHeight: '1.4285714286' },
  button: { lineHeight: '20px', textTransform: 'none' },
};

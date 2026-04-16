'use client';

import { memo } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import type { CircularProgressProps } from '@mui/material/CircularProgress';

export type LoaderProps = CircularProgressProps;

export const Loader = memo((props: LoaderProps) => (
  <CircularProgress size={16} thickness={5} {...props} />
));

Loader.displayName = 'Loader';

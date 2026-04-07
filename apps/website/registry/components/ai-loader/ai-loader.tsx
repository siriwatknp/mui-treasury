"use client";

import CircularProgress from "@mui/material/CircularProgress";
import type { CircularProgressProps } from "@mui/material/CircularProgress";
import { memo } from "react";

export type LoaderProps = CircularProgressProps;

export const Loader = memo((props: LoaderProps) => (
  <CircularProgress size={16} thickness={5} {...props} />
));

Loader.displayName = "Loader";

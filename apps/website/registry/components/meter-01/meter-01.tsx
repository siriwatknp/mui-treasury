"use client";

import * as React from "react";
import { Meter } from "@base-ui-components/react/meter";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface Meter01Props {
  label: string;
  value: number;
  min?: number;
  max?: number;
  showValue?: boolean;
}

export function Meter01({
  label,
  value,
  min = 0,
  max = 100,
  showValue = true,
}: Meter01Props) {
  return (
    <Meter.Root value={value} min={min} max={max}>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "baseline",
          mb: 1,
        }}
      >
        <Meter.Label>
          <Typography
            variant="body1"
            component="span"
            sx={{
              textTransform: "uppercase",
              fontWeight: 500,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            {label}
          </Typography>
        </Meter.Label>
        {showValue && (
          <Meter.Value>
            {(formattedValue, numValue) => (
              <Typography
                variant="h4"
                component="span"
                sx={{ fontSize: "0.875rem" }}
              >
                {numValue}%
              </Typography>
            )}
          </Meter.Value>
        )}
      </Stack>
      <Meter.Track
        render={
          <Box
            sx={(theme) => ({
              height: 6,
              width: "100%",
              bgcolor: (theme.vars || theme).palette.action.disabledBackground,
              borderRadius: 1,
              overflow: "hidden",
              position: "relative",
            })}
          />
        }
      >
        <Meter.Indicator
          render={
            <Box
              sx={(theme) => ({
                height: "100%",
                bgcolor: (theme.vars || theme).palette.text.primary,
                transition: "width 0.3s ease",
              })}
            />
          }
        />
      </Meter.Track>
    </Meter.Root>
  );
}

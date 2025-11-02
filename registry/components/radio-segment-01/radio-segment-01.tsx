"use client";

import * as React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

export interface RadioSegment01Props {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioSegment01({
  defaultValue = "16-inch",
  value,
  onChange,
}: RadioSegment01Props) {
  return (
    <RadioGroup
      row
      name="size-options"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      sx={(theme) => ({
        display: "flex",
        flexWrap: "nowrap",
        gap: 0,
        width: "400px",
        maxWidth: "100%",
        "& .MuiFormControlLabel-root": {
          m: 0,
          flex: 1,
          border: 1,
          borderColor: "divider",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "action.hover",
          },
          "&:has(:checked)": {
            outline: 2,
            outlineStyle: "solid",
            outlineOffset: -2,
            outlineColor: (theme.vars || theme).palette.primary.main,
            zIndex: 1,
          },
          "&:first-of-type": {
            borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
            borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
          },
          "&:last-of-type": {
            borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
            borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
          },
          "&:not(:first-of-type)": {
            marginLeft: "-1px",
          },
        },
      })}
    >
      <FormControlLabel
        value="14-inch"
        control={
          <Radio
            sx={{
              position: "absolute",
              opacity: 0,
              width: 0,
              height: 0,
            }}
          />
        }
        slotProps={{ typography: { component: "div", sx: { width: "100%" } } }}
        label={
          <Stack
            spacing={0.5}
            sx={{
              py: 3,
              px: 4,
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography variant="h4">14-inch</Typography>
            <Typography variant="body1" color="text.secondary">
              From $1599
            </Typography>
          </Stack>
        }
      />
      <FormControlLabel
        value="16-inch"
        control={
          <Radio
            sx={{
              position: "absolute",
              opacity: 0,
              width: 0,
              height: 0,
            }}
          />
        }
        slotProps={{ typography: { component: "div", sx: { width: "100%" } } }}
        label={
          <Stack
            spacing={0.5}
            sx={{
              py: 3,
              px: 4,
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography variant="h4">16-inch</Typography>
            <Typography variant="body1" color="text.secondary">
              From $2499
            </Typography>
          </Stack>
        }
      />
    </RadioGroup>
  );
}

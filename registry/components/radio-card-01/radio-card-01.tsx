"use client";

import * as React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

export default function RadioCard01() {
  const [value, setValue] = React.useState("pro-max");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <RadioGroup
      name="iphone-model"
      value={value}
      onChange={handleChange}
      sx={[
        {
          gap: 2,
          "& .MuiFormControlLabel-root": {
            m: 0,
            border: "2px solid",
            borderColor: "grey.300",
            borderRadius: 2,
            p: 2,
            transition: "border-color 0.2s",
            cursor: "pointer",
            position: "relative",
            "@media (hover: hover)": {
              "&:hover": {
                borderColor: "grey.400",
              },
            },
          },
          "& .MuiFormControlLabel-root:has(.Mui-checked)": {
            borderColor: "primary.main",
          },
          "& .MuiRadio-root": {
            // Remove this block if you want to show the radio circle
            position: "absolute",
            width: 1,
            height: 1,
            p: 0,
            m: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          },
          "& .MuiFormControlLabel-label": {
            width: "100%",
          },
        },
        (theme) => ({
          ...theme.applyStyles("dark", {
            "& .MuiFormControlLabel-root": {
              borderColor: "grey.700",
              "@media (hover: hover)": {
                "&:hover": {
                  borderColor: "grey.600",
                },
              },
            },
          }),
        }),
      ]}
    >
      <FormControlLabel
        value="pro"
        control={<Radio />}
        label={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              gap: 2,
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant="h6" component="div">
                iPhone 17 Pro
              </Typography>
              <Typography variant="body2" color="text.secondary">
                6.3-inch display²
              </Typography>
            </Stack>
            <Stack
              spacing={0.5}
              sx={{ textAlign: "right", minWidth: "fit-content" }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                From $1099
              </Typography>
              <Typography variant="body2" color="text.secondary">
                or $45.79/mo.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                for 24 mo.*
              </Typography>
            </Stack>
          </Box>
        }
      />
      <FormControlLabel
        value="pro-max"
        control={<Radio />}
        label={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              gap: 2,
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant="h6" component="div">
                iPhone 17 Pro Max
              </Typography>
              <Typography variant="body2" color="text.secondary">
                6.9-inch display²
              </Typography>
            </Stack>
            <Stack
              spacing={0.5}
              sx={{ textAlign: "right", minWidth: "fit-content" }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                From $1199
              </Typography>
              <Typography variant="body2" color="text.secondary">
                or $49.95/mo.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                for 24 mo.*
              </Typography>
            </Stack>
          </Box>
        }
      />
    </RadioGroup>
  );
}

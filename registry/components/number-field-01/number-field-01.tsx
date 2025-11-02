"use client";

import * as React from "react";
import { NumberField } from "@base-ui-components/react/number-field";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export interface NumberField01Props extends NumberField.Root.Props {
  label?: string;
}

export default function NumberField01({
  label = "Amount",
  ...props
}: NumberField01Props) {
  const id = React.useId();
  return (
    <NumberField.Root defaultValue={100} {...props} render={<FormControl />}>
      {label && (
        <FormLabel
          htmlFor={id}
          sx={{
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            mb: 0.5,
          }}
        >
          {label}
        </FormLabel>
      )}
      <NumberField.Group
        render={
          <Box
            sx={{
              display: "flex",
              borderRadius: 1,
              minHeight: 43,
            }}
          />
        }
      >
        <NumberField.Decrement
          render={
            <Button
              variant="outlined"
              aria-label="Decrease"
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                width: 44,
                bgcolor: "action.hover",
              }}
            />
          }
        >
          <RemoveIcon />
        </NumberField.Decrement>

        <NumberField.Input
          render={
            <Box
              id={id}
              component="input"
              sx={(theme) => ({
                borderBlock: "1px solid",
                borderColor: "divider",
                fontSize: "1rem",
                px: 1,
                minWidth: 0,
                width: "6rem",
                textAlign: "center",
                "&:focus": {
                  outline: "1px solid",
                  outlineColor: (theme.vars || theme).palette.primary.main,
                  outlineOffset: "-2px",
                },
              })}
            />
          }
        />

        <NumberField.Increment
          render={
            <Button
              variant="outlined"
              aria-label="Increase"
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                width: 44,
                bgcolor: "action.hover",
              }}
            />
          }
        >
          <AddIcon />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
}

"use client";

import React from "react";
import { NumberInputField, type NumberInputError } from "./number-input";
import { InputAdornment } from "@mui/material";

export default function NumberInputDemo() {
  const [error, setError] = React.useState<NumberInputError | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Number Input Examples
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <NumberInputField
              label="Basic Input"
              placeholder="Enter number"
              fullWidth
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            />
          </div>

          <div>
            <NumberInputField
              label="With Min/Max"
              placeholder="Range: -5 to 5"
              helperText="Value between -5 and 5"
              min={-5}
              max={5}
              defaultValue={0}
              fullWidth
            />
          </div>

          <div>
            <NumberInputField
              label="Precision Control"
              placeholder="2 decimal places"
              helperText="Rounds to 2 decimals"
              precision={2}
              defaultValue={4.5}
              fullWidth
            />
          </div>

          <div>
            <NumberInputField
              label="Step Value"
              placeholder="Increments of 10"
              helperText="Step: 10"
              step={10}
              defaultValue={20}
              fullWidth
            />
          </div>

          <div>
            <NumberInputField
              label="Mouse Wheel"
              placeholder="Scroll to change"
              helperText="Use mouse wheel"
              defaultValue={0}
              allowMouseWheel
              step={5}
              fullWidth
            />
          </div>

          <div>
            <NumberInputField
              label="Currency Format"
              placeholder="Currency"
              helperText="Formatted as currency"
              defaultValue={1000}
              step={100}
              formatter={(valueText) => {
                const addComma = (str: string) =>
                  str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return `$${addComma(valueText)}`;
              }}
              parser={(valueText) =>
                valueText.replace("$", "").replace(/,/g, "")
              }
              fullWidth
            />
          </div>

          <div className="sm:col-span-1 md:col-span-1">
            <NumberInputField
              label="Error Handling"
              placeholder="Try exceeding limits"
              helperText={
                error === "exceed-max"
                  ? "Value exceeds maximum limit"
                  : error === "below-min"
                  ? "Value is below minimum limit"
                  : "Enter value between 10 and 40"
              }
              defaultValue={20}
              min={10}
              max={40}
              step={10}
              keepWithinRange={false}
              clampValueOnBlur={false}
              onChange={(_, metadata) => {
                setError(metadata.error);
              }}
              error={!!error}
              fullWidth
            />
          </div>

          <div className="sm:col-span-1 md:col-span-1">
            <NumberInputField
              label="Clamp on Blur"
              placeholder="Keeps invalid values"
              helperText="auto-correct on blur"
              defaultValue={10}
              min={0}
              max={100}
              clampValueOnBlur
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}

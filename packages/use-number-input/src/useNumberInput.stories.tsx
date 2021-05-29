import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  useNumberInput,
  UseNumberInputOptions,
} from "@mui-treasury/use-number-input";

export default {
  title: "Hook/UseNumberInput",
  argTypes: {
    onChange: { action: "changed" },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    precision: {
      control: "number",
    },
    step: {
      control: "number",
    },
    allowMouseWheel: {
      control: "boolean",
    },
    clampValueOnBlur: {
      control: "boolean",
    },
    focusInputOnChange: {
      control: "boolean",
    },
    keepWithinRange: {
      control: "boolean",
    },
  },
  args: {
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    precision: 0,
    step: 1,
    allowMouseWheel: false,
    clampValueOnBlur: true,
    keepWithinRange: true,
    focusInputOnChange: true,
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const NumberInput: Story<UseNumberInputOptions> = (args) => {
  const {
    inputRef,
    getInputHandlerProps,
    getInputA11yProps,
    getDecrementProps,
    getIncrementProps,
  } = useNumberInput(args);
  return (
    <div style={{ display: "flex" }}>
      <input
        {...{
          ref: inputRef,
          size: 4,
          style: {
            padding: 8,
          },
          ...getInputHandlerProps(),
          ...getInputA11yProps(),
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button {...getIncrementProps()}>
          <svg viewBox="0 0 24 24" height="18px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </button>
        <button
          {...getDecrementProps()}
          style={{
            margin: 0,
          }}
        >
          <svg viewBox="0 0 24 24" height="18px">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const Spinner: Story<UseNumberInputOptions> = (args) => {
  const {
    inputRef,
    getInputHandlerProps,
    getInputA11yProps,
    getDecrementProps,
    getIncrementProps,
  } = useNumberInput(args);
  return (
    <div style={{ display: "flex" }}>
      <button {...getDecrementProps()} style={{ marginRight: 4 }}>
        -
      </button>
      <input
        {...{
          ref: inputRef,
          size: 4,
          readOnly: true,
          style: {
            padding: 8,
          },
          ...getInputHandlerProps(),
          ...getInputA11yProps(),
        }}
      />
      <button {...getIncrementProps()} style={{ marginLeft: 4 }}>
        +
      </button>
    </div>
  );
};

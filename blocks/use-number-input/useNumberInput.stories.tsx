import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { useNumberInput, UseNumberInputOptions } from "./useNumberInput";

const meta = {
  title: "Hook/useNumberInput",
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
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<UseNumberInputOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1 = {
  render: (args) => {
    const { inputRef, getInputProps, getDecrementProps, getIncrementProps } =
      useNumberInput(args);
    return (
      <div style={{ display: "flex" }}>
        <input
          {...{
            ref: inputRef,
            size: 4,
            style: {
              padding: 8,
            },
            ...getInputProps(),
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
  },
} satisfies Story;

export const Example2 = {
  render: (args) => {
    const { inputRef, getInputProps, getDecrementProps, getIncrementProps } =
      useNumberInput(args);
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
            ...getInputProps(),
          }}
        />
        <button {...getIncrementProps()} style={{ marginLeft: 4 }}>
          +
        </button>
      </div>
    );
  },
} satisfies Story;

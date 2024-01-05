import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../.storybook/decorators/storyDialog";
import {
  useInput,
  UseInputOptions,
  useInputSiblings,
  UseInputSiblingsOptions,
  useSeparatorInput,
  UseSeparatorInputOptions,
} from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "hook/useInputSiblings",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta;

export default meta;

export const SingleInput: StoryObj<UseInputOptions> = {
  args: {
    autoFocus: true,
    maxLength: 4,
  },
  render: (args) => {
    const { getInputProps } = useInput(args);

    return <input {...getInputProps()} />;
  },
};

export const BirthdateInput: StoryObj<UseSeparatorInputOptions> = {
  args: {
    maxLength: [2, 2, 4],
    separator: "/",
  },
  render: (args) => {
    const { getInputProps } = useSeparatorInput(args);

    return <input size={10} {...getInputProps()} />;
  },
};

export const DayMonthYear: StoryObj<UseInputSiblingsOptions> = {
  render: () => {
    const day = useInput({
      maxLength: 2,
    });
    const month = useInput({
      maxLength: 2,
    });
    const year = useInput({
      maxLength: 4,
    });
    const [getDayInputProps, getMonthInputProps, getYearInputProps] =
      useInputSiblings({ siblings: [day, month, year] });
    return (
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <label htmlFor="day" style={{ fontSize: 12 }}>
              Day
            </label>
          </div>
          <input id="day" size={2} maxLength={2} {...getDayInputProps()} />
        </div>
        <div style={{ marginLeft: 8 }}>
          <div>
            <label htmlFor="month" style={{ fontSize: 12 }}>
              Month
            </label>
          </div>
          <input id="month" size={2} maxLength={2} {...getMonthInputProps()} />
        </div>
        <div style={{ marginLeft: 8 }}>
          <div>
            <label htmlFor="year" style={{ fontSize: 12 }}>
              Year
            </label>
          </div>
          <input id="year" size={4} maxLength={4} {...getYearInputProps()} />
        </div>
      </div>
    );
  },
};

export const CreditCard: StoryObj<UseInputSiblingsOptions> = {
  render: () => {
    const cardNumber = useSeparatorInput({
      maxLength: [4, 4, 4, 4],
      separator: " ",
    });
    const expiration = useSeparatorInput({ maxLength: [2, 2] });
    const ccv = useInput({ maxLength: 4 });
    const inputs = useInputSiblings({
      siblings: [cardNumber, expiration, ccv],
    });
    return (
      <>
        <div>
          <div>
            <label htmlFor="card-number" style={{ fontSize: 12 }}>
              Card Number
            </label>
          </div>
          <input id="card-number" size={19} maxLength={19} {...inputs[0]()} />
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <label htmlFor="exp" style={{ fontSize: 12 }}>
                Expiration
              </label>
            </div>
            <input
              id="exp"
              size={5}
              maxLength={5}
              placeholder="MM/YY"
              {...inputs[1]()}
            />
          </div>
          <div style={{ marginLeft: 8 }}>
            <div>
              <label htmlFor="ccv" style={{ fontSize: 12 }}>
                CCV
              </label>
            </div>
            <input id="ccv" size={3} maxLength={4} {...inputs[2]()} />
          </div>
        </div>
      </>
    );
  },
};

export const Pin: StoryObj<UseInputSiblingsOptions> = {
  render: () => {
    const first = useInput({ maxLength: 1 });
    const second = useInput({ maxLength: 1 });
    const third = useInput({ maxLength: 1 });
    const last = useInput({ maxLength: 1 });

    const inputs = useInputSiblings({ siblings: [first, second, third, last] });
    return (
      <div style={{ display: "flex" }}>
        <input size={1} {...inputs[0]()} />
        <input size={1} {...inputs[1]()} style={{ marginLeft: 4 }} />
        <input size={1} {...inputs[2]()} style={{ marginLeft: 4 }} />
        <input size={1} {...inputs[3]()} style={{ marginLeft: 4 }} />
      </div>
    );
  },
};

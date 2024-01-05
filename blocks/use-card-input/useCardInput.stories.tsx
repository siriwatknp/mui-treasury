import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { useCardInput, UseCardInputOptions } from "./useCardInput";

const meta = {
  title: "Hook/useCardInput",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<UseCardInputOptions>;

export default meta;
type Story = StoryObj<UseCardInputOptions>;

export const Input: Story = {
  render: (args) => {
    const {
      getCardNameInputProps,
      getCardNumberInputProps,
      getExpInputProps,
      getCSCInputProps,
    } = useCardInput(args);
    return (
      <>
        <div>
          <div>
            <label htmlFor="card-number" style={{ fontSize: 12 }}>
              Card Name
            </label>
          </div>
          <input id="card-name" {...getCardNameInputProps()} />
        </div>
        <div>
          <div>
            <label htmlFor="card-number" style={{ fontSize: 12 }}>
              Card Number
            </label>
          </div>
          <input id="card-number" {...getCardNumberInputProps()} />
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <label htmlFor="exp" style={{ fontSize: 12 }}>
                Expiration
              </label>
            </div>
            <input id="exp" {...getExpInputProps()} />
          </div>
          <div style={{ marginLeft: 8 }}>
            <div>
              <label htmlFor="ccv" style={{ fontSize: 12 }}>
                CCV
              </label>
            </div>
            <input id="ccv" {...getCSCInputProps()} />
          </div>
        </div>
      </>
    );
  },
};

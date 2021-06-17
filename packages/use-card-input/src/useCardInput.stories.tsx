import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  useCardInput,
  UseCardInputOptions,
} from "@mui-treasury/use-card-input";

export default {
  title: "Hook/useCardInput",
  argTypes: {
    onChange: {
      action: "change",
    },
    onBlur: {
      action: "blur",
    },
  },
  args: {
    autoFocus: false,
    cardSeparator: " ",
    fullYear: false,
  },
} as Meta;

export const CreditCard: Story<Partial<UseCardInputOptions>> = (args) => {
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
};

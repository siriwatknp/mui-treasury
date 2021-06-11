import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  useInput,
  UseInputOptions,
  useInputSiblings,
  UseInputSiblingsOptions,
  useSeparatorInput,
  UseSeparatorInputOptions,
} from "@mui-treasury/use-input-siblings";

export default {
  title: "Hook/useInputSiblings",
} as Meta;

export const SingleInput: Story<Partial<UseInputOptions>> = (props) => {
  const { getInputProps } = useInput({ maxLength: 4, ...props });

  return <input {...getInputProps()} />;
};
SingleInput.args = {
  autoFocus: true,
};

export const BirthdateInput: Story<Partial<UseSeparatorInputOptions>> = (
  props
) => {
  const { getInputProps } = useSeparatorInput({
    maxLength: [2, 2, 4],
    ...props,
  });

  return <input size={10} maxLength={10} {...getInputProps()} />;
};
BirthdateInput.args = {
  separator: "/",
};

export const DayMonthYear: Story<Partial<UseInputSiblingsOptions>> = (
  props
) => {
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
};

export const CreditCard: Story<Partial<UseInputSiblingsOptions>> = (props) => {
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
};

export const Pin = () => {
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
};

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  useInput,
  UseInputOptions,
  useInputSiblings,
  UseInputSiblingsOptions,
} from "./useInputSiblings";

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
  const {
    inputs: [getDayInputProps, getMonthInputProps, getYearInputProps],
  } = useInputSiblings({ siblings: [day, month, year] });
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div>
          <label htmlFor="day" style={{ fontSize: 12 }}>
            Day
          </label>
        </div>
        <input id="day" {...getDayInputProps()} />
      </div>
      <div style={{ marginLeft: 8 }}>
        <div>
          <label htmlFor="month" style={{ fontSize: 12 }}>
            Month
          </label>
        </div>
        <input id="month" {...getMonthInputProps()} />
      </div>
      <div style={{ marginLeft: 8 }}>
        <div>
          <label htmlFor="year" style={{ fontSize: 12 }}>
            Year
          </label>
        </div>
        <input id="year" {...getYearInputProps()} />
      </div>
    </div>
  );
};

export const CreditCard: Story<Partial<UseInputSiblingsOptions>> = (props) => {
  const set1 = useInput({
    maxLength: 4,
  });
  const set2 = useInput({
    maxLength: 4,
  });
  const set3 = useInput({
    maxLength: 4,
  });
  const set4 = useInput({
    maxLength: 4,
  });
  const expMonth = useInput({
    maxLength: 2,
  });
  const expYear = useInput({
    maxLength: 2,
  });
  const ccv = useInput({
    maxLength: 3,
  });
  const { inputs } = useInputSiblings({
    siblings: [set1, set2, set3, set4, expMonth, expYear, ccv],
  });
  return (
    <>
      <div style={{ display: "flex" }}>
        <input id="set1" {...inputs[0]()} />
        <input id="set2" {...inputs[1]()} />
        <input id="set3" {...inputs[2]()} />
        <input id="set4" {...inputs[3]()} />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <label htmlFor="expMonth" style={{ fontSize: 12 }}>
                Month
              </label>
            </div>
            <input id="expMonth" {...inputs[4]()} />
          </div>
          <span>/</span>
          <div>
            <div>
              <label htmlFor="expYear" style={{ fontSize: 12 }}>
                Year
              </label>
            </div>
            <input id="expYear" {...inputs[5]()} />
          </div>
        </div>
        <div style={{ marginLeft: 8 }}>
          <div>
            <label htmlFor="ccv" style={{ fontSize: 12 }}>
              CCV
            </label>
          </div>
          <input id="ccv" {...inputs[6]()} />
        </div>
      </div>
    </>
  );
};

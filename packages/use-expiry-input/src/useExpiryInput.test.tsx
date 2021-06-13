import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useExpiryInput, UseExpiryInputOptions } from "./useExpiryInput";

describe("useExpiryInput", () => {
  const ExpiryInput = (props: Partial<UseExpiryInputOptions>) => {
    const { getInputProps } = useExpiryInput(props);
    return (
      <div>
        <label htmlFor="expiry">expiry</label>
        <input id="expiry" {...getInputProps()} />
      </div>
    );
  };
  const getInput = () => screen.getByLabelText("expiry");
  it("has expected html attributes", () => {
    render(<ExpiryInput />);

    expect(getInput()).toHaveAttribute("size", "5");
    expect(getInput()).toHaveAttribute("inputmode", "numeric");
    expect(getInput()).toHaveAttribute("type", "tel");
  });

  it("append zero if type separator", () => {
    render(<ExpiryInput />);

    userEvent.type(getInput(), "2/");
    expect(getInput()).toHaveValue("02/");
  });

  it("format defaultValue", () => {
    render(<ExpiryInput defaultValue={{ expMonth: 9, expYear: 30 }} />);

    expect(getInput()).toHaveValue("09/30");
  });

  it("call onChange with expiry object", () => {
    const onChange = jest.fn();
    render(<ExpiryInput onChange={onChange} />);

    userEvent.type(getInput(), "0427");
    expect(onChange).toHaveBeenCalledWith(
      { expMonth: 4, expYear: 27 },
      { invalid: false }
    );
  });

  it("use fullYear format", () => {
    const onChange = jest.fn();
    render(
      <ExpiryInput
        fullYear
        value={{ expMonth: 7, expYear: 2031 }}
        onChange={onChange}
      />
    );

    expect(getInput()).toHaveValue("07/2031");

    userEvent.clear(getInput());

    expect(onChange).toHaveBeenCalledWith(
      {
        expMonth: undefined,
        expYear: undefined,
      },
      { invalid: true }
    );

    userEvent.type(getInput(), "112027");

    expect(onChange).toHaveBeenCalledWith(
      { expMonth: 11, expYear: 2027 },
      { invalid: false }
    );
  });
});

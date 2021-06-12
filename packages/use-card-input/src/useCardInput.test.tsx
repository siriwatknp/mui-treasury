import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useCardInput, UseCardInputOptions } from "./useCardInput";

describe("useCardInput", () => {
  const CreditCard = (props?: Partial<UseCardInputOptions>) => {
    const { getCardInputProps, getExpInputProps, getCCVInputProps } =
      useCardInput(props);
    return (
      <div>
        <label htmlFor="card-number">card</label>
        <input id="card-number" {...getCardInputProps()} />

        <label htmlFor="exp">exp</label>
        <input id="exp" {...getExpInputProps()} />

        <label htmlFor="ccv">ccv</label>
        <input id="ccv" {...getCCVInputProps()} />
      </div>
    );
  };
  const getInput = (type: "card" | "exp" | "ccv") =>
    screen.getByLabelText(type);

  describe("user input", () => {
    it("can fill card number", () => {
      render(<CreditCard />);

      userEvent.type(getInput("card"), "1111222233334444");
      expect(getInput("card")).toHaveValue("1111 2222 3333 4444");
    });

    it("can fill expiration month and year", () => {
      render(<CreditCard />);

      userEvent.type(getInput("exp"), "1025"); // 10=month, 25=year
      expect(getInput("exp")).toHaveValue("10/25");
    });

    it("can fill ccv", () => {
      render(<CreditCard />);

      userEvent.type(getInput("ccv"), "1234");
      expect(getInput("ccv")).toHaveValue("1234");
    });

    it("accept only number format", () => {
      render(<CreditCard />);

      userEvent.type(getInput("card"), "abc");
      expect(getInput("card")).toHaveValue("");

      userEvent.type(getInput("exp"), "abc");
      expect(getInput("exp")).toHaveValue("");

      userEvent.type(getInput("ccv"), "abc");
      expect(getInput("ccv")).toHaveValue("");
    });
  });

  it("focus next input after user input", () => {
    render(<CreditCard />);

    userEvent.type(getInput("card"), "1111222233334444");
    expect(getInput("exp")).toHaveFocus();

    userEvent.type(getInput("ccv"), "1025");
    expect(getInput("ccv")).toHaveFocus();
  });

  describe("value & onChange", () => {
    it("receive default value", () => {
      render(
        <CreditCard
          defaultValue={{
            cardNumber: "4242424242424242",
            expMonth: 2,
            expYear: 25,
            ccv: "123",
          }}
        />
      );

      expect(getInput("card")).toHaveValue("4242 4242 4242 4242");
      expect(getInput("exp")).toHaveValue("02/25");
      expect(getInput("ccv")).toHaveValue("123");
    });

    it("call onChange with card value", () => {
      const onChange = jest.fn();
      render(<CreditCard onChange={onChange} />);

      userEvent.type(getInput("card"), "4111111111111111");

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ cardNumber: "4111111111111111" })
      );

      userEvent.type(getInput("exp"), "4/26");

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ expMonth: 4, expYear: 26 })
      );
    });
  });
});

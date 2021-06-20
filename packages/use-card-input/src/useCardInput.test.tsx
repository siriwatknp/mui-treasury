import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useCardInput, UseCardInputOptions } from "./useCardInput";

describe("useCardInput", () => {
  const CreditCard = (props?: Partial<UseCardInputOptions>) => {
    const {
      getCardNameInputProps,
      getCardNumberInputProps,
      getExpInputProps,
      getCSCInputProps,
    } = useCardInput(props);
    return (
      <div>
        <label htmlFor="card-name">name</label>
        <input id="card-name" {...getCardNameInputProps()} />

        <label htmlFor="card-number">card</label>
        <input id="card-number" {...getCardNumberInputProps()} />

        <label htmlFor="exp">exp</label>
        <input id="exp" {...getExpInputProps()} />

        <label htmlFor="csc">csc</label>
        <input id="csc" {...getCSCInputProps()} />
      </div>
    );
  };
  const getInput = (type: "name" | "card" | "exp" | "csc") =>
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

    it("can fill csc", () => {
      render(<CreditCard />);

      userEvent.type(getInput("csc"), "1234");
      expect(getInput("csc")).toHaveValue("1234");
    });
  });

  it("focus next input after user input", () => {
    render(<CreditCard />);

    userEvent.type(getInput("card"), "1111222233334444");
    expect(getInput("exp")).toHaveFocus();

    userEvent.type(getInput("csc"), "1025");
    expect(getInput("csc")).toHaveFocus();
  });

  describe("value & onChange", () => {
    it("receive default value", () => {
      render(
        <CreditCard
          defaultValue={{
            cardNumber: "4242424242424242",
            expMonth: 2,
            expYear: 25,
            csc: "123",
          }}
        />
      );

      expect(getInput("card")).toHaveValue("4242 4242 4242 4242");
      expect(getInput("exp")).toHaveValue("02/25");
      expect(getInput("csc")).toHaveValue("123");
    });

    it("call onChange with card value", () => {
      const onChange = jest.fn();
      render(<CreditCard onChange={onChange} />);

      userEvent.type(getInput("name"), "John Doe");

      userEvent.tab();

      // should focus on CardNumber
      userEvent.type(document.activeElement as Element, "4111111111111111");

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ cardNumber: "4111111111111111" }),
        expect.objectContaining({
          invalid: true,
          invalidFields: {
            ccName: false,
            ccNumber: false,
            ccExp: true,
            ccSecurity: true,
          },
        })
      );

      // should focus on Exp
      userEvent.type(document.activeElement as Element, "4/26");

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ expMonth: 4, expYear: 26 }),
        expect.objectContaining({
          invalid: true,
          invalidFields: {
            ccName: false,
            ccNumber: false,
            ccExp: false,
            ccSecurity: true,
          },
        })
      );

      // should focus on CSC
      userEvent.type(document.activeElement as Element, "235");
      expect(onChange).toHaveBeenCalledWith(
        {
          cardName: "John Doe",
          cardNumber: "4111111111111111",
          expMonth: 4,
          expYear: 26,
          csc: "235",
        },
        {
          invalid: false,
          invalidFields: {
            ccName: false,
            ccNumber: false,
            ccExp: false,
            ccSecurity: false,
          },
        }
      );
    });
  });
});

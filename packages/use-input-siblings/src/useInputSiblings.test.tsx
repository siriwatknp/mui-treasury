import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  useInput,
  useTwoNumbersInput,
  UseInputOptions,
  UseTwoNumbersInputOptions,
  useSeparatorInput,
  UseSeparatorInputOptions,
  useInputSiblings,
} from "./index";

describe("useInput", () => {
  const Input = (props?: Partial<UseInputOptions>) => {
    const { getInputProps } = useInput({ maxLength: 4, ...props });

    return <input {...getInputProps()} />;
  };
  const getInput = () => screen.getByRole("textbox");

  it("accept defaultValue", () => {
    render(<Input defaultValue="hello" />);

    expect(getInput()).toHaveValue("hell");
  });

  it("cannot type more than maxLength", () => {
    render(<Input />);

    userEvent.type(getInput(), "hello");

    expect(getInput()).toHaveValue("hell");
  });

  it("can clear the input even does not pass validator", () => {
    render(
      <Input
        defaultValue="1234"
        validator={(value) => new RegExp(/\d+/).test(value)}
      />
    );

    userEvent.clear(getInput());

    expect(getInput()).toHaveValue("");
  });

  it("sync with value prop", () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <Input value="foo" onChange={onChange} maxLength={10} />
    );

    expect(getInput()).toHaveValue("foo");

    userEvent.type(getInput(), "bar");

    expect(onChange).toHaveBeenLastCalledWith("foobar");
    expect(getInput()).toHaveValue("foobar");

    rerender(<Input value="new" />);

    expect(getInput()).toHaveValue("new");
  });

  it("validate value before change", () => {
    render(<Input validator={(value) => new RegExp(/^\d+$/).test(value)} />);

    userEvent.type(getInput(), "1Y2");
    expect(getInput()).toHaveValue("12");
  });

  it("autofocus at mount", () => {
    render(<Input autoFocus />);

    expect(getInput()).toHaveFocus();
  });

  it("access to DOM", () => {
    const AutoFocusInput = (props?: Partial<UseInputOptions>) => {
      const { getInputProps, getDOM } = useInput({ maxLength: 4, ...props });

      React.useEffect(() => {
        const DOM = getDOM();
        if (DOM) {
          DOM.focus();
        }
      }, []);

      return <input {...getInputProps()} />;
    };

    render(<AutoFocusInput />);

    expect(getInput()).toHaveFocus();
  });

  it("call onChange handler", () => {
    const onChange = jest.fn();
    const Input = (props?: Partial<UseInputOptions>) => {
      const { getInputProps } = useInput({ maxLength: 4, ...props });

      return <input {...getInputProps({ onChange })} />;
    };

    render(<Input />);

    userEvent.type(getInput(), "A");

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "A",
        }),
      })
    );
  });
});

describe("useTwoNumbersInput", () => {
  const Input = (props?: Partial<UseTwoNumbersInputOptions>) => {
    const { getInputProps } = useTwoNumbersInput(props);

    return <input {...getInputProps()} />;
  };
  const getInput = () => screen.getByRole("textbox");

  it("should prepend zero onBlur with 1 number", () => {
    render(<Input />);

    userEvent.type(getInput(), "1");

    act(() => {
      getInput().blur();
    });

    expect(getInput()).toHaveValue("01");
  });

  it("prepend zero for defaultValue", () => {
    render(<Input defaultValue="7" />);

    expect(getInput()).toHaveValue("07");
  });

  it("prepend zero for value and sync", () => {
    const { rerender } = render(<Input value="12" />);

    expect(getInput()).toHaveValue("12");

    rerender(<Input value="4" />);

    expect(getInput()).toHaveValue("04");
  });
});

describe("useInputSiblings", () => {
  const onBlur = jest.fn();
  const UI = (props?: {
    defaultValue?: Partial<Record<"day" | "month" | "year", string>>;
  }) => {
    const day = useInput({
      maxLength: 2,
      defaultValue: props?.defaultValue?.day,
    });
    const month = useInput({
      maxLength: 2,
      defaultValue: props?.defaultValue?.month,
    });
    const year = useInput({
      maxLength: 4,
      defaultValue: props?.defaultValue?.year,
    });
    const [getDayInputProps, getMonthInputProps, getYearInputProps] =
      useInputSiblings({ siblings: [day, month, year], onBlur });

    return (
      <div>
        <label htmlFor="day">day</label>
        <input id="day" {...getDayInputProps()} />
        <label htmlFor="month">month</label>
        <input id="month" {...getMonthInputProps()} />
        <label htmlFor="year">year</label>
        <input id="year" {...getYearInputProps()} />
      </div>
    );
  };
  const getInput = (element: "day" | "month" | "year") =>
    screen.getByLabelText(element);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("auto-focus", () => {
    it("auto focus on Month after type two chars in Day", () => {
      render(<UI />);

      userEvent.type(getInput("day"), "10");
      expect(getInput("day")).toHaveValue("10");
      expect(getInput("month")).toHaveFocus();
    });

    it("auto focus on Year after type two chars in Month", () => {
      render(<UI />);

      userEvent.type(getInput("month"), "02");
      expect(getInput("month")).toHaveValue("02");
      expect(getInput("year")).toHaveFocus();
    });
  });

  describe("⌫ backspace", () => {
    it("backspace first char on Month should still focus on Day", () => {
      render(<UI defaultValue={{ day: "10" }} />);

      userEvent.type(getInput("month"), "1{backspace}");
      expect(getInput("month")).toHaveValue("");
      expect(getInput("month")).toHaveFocus();
    });

    it("backspace on empty Month should auto focus on Day and remove 1 char", () => {
      render(<UI defaultValue={{ day: "20" }} />);

      userEvent.type(getInput("month"), "{backspace}");

      expect(getInput("day")).toHaveFocus();
      expect(getInput("day")).toHaveValue("2");
    });

    it("backspace first char on Year should still focus on Year", () => {
      render(<UI />);

      userEvent.type(getInput("year"), "2{backspace}");
      expect(getInput("year")).toHaveValue("");
      expect(getInput("year")).toHaveFocus();
    });

    it("backspace on empty Year should auto focus on Month and remove 1 char", () => {
      render(<UI defaultValue={{ month: "02" }} />);

      userEvent.type(getInput("year"), "{backspace}");

      expect(getInput("month")).toHaveFocus();
      expect(getInput("month")).toHaveValue("0");
    });
  });

  it("only call onBlur if activeElement is not one of the inputs", async () => {
    render(<UI />);

    userEvent.click(getInput("day"));
    expect(getInput("day")).toHaveFocus();
    expect(onBlur).not.toHaveBeenCalled();

    userEvent.tab();
    expect(getInput("month")).toHaveFocus();
    expect(onBlur).not.toHaveBeenCalled();

    userEvent.tab();
    expect(getInput("year")).toHaveFocus();
    expect(onBlur).not.toHaveBeenCalled();

    act(() => {
      getInput("year").blur();
    });
    await waitFor(() => {
      expect(onBlur).toHaveBeenCalled();
    });
  });
});

describe("useSeparatorInput", () => {
  const BirthdateInput = (props?: Partial<UseSeparatorInputOptions>) => {
    const { getInputProps } = useSeparatorInput({
      maxLength: [2, 2, 4],
      ...props,
    });
    return (
      <div>
        <label htmlFor="birthdate">birthdate</label>
        <input id="birthdate" {...getInputProps()} />
      </div>
    );
  };
  const getInput = () => screen.getByLabelText("birthdate");

  it("receive default value as string", () => {
    render(<BirthdateInput defaultValue="10/01/2000400" />);

    expect(getInput()).toHaveValue("10/01/2000");
  });

  it("allow maxLength characters including separator", () => {
    render(<BirthdateInput />);

    userEvent.type(getInput(), "10012000500");

    expect(getInput()).toHaveValue("10/01/2000");
  });

  it("can be cleared", () => {
    render(
      <BirthdateInput
        defaultValue="10/02"
        validator={(value) => new RegExp(/(\d|\/)/).test(value.substr(-1))}
      />
    );

    userEvent.clear(getInput());

    expect(getInput()).toHaveValue("");
  });

  it("append separator to initial value", () => {
    render(<BirthdateInput value="10/01" />);

    expect(getInput()).toHaveValue("10/01/");
  });

  it("only reflect change if it pass validator", () => {
    render(
      <BirthdateInput
        validator={(value) => new RegExp(/\d/).test(value.substr(-1))}
      />
    );

    userEvent.type(getInput(), "a10cd/0a4");

    expect(getInput()).toHaveValue("10/04/");
  });

  it("insert separator at third and fifth position", () => {
    render(<BirthdateInput defaultValue="1" />);

    expect(getInput()).toHaveValue("1");

    userEvent.type(getInput(), "0");
    expect(getInput()).toHaveValue("10/");

    userEvent.type(getInput(), "01");
    expect(getInput()).toHaveValue("10/01/");
  });

  describe("⌫ backspace", () => {
    it("backspace on the first character", () => {
      render(<BirthdateInput />);

      userEvent.type(getInput(), "1{backspace}");
      expect(getInput()).toHaveValue("");
    });

    it("backspace on separator should also remove second character", () => {
      render(<BirthdateInput defaultValue="10/" />);

      userEvent.type(getInput(), "{backspace}");
      expect(getInput()).toHaveValue("1");
    });

    it("backspace on separator should also remove fifth character", () => {
      render(<BirthdateInput defaultValue="10/01/" />);

      userEvent.type(getInput(), "{backspace}");
      expect(getInput()).toHaveValue("10/0");
    });
  });

  it("call onChange with the value", () => {
    const onChange = jest.fn();
    render(<BirthdateInput onChange={onChange} />);

    userEvent.type(getInput(), "02");
    expect(onChange).toHaveBeenLastCalledWith("02/");
  });

  it("call all handlers", () => {
    const onChange = jest.fn();
    const onKeyDown = jest.fn();
    const Input = () => {
      const { getInputProps } = useSeparatorInput({ maxLength: [2, 2, 4] });
      return (
        <div>
          <label htmlFor="birthdate">birthdate</label>
          <input id="birthdate" {...getInputProps({ onChange, onKeyDown })} />
        </div>
      );
    };

    render(<Input />);

    userEvent.type(getInput(), "10");
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "10/" }),
      })
    );
    expect(onKeyDown).toHaveBeenCalledTimes(2);
  });
});

describe("Credit Card", () => {
  const CreditCard = () => {
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
      <div>
        <label htmlFor="card" style={{ fontSize: 12 }}>
          Card Number
        </label>
        <input id="card" {...inputs[0]()} />
        <label htmlFor="exp" style={{ fontSize: 12 }}>
          Expiration
        </label>
        <input id="exp" placeholder="MM/YY" {...inputs[1]()} />
        <label htmlFor="ccv" style={{ fontSize: 12 }}>
          CCV
        </label>
        <input id="ccv" {...inputs[2]()} />
      </div>
    );
  };
  const getInput = (type: "Card Number" | "Expiration" | "CCV") =>
    screen.getByLabelText(type);

  it("able to type in card and backspace", () => {
    render(<CreditCard />);

    userEvent.type(getInput("Card Number"), "1111222");
    expect(getInput("Card Number")).toHaveValue("1111 222");

    userEvent.type(
      getInput("Card Number"),
      "{backspace}{backspace}{backspace}{backspace}"
    );
    expect(getInput("Card Number")).toHaveValue("111");
  });

  it("able to type in expiration and backspace", () => {
    render(<CreditCard />);

    userEvent.type(getInput("Expiration"), "122");
    expect(getInput("Expiration")).toHaveValue("12/2");

    userEvent.type(getInput("Expiration"), "{backspace}{backspace}");
    expect(getInput("Expiration")).toHaveValue("1");
  });

  it("auto jumping between input", () => {
    render(<CreditCard />);

    userEvent.type(getInput("Card Number"), "1111222233334444");
    expect(getInput("Card Number")).toHaveValue("1111 2222 3333 4444");

    expect(getInput("Expiration")).toHaveFocus();

    userEvent.type(getInput("Expiration"), "1220");
    expect(getInput("Expiration")).toHaveValue("12/20");

    expect(getInput("CCV")).toHaveFocus();

    userEvent.type(getInput("CCV"), "123");
    expect(getInput("CCV")).toHaveValue("123");

    userEvent.type(
      getInput("CCV"),
      "{backspace}{backspace}{backspace}{backspace}"
    );

    expect(getInput("Expiration")).toHaveFocus();
    expect(getInput("Expiration")).toHaveValue("12/2");

    userEvent.type(
      getInput("CCV"),
      "{backspace}{backspace}{backspace}{backspace}"
    );

    expect(getInput("Card Number")).toHaveFocus();
    expect(getInput("Card Number")).toHaveValue("1111 2222 3333 444");
  });
});

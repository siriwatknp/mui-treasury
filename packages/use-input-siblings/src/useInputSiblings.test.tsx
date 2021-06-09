import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  useInput,
  useTwoNumbersInput,
  useInputSiblings,
  UseInputOptions,
  UseTwoNumbersInputOptions,
} from "./useInputSiblings";

describe("useInput", () => {
  const Input = (props?: Partial<UseInputOptions>) => {
    const { getInputProps } = useInput({ maxLength: 4, ...props });

    return <input {...getInputProps()} />;
  };
  const getInput = () => screen.getByRole("textbox");
  it("has correct a11y props", () => {
    render(<Input />);

    expect(getInput()).toHaveAttribute("maxlength", "4");
    expect(getInput()).toHaveAttribute("size", "4");
  });

  it("accept defaultValue", () => {
    render(<Input defaultValue="hello" />);

    expect(getInput()).toHaveValue("hello");
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
    const {
      inputs: [getDayInputProps, getMonthInputProps, getYearInputProps],
    } = useInputSiblings({ siblings: [day, month, year], onBlur });

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

  it("only call onBlur if activeElement is not one of the inputs", () => {
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
    waitFor(() => {
      expect(onBlur).toHaveBeenCalled();
    });
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  useInput,
  useInputSiblings,
  UseInputOptions,
} from "./useInputSiblings";

const Input = (props?: Partial<UseInputOptions>) => {
  const { getInputProps } = useInput({ maxLength: 4, ...props });

  return <input {...getInputProps()} />;
};

describe("useInputSiblings", () => {
  const getInput = () => screen.getByRole("textbox");
  it("has correct a11y props", () => {
    render(<Input />);

    expect(getInput()).toHaveAttribute("maxlength", "4");
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
});

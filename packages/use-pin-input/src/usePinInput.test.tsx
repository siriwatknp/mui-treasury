import React from "react";
import {
  act,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePinInput, UsePinInputOptions } from "./usePinInput";

describe("usePinInput", () => {
  const Input = (props?: Partial<UsePinInputOptions>) => {
    const { pins } = usePinInput({
      ...props,
      pinLength: 4,
    });

    return (
      <div>
        {pins.map((getInputProps, index) => (
          <input
            key={index}
            data-testid={`pin-${index}`}
            {...getInputProps()}
          />
        ))}
      </div>
    );
  };
  const getInput = (index: number) => screen.getByTestId(`pin-${index}`);

  it("prop: mask is true", () => {
    render(<Input mask />);
    expect(getInput(0)).toHaveAttribute("type", "password");
  });

  it("prop: otp is true", () => {
    render(<Input otp />);
    expect(getInput(0)).toHaveAttribute("autocomplete", "one-time-code");
  });

  it("prop: autoFocus", () => {
    render(<Input autoFocus defaultValue="1234" />);
    expect(getInput(0)).toHaveFocus();
    // @ts-ignore
    expect(getInput(0).selectionEnd).toEqual(1);
  });

  describe("copy & paste to one of the pin", () => {
    it("less than total pins", () => {
      render(<Input />);

      fireEvent.change(getInput(2), { target: { value: "012" } });

      [0, 1, 2].forEach((index) => {
        expect(getInput(index)).toHaveValue(`${index}`);
      });
      expect(getInput(3)).toHaveValue("");
      // should focus at the end
      expect(getInput(3)).toHaveFocus();
    });

    it("more than total pins", () => {
      render(<Input />);

      fireEvent.change(getInput(2), { target: { value: "0123456" } });

      [0, 1, 2, 3].forEach((index) => {
        expect(getInput(index)).toHaveValue(`${index}`);
      });
      // should focus at the end
      expect(getInput(3)).toHaveFocus();
    });

    it('prop: type="number", capture only number', () => {
      render(<Input />);

      fireEvent.change(getInput(1), { target: { value: "0a12b34f6" } });

      [0, 1, 2, 3].forEach((index) => {
        expect(getInput(index)).toHaveValue(`${index}`);
      });
      // should focus at the end
      expect(getInput(3)).toHaveFocus();
    });
  });

  it("call onChange with user pin input", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);

    userEvent.type(getInput(0), "3562");

    expect(onChange).toHaveBeenLastCalledWith("3562");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("call onBlur after leave last pin", async () => {
    const onBlur = jest.fn();
    render(<Input onBlur={onBlur} />);

    userEvent.type(getInput(0), "3562");

    expect(onBlur).not.toHaveBeenCalled();

    act(() => {
      getInput(3).blur();
    });
    await waitFor(() => {
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe("type: alphanumeric", () => {
    it("able to type [0-9a-zA-Z]", () => {
      const onChange = jest.fn();
      render(<Input onChange={onChange} type="alphanumeric" />);

      const strokes = ["J", "4", "K", "x"];
      userEvent.type(getInput(0), strokes.join(""));
      strokes.forEach((s, index) => {
        expect(getInput(index)).toHaveValue(s);
      });
      expect(onChange).toHaveBeenLastCalledWith(strokes.join(""));
    });
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberInput } from "./NumberInput";
import { act } from "react-dom/test-utils";

describe("NumberInput", () => {
  function getElements() {
    return {
      incrementBtn: screen.getAllByRole("button")[0] as HTMLButtonElement,
      decrementBtn: screen.getAllByRole("button")[1] as HTMLButtonElement,
      input: screen.getByRole("spinbutton") as HTMLInputElement,
    };
  }
  it("renders without clash", () => {
    expect(() => render(<NumberInput />)).not.toThrow();
  });

  it("contains spinner 2 buttons (increment/decrement)", () => {
    render(<NumberInput />);

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("spinner buttons has tabIndex -1", () => {
    render(<NumberInput />);

    screen.getAllByRole("button").forEach((element) => {
      expect(element.tabIndex).toBe(-1);
    });
  });

  describe("♿️ a11y", () => {
    it("has necessary spinbutton accessibility", () => {
      render(<NumberInput />);

      const elms = getElements();

      expect(elms.input).toHaveAttribute("pattern", "[0-9]*(.[0-9]+)?");
      expect(elms.input).toHaveAttribute("autocomplete", "off");
      expect(elms.input).toHaveAttribute("autocorrect", "off");
    });

    it("min, max with defaultValue", () => {
      render(
        <NumberInput
          defaultValue={3.1}
          precision={2}
          step={0.1}
          min={-3}
          max={3}
        />
      );

      const elms = getElements();

      expect(elms.input).toHaveAttribute("aria-valuemin", "-3");
      expect(elms.input).toHaveAttribute("aria-valuemax", "3");
      expect(elms.input).toHaveAttribute("aria-valuetext", "3.10");
      expect(elms.input).toHaveAttribute("aria-valuenow", "3.1");
    });
  });

  describe("Click on buttons", () => {
    it("increment by 1", () => {
      render(<NumberInput />);

      const elms = getElements();

      // before
      expect(elms.input).toHaveValue("");

      // act
      userEvent.click(elms.incrementBtn);

      // result
      expect(elms.input).toHaveValue("1");
    });

    it("decrement by 1", () => {
      render(<NumberInput />);

      const elms = getElements();

      // before
      expect(elms.input).toHaveValue("");

      // act
      userEvent.click(elms.decrementBtn);

      // result
      expect(elms.input).toHaveValue("-1");
    });

    it("keepWithinRange is false, buttons always clickable", () => {
      render(
        <NumberInput keepWithinRange={false} min={5} max={6} defaultValue={5} />
      );

      const elms = getElements();
      // before
      expect(elms.input).toHaveValue("5");

      userEvent.click(elms.incrementBtn);
      userEvent.click(elms.incrementBtn);
      expect(elms.input).toHaveValue("7");

      userEvent.click(elms.decrementBtn);
      userEvent.click(elms.decrementBtn);
      userEvent.click(elms.decrementBtn);
      expect(elms.input).toHaveValue("4");
    });

    it("focusInputOnChange=true, should focus on input after click on button", () => {
      render(<NumberInput />);
      const elms = getElements();
      userEvent.click(elms.incrementBtn);
      expect(elms.input).toHaveFocus();
    });
  });

  describe("Keyboard Arrow Up/Down", () => {
    it("arrow up trigger increment", () => {
      render(<NumberInput defaultValue={5} precision={2} step={0.1} />);

      const elms = getElements();

      // before
      expect(elms.input).toHaveValue("5.00");

      userEvent.type(elms.input, "{arrowup}");

      expect(elms.input).toHaveValue("5.10");
    });

    it("arrow down trigger decrement", () => {
      render(<NumberInput defaultValue={5} precision={2} step={10} />);

      const elms = getElements();

      // before
      expect(elms.input).toHaveValue("5.00");

      userEvent.type(elms.input, "{arrowdown}");

      expect(elms.input).toHaveValue("-5.00");
    });
  });

  describe("Buttons disabled", () => {
    it("increment btn disabled at max", () => {
      render(<NumberInput defaultValue={5} max={5} />);
      const elms = getElements();
      expect(elms.incrementBtn).toBeDisabled();
    });

    it("decrement btn disabled at min", () => {
      render(<NumberInput defaultValue={5} min={5} />);
      const elms = getElements();
      expect(elms.decrementBtn).toBeDisabled();
    });
  });

  describe("change and blur", () => {
    it("only number that reflect change", () => {
      render(<NumberInput />);

      const elms = getElements();
      userEvent.type(elms.input, "num");

      expect(elms.input).toHaveValue("");

      userEvent.type(elms.input, "-10");

      expect(elms.input).toHaveValue("-10");
    });

    it("on blur should remains the same value if valid", () => {
      render(<NumberInput min={5} max={10} defaultValue={7} />);

      const elms = getElements();
      userEvent.click(elms.incrementBtn);
      fireEvent.blur(elms.input);
      expect(elms.input).toHaveValue("8"); // should be max
    });

    it("`clampValueOnBlur=true` revert back to previous valid value on blur", () => {
      render(<NumberInput min={5} max={10} />);

      const elms = getElements();
      userEvent.type(elms.input, "12");
      fireEvent.blur(elms.input);
      expect(elms.input).toHaveValue("10"); // should be max

      userEvent.clear(elms.input);
      userEvent.type(elms.input, "3");
      fireEvent.blur(elms.input);
      expect(elms.input).toHaveValue("5"); // should be min
    });

    it("get change data with eventName", () => {
      const onChange = jest.fn();
      render(
        <NumberInput
          min={5}
          max={10}
          defaultValue={7}
          precision={1}
          onChange={onChange}
        />
      );
      const elms = getElements();

      userEvent.click(elms.incrementBtn);

      expect(onChange).toHaveBeenCalledWith(8, {
        error: null,
        valueText: "8.0",
        eventType: "change",
      });
    });

    it("call onChange with error and event type", () => {
      const onChange = jest.fn();
      render(
        <NumberInput
          min={5}
          max={10}
          step={10}
          defaultValue={7}
          precision={1}
          clampValueOnBlur={false}
          keepWithinRange={false}
          onChange={onChange}
        />
      );
      const elms = getElements();

      userEvent.click(elms.incrementBtn);

      expect(onChange).toHaveBeenLastCalledWith(17, {
        error: "exceed-max",
        valueText: "17.0",
        eventType: "change",
      });

      fireEvent.blur(elms.input);

      expect(onChange).toHaveBeenLastCalledWith(17, {
        error: "exceed-max",
        valueText: "17.0",
        eventType: "blur",
      });
    });
  });

  describe("modifer with metaKey, ctrlKey and shiftKey", () => {
    it("holding shiftKey will increment/decrement in 10 times factor", () => {
      render(<NumberInput defaultValue={1} precision={1} />);

      const elms = getElements();
      userEvent.click(elms.incrementBtn, { shiftKey: true });
      expect(elms.input).toHaveValue("11.0");

      userEvent.click(elms.decrementBtn, { shiftKey: true });
      expect(elms.input).toHaveValue("1.0");
    });

    it("holding metaKey/ctrlKey will increment/decrement in 1/10 times factor", () => {
      render(<NumberInput defaultValue={0} precision={1} />);

      const elms = getElements();
      fireEvent.keyDown(elms.input, {
        key: "ArrowDown",
        keyCode: 40,
        metaKey: true,
      });
      expect(elms.input).toHaveValue("-0.1");

      fireEvent.keyDown(elms.input, {
        key: "ArrowUp",
        keyCode: 38,
        ctrlKey: true,
      });
      expect(elms.input).toHaveValue("0.0");
    });
  });

  describe("formatter & parser", () => {
    it("can format and parse", () => {
      render(
        <NumberInput
          formatter={(valueText) => `$${valueText}`}
          parser={(valueText) => valueText.replace("$", "")}
        />
      );

      const elms = getElements();
      expect(elms.input).toHaveValue("$");

      userEvent.type(elms.input, "10");
      expect(elms.input).toHaveValue("$10");

      // after clear, back to initial
      userEvent.clear(elms.input);
      expect(elms.input).toHaveValue("$");
    });
  });

  describe("Extra handlers", () => {
    const onBlur = jest.fn();
    const onKeyDown = jest.fn();
    const IncrementProps = {
      onMouseDown: jest.fn(),
      onMouseUp: jest.fn(),
    };
    const DecrementProps = {
      onMouseDown: jest.fn(),
      onMouseUp: jest.fn(),
    };
    render(
      <NumberInput
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        IncrementProps={IncrementProps}
        DecrementProps={DecrementProps}
      />
    );

    const elms = getElements();
    // focus
    fireEvent.blur(elms.input);
    expect(onBlur).toHaveBeenCalled();

    // keydown
    userEvent.type(elms.input, "{arrowdown}");
    expect(onKeyDown).toHaveBeenCalledWith(
      expect.objectContaining({
        key: "ArrowDown",
      })
    );

    // Increment
    userEvent.click(elms.incrementBtn);
    expect(IncrementProps.onMouseDown).toHaveBeenCalled();
    expect(IncrementProps.onMouseUp).toHaveBeenCalled();

    // Decrement
    userEvent.click(elms.decrementBtn);
    expect(DecrementProps.onMouseDown).toHaveBeenCalled();
    expect(DecrementProps.onMouseUp).toHaveBeenCalled();
  });

  describe("UI", () => {
    it("can replace custom increment/decrement icon", () => {
      render(
        <NumberInput
          incrementIcon={<div data-testid="custom-increment" />}
          decrementIcon={<div data-testid="custom-decrement" />}
        />
      );

      expect(screen.getByTestId("custom-increment")).toBeInTheDocument();
      expect(screen.getByTestId("custom-decrement")).toBeInTheDocument();
    });
  });
});

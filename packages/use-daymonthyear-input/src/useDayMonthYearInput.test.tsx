import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  useDayMonthYearInput,
  UseDayMonthYearInputOptions,
} from "./useDayMonthYearInput";
import { act } from "react-dom/test-utils";

const UI = (props?: UseDayMonthYearInputOptions) => {
  const { getDayProps, getMonthProps, getYearProps } =
    useDayMonthYearInput(props);
  return (
    <div>
      <label htmlFor="day">day</label>
      <input id="day" {...getDayProps()} />
      <label htmlFor="month">month</label>
      <input id="month" {...getMonthProps()} />
      <label htmlFor="year">year</label>
      <input id="year" {...getYearProps()} />
    </div>
  );
};

describe("useDayMonthYearInput", () => {
  const getInput = (element: "day" | "month" | "year") =>
    screen.getByLabelText(element);

  describe("a11y", () => {
    render(<UI />);

    expect(getInput("day")).toHaveAttribute(
      "pattern",
      "^(^$|[0-9]|0[0-9]|1[0-9]|2[0-9]|3[0-1])$"
    );
    expect(getInput("day")).toHaveAttribute("size", "2");
    expect(getInput("day")).toHaveAttribute("maxlength", "2");
    expect(getInput("day")).toHaveAttribute("type", "tel");

    expect(getInput("month")).toHaveAttribute(
      "pattern",
      "^(^$|[0-9]|0[1-9]|1[0-2])$"
    );
    expect(getInput("month")).toHaveAttribute("size", "2");
    expect(getInput("month")).toHaveAttribute("maxlength", "2");
    expect(getInput("month")).toHaveAttribute("type", "tel");

    expect(getInput("year")).toHaveAttribute(
      "pattern",
      "^(^$|[1-2]|[1-2][0-9]{0,3})$"
    );
    expect(getInput("year")).toHaveAttribute("size", "4");
    expect(getInput("year")).toHaveAttribute("maxlength", "4");
    expect(getInput("year")).toHaveAttribute("type", "tel");
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

  it("should pass default value to inputs", () => {
    render(<UI defaultValue={{ day: "1", month: "3", year: "2020" }} />);
    expect(getInput("day")).toHaveValue("01");
    expect(getInput("month")).toHaveValue("03");
    expect(getInput("year")).toHaveValue("2020");
  });

  describe("prepend zero", () => {
    it("prepend zero to Day if only 1 char type", () => {
      render(<UI />);

      userEvent.type(getInput("day"), "7");
      userEvent.tab();

      expect(getInput("day")).toHaveValue("07");
    });

    it("prepend zero to Month if only 1 char type", () => {
      render(<UI />);

      userEvent.type(getInput("month"), "6");
      userEvent.tab();

      expect(getInput("month")).toHaveValue("06");
    });
  });

  it("call onChange with the updated value", () => {
    const onChange = jest.fn();
    render(<UI onChange={onChange} />);

    userEvent.type(getInput("day"), "7");
    userEvent.tab();
    expect(onChange).toHaveBeenCalledWith({ day: "07", month: "", year: "" });

    userEvent.type(document.activeElement as Element, "2");
    userEvent.tab();
    expect(onChange).toHaveBeenCalledWith({ day: "07", month: "02", year: "" });

    userEvent.type(document.activeElement as Element, "2019");
    expect(onChange).toHaveBeenCalledWith({
      day: "07",
      month: "02",
      year: "2019",
    });
  });

  describe("prop: value", () => {
    it("inputs value sync with `value` prop", () => {
      const { rerender } = render(
        <UI value={{ day: "10", month: "05", year: "2020" }} />
      );

      expect(getInput("day")).toHaveValue("10");
      expect(getInput("month")).toHaveValue("05");
      expect(getInput("year")).toHaveValue("2020");

      rerender(<UI value={{ day: "07", month: "01" }} />);

      expect(getInput("day")).toHaveValue("07");
      expect(getInput("month")).toHaveValue("01");
      expect(getInput("year")).toHaveValue("");
    });
  });

  it("only call onBlur if activeElement is not one of the inputs", () => {
    const onBlur = jest.fn();
    render(<UI onBlur={onBlur} />);

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

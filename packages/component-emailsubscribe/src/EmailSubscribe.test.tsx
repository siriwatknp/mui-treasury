import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Form, Input, Submit } from "./EmailSubscribe";

describe("EmailSubscribe", () => {
  describe("Input", () => {
    it("should have default props", () => {
      const { getByRole } = render(<Input />);
      expect(getByRole("textbox")).toHaveAttribute("required");
      expect(getByRole("textbox")).toHaveAttribute("type", "email");
      expect(getByRole("textbox")).toHaveAttribute("name", "email");
    });
  });

  it("should call onSubmit", () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(
      <Form onSubmit={onSubmit}>
        <Input />
        <Submit />
      </Form>
    );
    fireEvent.change(getByRole("textbox"), {
      target: { value: "siriwat@gmail.com" },
    });
    fireEvent.submit(getByRole("form"));
    expect(onSubmit).toHaveBeenCalledWith("siriwat@gmail.com");
  });
});

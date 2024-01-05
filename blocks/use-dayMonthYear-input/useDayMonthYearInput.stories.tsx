import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import {
  DayMonthYear,
  useDayMonthYearInput,
  UseDayMonthYearInputOptions,
} from "./useDayMonthYearInput";

const meta = {
  title: "Hook/useDayMonthYearInput",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<UseDayMonthYearInputOptions>;

export default meta;
type Story = StoryObj<UseDayMonthYearInputOptions>;

export const NativeInput: Story = {
  render: (args) => {
    const {
      getDayInputProps: getDayProps,
      getMonthInputProps: getMonthProps,
      getYearInputProps: getYearProps,
    } = useDayMonthYearInput(args);
    return (
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <label htmlFor="day" style={{ fontSize: 12 }}>
              Day
            </label>
          </div>
          <input id="day" {...getDayProps()} />
        </div>
        <div style={{ marginLeft: 8 }}>
          <div>
            <label htmlFor="month" style={{ fontSize: 12 }}>
              Month
            </label>
          </div>
          <input id="month" {...getMonthProps()} />
        </div>
        <div style={{ marginLeft: 8 }}>
          <div>
            <label htmlFor="year" style={{ fontSize: 12 }}>
              Year
            </label>
          </div>
          <input id="year" {...getYearProps()} />
        </div>
      </div>
    );
  },
};

const FormikInput = () => {
  const [field, meta, helpers] = useField<DayMonthYear>("dob");
  const {
    getDayInputProps: getDayProps,
    getMonthInputProps: getMonthProps,
    getYearInputProps: getYearProps,
  } = useDayMonthYearInput({
    defaultValue: field.value,
    onChange: (value) => helpers.setValue(value),
    onBlur: () => helpers.setTouched(true),
  });
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <label htmlFor="day" style={{ fontSize: 12 }}>
              Day
            </label>
          </div>
          <input id="day" {...getDayProps()} />
        </div>
        <div style={{ marginLeft: 8 }}>
          <div>
            <label htmlFor="month" style={{ fontSize: 12 }}>
              Month
            </label>
          </div>
          <input id="month" {...getMonthProps()} />
        </div>
        <div style={{ marginLeft: 8 }}>
          <div>
            <label htmlFor="year" style={{ fontSize: 12 }}>
              Year
            </label>
          </div>
          <input id="year" {...getYearProps()} />
        </div>
      </div>
      {/* @ts-expect-error */}
      {meta.touched && meta.error?.day && (
        <div style={{ color: "#ff5252" }}>
          {/* @ts-expect-error */}
          {meta.error.day}
        </div>
      )}
      {/* @ts-expect-error */}
      {meta.touched && meta.error?.month && (
        <div style={{ color: "#ff5252" }}>
          {/* @ts-expect-error */}
          {meta.error.month}
        </div>
      )}
      {/* @ts-expect-error */}
      {meta.touched && meta.error?.year && (
        <div style={{ color: "#ff5252" }}>
          {/* @ts-expect-error */}
          {meta.error.year}
        </div>
      )}
    </>
  );
};

export const FormikIntegration: Story = {
  render: () => {
    return (
      <Formik
        initialValues={{
          dob: undefined,
        }}
        validationSchema={Yup.object({
          dob: Yup.object({
            day: Yup.string().required("Missing day"),
            month: Yup.string().required("Missing month"),
            year: Yup.string().required("Missing year"),
          }),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values || {}, null, 2));
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormikInput />
            <br />
            <button type="submit">submit</button>
          </form>
        )}
      </Formik>
    );
  },
};

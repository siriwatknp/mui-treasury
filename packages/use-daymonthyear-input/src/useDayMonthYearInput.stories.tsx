import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik, useField } from "formik";
import * as Yup from "yup";

import {
  useDayMonthYearInput,
  UseDayMonthYearInputOptions,
  DayMonthYear,
} from "@mui-treasury/use-daymonthyear-input";

export default {
  title: "Hook/useDayMonthYearInput",
  argTypes: {
    onChange: {
      action: "change",
    },
    onBlur: {
      action: "blur",
    },
  },
  args: {
    separator: "/",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const NativeInput: Story<UseDayMonthYearInputOptions> = (args) => {
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
};

const FormikInput = () => {
  const [field, meta, helpers] = useField<DayMonthYear>("dob");
  const {
    getDayInputProps: getDayProps,
    getMonthInputProps: getMonthProps,
    getYearInputProps: getYearProps,
  } = useDayMonthYearInput({
    value: field.value,
    onChange: helpers.setValue,
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

export const FormikIntegration = () => {
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
};

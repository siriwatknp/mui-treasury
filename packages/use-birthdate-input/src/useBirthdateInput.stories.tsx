import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik, useField } from "formik";
import * as Yup from "yup";

import {
  useBirthdateInput,
  UseBirthdateInputOptions,
} from "@mui-treasury/use-birthdate-input";

export default {
  title: "Hook/useBirthdateInput",
  argTypes: {
    onChange: {
      action: "change",
    },
  },
  args: {
    separator: "/",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const NativeInput: Story<UseBirthdateInputOptions> = (args) => {
  const { getInputA11yProps, getInputHandlerProps } = useBirthdateInput(args);
  return (
    <div>
      <div>
        <label htmlFor="birthdate">Birthdate</label>
      </div>
      <input
        id="birthdate"
        {...getInputA11yProps()}
        {...getInputHandlerProps()}
      />
    </div>
  );
};

const FormikInput = () => {
  const [field, meta, helpers] = useField<string>("birthdate");
  const { getInputA11yProps, getInputHandlerProps } = useBirthdateInput({
    onChange: helpers.setValue,
  });
  return (
    <>
      <div>
        <label htmlFor="birthdate">Birthdate</label>
      </div>
      <input
        id="birthdate"
        required
        {...field}
        {...getInputA11yProps()}
        {...getInputHandlerProps()}
      />
      {meta.touched && meta.error ? (
        <div style={{ color: "#ff5252" }}>{meta.error}</div>
      ) : null}
    </>
  );
};

export const FormikIntegration = () => {
  return (
    <Formik
      initialValues={{
        birthdate: "",
      }}
      validationSchema={Yup.object({
        birthdate: Yup.string()
          .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'format must be "DD/MM/YYYY"')
          .required("Required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormikInput />
        </form>
      )}
    </Formik>
  );
};

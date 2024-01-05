import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import { useBirthdateInput, UseBirthdateInputOptions } from ".";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";

const meta = {
  title: "hook/useBirthdateInput",
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
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta;

export default meta;

export const NativeInput: StoryObj<UseBirthdateInputOptions> = {
  render: (args) => {
    const { getInputProps } = useBirthdateInput(args);
    return (
      <div>
        <div>
          <label htmlFor="birthdate">Birthdate</label>
        </div>
        <input id="birthdate" {...getInputProps()} />
      </div>
    );
  },
};

const FormikInput = () => {
  const [field, meta, helpers] = useField<string>("birthdate");
  const { getInputProps } = useBirthdateInput({
    onChange: (value) => helpers.setValue(value),
  });
  return (
    <>
      <div>
        <label htmlFor="birthdate">Birthdate</label>
      </div>
      <input id="birthdate" required {...field} {...getInputProps()} />
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

import React, { useState } from "react";
import { Story, Meta, StoryContext } from "@storybook/react/types-6-0";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

import MailOutlined from "@mui/icons-material/MailOutlined";

import { getTextFieldBootstrapTheme } from "./TextfieldBootstrap.styles";

function withContainer(Story: any, context: StoryContext) {
  return (
    <Box width={320}>
      <Story {...context} />
    </Box>
  );
}

const baseTheme = createTheme({
  typography: {
    fontFamily:
      'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
});
function withTheme(Story: any, context: StoryContext) {
  return (
    <ThemeProvider
      theme={{
        ...baseTheme,
        components: getTextFieldBootstrapTheme(baseTheme),
      }}
    >
      <Story {...context} />
    </ThemeProvider>
  );
}

export default {
  title: "Component/Textfield/Boostrap",
  component: TextField,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["medium", "small"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["standard", "filled", "outlined"],
      },
    },
    margin: {
      control: {
        type: "select",
        options: ["none", "dense", "normal"],
      },
    },
  },
  args: {
    error: false,
    variant: "standard",
    label: "Label",
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
  decorators: [withTheme, withContainer],
} as Meta;

export const Field: Story<TextFieldProps> = (args) => {
  return <TextField {...args}>Children</TextField>;
};
Field.args = {
  placeholder: "Placeholder",
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const FieldError: Story<TextFieldProps> = (args) => {
  return <TextField {...args}>Children</TextField>;
};
FieldError.args = {
  error: true,
  placeholder: "Placeholder",
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const FieldIcon: Story<TextFieldProps> = (args) => {
  return (
    <>
      <TextField
        {...args}
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      >
        Children
      </TextField>
      <br />
      <TextField
        {...args}
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      >
        Children
      </TextField>
    </>
  );
};
FieldIcon.args = {
  placeholder: "Placeholder",
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const SelectField: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextField
      {...args}
      select
      SelectProps={{ displayEmpty: true }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <MenuItem value="">
        <em>Select Option</em>
      </MenuItem>
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </TextField>
  );
};
SelectField.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const SelectError: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextField
      {...args}
      select
      SelectProps={{ displayEmpty: true }}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <MenuItem value="">
        <em>Select Option</em>
      </MenuItem>
      <MenuItem value={1}>Option 1</MenuItem>
      <MenuItem value={2}>Option 2</MenuItem>
      <MenuItem value={3}>Option 3</MenuItem>
    </TextField>
  );
};
SelectError.args = {
  error: true,
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const SelectIcon: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <>
      <TextField
        {...args}
        select
        SelectProps={{ displayEmpty: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
      <br />
      <TextField
        {...args}
        select
        SelectProps={{ displayEmpty: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
        margin="dense"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </TextField>
    </>
  );
};
SelectIcon.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

export const ManuallyCompose: Story<FormControlProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <>
      <FormControl {...args}>
        <InputLabel>Manual Label</InputLabel>
        <Input placeholder="Placeholder" />
        <FormHelperText>Hey! need help</FormHelperText>
      </FormControl>
      <br />
      <FormControl {...args}>
        <InputLabel>Manual Label</InputLabel>
        <Select
          displayEmpty
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>
        <FormHelperText>Hey! need help</FormHelperText>
      </FormControl>
    </>
  );
};
ManuallyCompose.args = {
  error: false,
  size: "medium",
  margin: "normal",
};

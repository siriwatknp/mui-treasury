import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlined from "@material-ui/icons/MailOutlined";
import { createTextfieldTailwindStyles } from "./TextfieldTailwind.styles";
function withContainer(Story, context) {
  return (
    <Box width={320}>
      <Story {...context} />
    </Box>
  );
}
const baseTheme = createTheme({
  shape: {
    borderRadius: "0.375rem",
  },
  typography: {
    fontFamily:
      'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
  palette: {
    grey: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
});
const textfieldStyles = createTextfieldTailwindStyles(baseTheme);
function withTheme(Story, context) {
  return (
    <ThemeProvider
      theme={{
        ...baseTheme,
        components: textfieldStyles,
      }}
    >
      <Story {...context} />
    </ThemeProvider>
  );
}
export default {
  title: "Component/Textfield/Tailwind",
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
    placeholder: "Basic usage",
    required: false,
  },
  parameters: {
    layout: "centered",
  },
  decorators: [withTheme, withContainer],
};
export const InputOnly = (args) => {
  return (
    <Stack spacing={2}>
      <Input {...args} placeholder="Standard" />
      <OutlinedInput {...args} placeholder="Outlined" />
      <FilledInput {...args} placeholder="Filled" />
    </Stack>
  );
};
InputOnly.args = {
  margin: "none",
};
InputOnly.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};
export const InputLabelInside = (args) => {
  return (
    <Stack spacing={2}>
      <FormControl>
        <InputLabel variant="standard">Standard</InputLabel>
        <Input placeholder="Input" {...args} />
      </FormControl>
      <FormControl>
        <InputLabel variant="outlined">Outlined</InputLabel>
        <OutlinedInput placeholder="OutlinedInput" {...args} label="Label" />
      </FormControl>
      <FormControl>
        <InputLabel variant="filled">Filled</InputLabel>
        <FilledInput placeholder="filledInput" {...args} />
      </FormControl>
    </Stack>
  );
};
InputLabelInside.args = {
  margin: "none",
};
InputLabelInside.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};
export const InputLabelOutside = (args) => {
  return (
    <Stack spacing={2}>
      <FormControl>
        <FormLabel>Standard</FormLabel>
        <Input placeholder="Input" {...args} />
      </FormControl>
      <FormControl>
        <FormLabel>Outlined</FormLabel>
        <OutlinedInput placeholder="OutlinedInput" {...args} />
      </FormControl>
      <FormControl>
        <FormLabel>Filled</FormLabel>
        <FilledInput placeholder="filledInput" {...args} />
      </FormControl>
    </Stack>
  );
};
InputLabelOutside.args = {
  margin: "none",
};
InputLabelOutside.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};
export const Field = (args) => {
  return (
    <Stack spacing={2}>
      <TextField {...args} variant="standard" />
      <TextField {...args} variant="outlined" />
      <TextField {...args} variant="filled" />
    </Stack>
  );
};
Field.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};
Field.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};
export const FieldError = (args) => {
  return (
    <Stack spacing={2}>
      <TextField {...args} variant="standard" />
      <TextField {...args} variant="outlined" />
      <TextField {...args} variant="filled" />
    </Stack>
  );
};
FieldError.args = {
  error: true,
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};
export const FieldIconStart = (args) => {
  return (
    <>
      <TextField
        {...args}
        label="Standard"
        margin="dense"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        {...args}
        label="Outlined"
        variant="outlined"
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        {...args}
        label="Filled"
        variant="filled"
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
FieldIconStart.args = {
  placeholder: "Placeholder",
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};
FieldIconStart.argTypes = {
  variant: {
    table: { disable: true },
  },
};
export const FieldIconEnd = (args) => {
  return (
    <>
      <TextField
        {...args}
        label="Standard"
        margin="dense"
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        {...args}
        label="Outlined"
        variant="outlined"
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        {...args}
        label="Filled"
        variant="filled"
        margin="dense"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
FieldIconEnd.args = {
  placeholder: "Placeholder",
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};
FieldIconEnd.argTypes = {
  variant: {
    table: { disable: true },
  },
};
export const SelectField = (args) => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={2}>
      {["standard", "outlined", "filled"].map((variant) => (
        <TextField
          {...args}
          label={variant}
          variant={variant}
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
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
      ))}
    </Stack>
  );
};
SelectField.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};
export const SelectIcon = (args) => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={2}>
      {["standard", "outlined", "filled"].map((variant) => (
        <TextField
          {...args}
          label={variant}
          variant={variant}
          select
          SelectProps={{ displayEmpty: true }}
          InputLabelProps={{ shrink: true }}
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
      ))}
    </Stack>
  );
};
SelectIcon.args = {
  fullWidth: true,
  size: "medium",
  helperText: "This is a helper text",
};

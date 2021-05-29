import React, { useState } from "react";
import { Story, Meta, StoryContext } from "@storybook/react/types-6-0";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import {
  createMenuBootstrapStyles,
  useMenuBootstrapStyles,
} from "./MenuBootstrap.styles";

const baseTheme = createTheme({
  typography: {
    fontFamily:
      'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
});
const textfieldStandardStyles = createMenuBootstrapStyles(baseTheme);
function withTheme(Story: any, context: StoryContext) {
  return (
    <ThemeProvider
      theme={{
        ...baseTheme,
        components: textfieldStandardStyles,
      }}
    >
      <Story {...context} />
    </ThemeProvider>
  );
}

export default {
  title: "Component/Menu/Bootstrap",
  argTypes: {
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
  },
  parameters: {
    layout: "centered",
  },
  decorators: [withTheme],
} as Meta;

export function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        autoFocus={false}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export function MenuListComposition() {
  return (
    <Paper>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Paper>
  );
}

export const SelectField: Story<TextFieldProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextField
      {...args}
      InputLabelProps={{ shrink: true }}
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

export const SelectComponent: Story<FormControlProps> = (args) => {
  const [value, setValue] = useState("");
  return (
    <>
      <FormControl {...args}>
        <InputLabel shrink>Manual Label</InputLabel>
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
SelectComponent.args = {
  fullWidth: true,
  size: "medium",
};

function withBaseTheme(Story: any, context: StoryContext) {
  return (
    <ThemeProvider theme={baseTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
}
export const OutsideTheme = () => {
  const [value, setValue] = useState("");
  const styles = useMenuBootstrapStyles();
  return (
    <>
      <TextField
        select
        margin="normal"
        placeholder="placeholder"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        SelectProps={{
          displayEmpty: true,
          MenuProps: {
            classes: styles.Menu,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              horizontal: "center",
              vertical: "top",
            },
          },
        }}
      >
        <MenuItem classes={styles.MenuItem} value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem classes={styles.MenuItem} value={1}>
          Option 1
        </MenuItem>
        <MenuItem classes={styles.MenuItem} value={2}>
          Option 2
        </MenuItem>
        <MenuItem classes={styles.MenuItem} value={3}>
          Option 3
        </MenuItem>
      </TextField>
      <br />
      <Select
        displayEmpty
        value={value}
        MenuProps={{
          classes: styles.Menu,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            horizontal: "left",
            vertical: "top",
          },
        }}
        onChange={(event) => setValue(event.target.value)}
      >
        <MenuItem classes={styles.MenuItem} value="">
          <em>Select Option</em>
        </MenuItem>
        <MenuItem classes={styles.MenuItem} value={1}>
          Option 1
        </MenuItem>
        <MenuItem classes={styles.MenuItem} value={2}>
          Option 2
        </MenuItem>
        <MenuItem classes={styles.MenuItem} value={3}>
          Option 3
        </MenuItem>
      </Select>
    </>
  );
};
OutsideTheme.decorators = [withBaseTheme];

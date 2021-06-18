import React from "react";
import { Story, Meta, StoryContext } from "@storybook/react/types-6-0";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { createButtonBootstrapStyles } from "./ButtonBootstrap.styles";

const baseTheme = createTheme({
  typography: {
    fontFamily:
      'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
  palette: {
    primary: {
      main: "#0d6efd",
    },
    secondary: {
      main: "#6c757d",
    },
  },
});
const styles = createButtonBootstrapStyles(baseTheme);
function withTheme(Story: any, context: StoryContext) {
  return (
    <ThemeProvider
      theme={{
        ...baseTheme,
        components: styles,
      }}
    >
      <Story {...context} />
    </ThemeProvider>
  );
}

export default {
  title: "Component/Button/Bootstrap",
  component: Button,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
  decorators: [withTheme],
} as Meta;

export const Contained: Story<ButtonProps> = (args) => {
  return (
    <div style={{ gap: 12, display: "flex" }}>
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
    </div>
  );
};
Contained.args = {
  variant: "contained",
};

export const Outlined: Story<ButtonProps> = (args) => {
  return (
    <div style={{ gap: 12, display: "flex" }}>
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
    </div>
  );
};
Outlined.args = {
  variant: "outlined",
};

export const Disabled: Story<ButtonProps> = (args) => {
  return (
    <div style={{ gap: 12, display: "flex" }}>
      <Button {...args} variant="contained">
        Default
      </Button>
      <Button {...args} variant="contained" color="primary">
        Primary
      </Button>
      <Button {...args} variant="contained" color="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outlined">
        Default
      </Button>
      <Button {...args} variant="outlined" color="primary">
        Primary
      </Button>
      <Button {...args} variant="outlined" color="secondary">
        Secondary
      </Button>
    </div>
  );
};
Disabled.args = {
  disabled: true,
};

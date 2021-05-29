import React from "react";
import Button from "@material-ui/core/Button";
import { useButtonBootstrapStyles } from "./ButtonBootstrap.styles";
export default {
  title: "Component/Button/Bootstrap",
  component: Button,
  argTypes: {},
  args: {
    disableTouchRipple: true,
  },
  parameters: {
    layout: "centered",
  },
};
export const Contained = (args) => {
  const classes = useButtonBootstrapStyles();
  return (
    <div style={{ gap: 12, display: "flex" }}>
      <Button {...args} classes={classes}>
        Default
      </Button>
      <Button {...args} classes={classes} color="primary">
        Primary
      </Button>
      <Button {...args} classes={classes} color="secondary">
        Secondary
      </Button>
    </div>
  );
};
Contained.args = {
  variant: "contained",
};
export const Outlined = (args) => {
  const classes = useButtonBootstrapStyles();
  return (
    <div style={{ gap: 12, display: "flex" }}>
      <Button {...args} classes={classes}>
        Default
      </Button>
      <Button {...args} classes={classes} color="primary">
        Primary
      </Button>
      <Button {...args} classes={classes} color="secondary">
        Secondary
      </Button>
    </div>
  );
};
Outlined.args = {
  variant: "outlined",
};
export const Disabled = (args) => {
  const classes = useButtonBootstrapStyles();
  return (
    <div style={{ gap: 12, display: "flex" }}>
      <Button {...args} classes={classes} variant="contained">
        Default
      </Button>
      <Button {...args} classes={classes} variant="contained" color="primary">
        Primary
      </Button>
      <Button {...args} classes={classes} variant="contained" color="secondary">
        Secondary
      </Button>
      <Button {...args} classes={classes} variant="outlined">
        Default
      </Button>
      <Button {...args} classes={classes} variant="outlined" color="primary">
        Primary
      </Button>
      <Button {...args} classes={classes} variant="outlined" color="secondary">
        Secondary
      </Button>
    </div>
  );
};
Disabled.args = {
  disabled: true,
};

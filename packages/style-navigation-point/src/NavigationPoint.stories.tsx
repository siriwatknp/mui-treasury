import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@mui/material/styles";

import {
  Navigation,
  NavItem,
  NavigationProps,
} from "@mui-treasury/component-navigation";

import {
  getNavigationPointTheme,
  getNavigationPointStyles,
} from "@mui-treasury/style-navigation-point";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/Navigation/style-packages",
  component: Navigation,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Point: Story<NavigationProps> = (args) => {
  const theme = useTheme();
  const styles = getNavigationPointStyles(theme);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [...Array(5).fill(undefined)].map((_, index) => (
    <NavItem
      key={index}
      // href="#"
      active={activeIndex === index}
      disabled={index === 3}
      onClick={() => setActiveIndex(index)}
    >
      Item {index + 1}
    </NavItem>
  ));
  return (
    <>
      <Navigation sx={{ ...styles, height: 48 }} {...args}>
        {items}
      </Navigation>
      <br />
      <Navigation sx={{ height: 48 }} {...args}>
        {items}
      </Navigation>
    </>
  );
};
Point.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getNavigationPointTheme(theme),
    };
    return theme;
  }),
];

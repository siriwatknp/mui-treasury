import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@mui/material/styles";

import {
  Navigation,
  NavItem,
  NavigationProps,
} from "@mui-treasury/component-navigation";

import {
  getNavigationZoomTheme,
  getNavigationZoomStyles,
} from "@mui-treasury/style-navigation-zoom";

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

export const Zoom: Story<NavigationProps> = (args) => {
  const theme = useTheme();
  const styles = getNavigationZoomStyles(theme);
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
      <Navigation {...args} sx={styles}>
        {items}
      </Navigation>
      <br />
      <Navigation {...args}>{items}</Navigation>
    </>
  );
};
Zoom.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getNavigationZoomTheme(theme),
    };
    return theme;
  }),
];

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { experimentalStyled as styled } from "@material-ui/core/styles";

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

const NavigationPoint = styled(Navigation)(getNavigationPointStyles);

export const Point: Story<NavigationProps> = (args) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const items = [...Array(5)].map((_, index) => (
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
      <NavigationPoint sx={{ height: 48 }} {...args}>
        {items}
      </NavigationPoint>
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

---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  <%=h.extractComponentName(name)%>,
  <%=h.extractComponentName(name)%>Props,
} from "@mui-treasury/component-<%=h.extractComponentPkg(name)%>";

import {
  get<%=h.toName(name)%>Theme,
  get<%=h.toName(name)%>Styles,
} from "@mui-treasury/<%=h.toNamePath(name)%>";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: 'Component/<%=h.extractComponentName(name)%>/style-packages',
  component: <%=h.extractComponentName(name)%>,
  argTypes: {},
  args: {},
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const <%=h.extractStyleNamePascal(name)%>: Story<<%=h.extractComponentName(name)%>Props> = (args) => {
  return (
    <<%=h.toName(name)%> {...args} />
  );
};
<%=h.extractStyleNamePascal(name)%>.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...get<%=h.toName(name)%>Theme(theme),
    };
    return theme;
  }),
];


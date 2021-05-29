---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { <%= Name=h.toName(name) %>, <%=Name%>Props } from './<%=Name%>';

export default {
  title: 'Component/<%=Name%>',
  component: <%=Name%>,
  argTypes: {},
  args: {},
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Demo: Story<<%=Name%>Props> = args => {
  return (
    <<%=Name%> {...args}>
      Children
    </<%=Name%>>
  );
};


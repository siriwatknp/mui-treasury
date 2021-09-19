---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import <%= Name=h.toName(name) %> from './index';

export default {
  title: 'Template/<%=Name%>',
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Demo: Story = () => {
  return (
    <<%=Name%> style={{ resize: "horizontal", overflow: "auto" }} />
  );
};


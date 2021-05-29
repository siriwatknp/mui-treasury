---
to: packages/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Component/<%=h.changeCase.pascal(name.split('-')[1])%>/<%=h.changeCase.pascal(name.split('-')[2])%>',
  argTypes: {},
  args: {},
  parameters: {
    layout: 'centered',
  },
} as Meta;

// export const Demo: Story<<%=Name%>Props> = args => {
//   return (
//     <<%=Name%> {...args}>
//       Children
//     </<%=Name%>>
//   );
// };


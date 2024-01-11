---
to: ../blocks/<%=name%>/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { <%=h.toName(name)%> } from "./index";

const meta = {
  title: "<%=h.getFirstPascal(name)%>/<%=h.getSecondPascal(name)%><%=h.getThirdPascal(name) ? `/${h.getThirdPascal(name)}` : ''%>",
  component: <%=h.toName(name)%>,
  parameters: {
    layout: "<%=name.startsWith('layout') ? 'fullscreen' : 'centered'%>",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta<typeof <%=h.toName(name)%>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const <%=h.getThirdPascal(name) || h.getSecondPascal(name)%>: Story = {
  render: () => <<%=h.toName(name)%> />,
};



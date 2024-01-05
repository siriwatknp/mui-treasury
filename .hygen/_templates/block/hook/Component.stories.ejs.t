---
to: ../blocks/<%=name%>/src/<%=h.toNameCamel(name)%>.stories.tsx
unless_exists: true
---
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "./usage.mdx";
import { <%=h.toNameCamel(name)%>, <%=h.toName(name)%>Options } from "./<%=h.toNameCamel(name)%>";

const meta = {
  title: "Hook/<%=h.toNameCamel(name)%>",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<<%=h.toName(name)%>Options>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: () => {
    const state = <%=h.toNameCamel(name)%>({});
    return <div>{JSON.stringify(state)}</div>;
  },
} satisfies Story;

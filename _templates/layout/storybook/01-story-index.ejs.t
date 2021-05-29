---
to: stories/layout/<%=category%>/<%=category%>.stories.tsx
unless_exists: true
---
import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Source } from "@storybook/addon-docs/blocks";

import Pages from "./<%=category%>";

export default {
  title: "Layout/<%=h.changeCase.titleCase(category)%>",
  parameters: {
    docs: {
      page: () => <Source />,
    },
    layout: "fullscreen"
  },
} as Meta;

const fileMapping: { [k: string]: string } = {};
const context = require.context("!raw-loader!./<%=category%>", false, /\.tsx$/);
context.keys().forEach((filename) => {
  fileMapping[filename] = context(filename).default;
});

const createStory = (name: keyof typeof Pages) => {
  const Component = Pages[name];
  function StoryComponent() {
    return (
      <Component />
    );
  }
  StoryComponent.parameters = {
    docs: {
      source: {
        code: fileMapping[`./${name}.tsx`],
      },
    },
    backgrounds: {},
  };
  return StoryComponent;
};

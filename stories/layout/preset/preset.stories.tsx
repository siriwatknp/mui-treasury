import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Source } from "@storybook/addon-docs/blocks";

const Pages = {
  Standard: React.lazy(() => import("./Standard")),
  Fixed: React.lazy(() => import("./Fixed")),
  Cozy: React.lazy(() => import("./Cozy")),
  ContentBased: React.lazy(() => import("./ContentBased")),
};

export default {
  title: "Layout/Preset",
  parameters: {
    docs: {
      page: () => <Source />,
    },
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
    chromatic: { disableSnapshot: true },
  },
} as Meta;

const fileMapping: { [k: string]: string } = {};
const context = require.context("!raw-loader!./", false, /(?<!stories)\.tsx/);
context.keys().forEach((filename) => {
  fileMapping[filename] = context(filename).default;
});

const createStory = (name: keyof typeof Pages) => {
  const Component = Pages[name];
  function StoryComponent() {
    return <Component />;
  }
  StoryComponent.parameters = {
    docs: {
      source: {
        code: fileMapping[`./${name}.tsx`],
      },
    },
    backgrounds: {},
  };
  return StoryComponent as Story;
};
export const ContentBased = createStory("ContentBased");
export const Cozy = createStory("Cozy");
export const Fixed = createStory("Fixed");
export const Standard = createStory("Standard");

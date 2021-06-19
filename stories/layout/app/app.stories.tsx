import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Source } from "@storybook/addon-docs/blocks";

const Pages = {
  Analytics: React.lazy(() => import("./Analytics")),
  ShoppingCart: React.lazy(() => import("./ShoppingCart")),
  ReactJS: React.lazy(() => import("./ReactJS")),
  Messenger: React.lazy(() => import("./Messenger")),
  Gmail: React.lazy(() => import("./Gmail")),
};

export default {
  title: "Layout/App",
  parameters: {
    docs: {
      page: () => <Source />,
    },
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
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
export const Gmail = createStory("Gmail");
export const Messenger = createStory("Messenger");
export const ReactJS = createStory("ReactJS");
export const ShoppingCart = createStory("ShoppingCart");
export const Analytics = createStory("Analytics");
Analytics.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true },
};

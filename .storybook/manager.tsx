import React from "react";
import ReactGA from "react-ga4";
import {
  STORY_CHANGED,
  STORY_ERRORED,
  STORY_MISSING,
} from "@storybook/core-events";
import { addons, types } from "@storybook/manager-api";
import { create } from "@storybook/theming";
import CarbonAds from "./carbon-ads/CarbonAds";
import { Tool } from "./decorators/Author";
import { BlockPicker } from "./decorators/BlockPicker";
import { BlockUsage } from "./decorators/BlockUsage";
import "./manager.css";

// https://storybook.js.org/docs/react/configure/features-and-behavior
addons.setConfig({
  showNav: true,
  showPanel: false,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  theme: create({
    base: "light",
    brandUrl: "https://github.com/siriwatknp/mui-treasury",
    brandTitle: "MUI Treasury Github",
    brandImage: "mui-treasury-logo.png",
    brandTarget: "_blank",
  }),
  selectedPanel: undefined,
  initialActive: "sidebar",
});

// need to use .default because of ES build (type="module" in package.json)
type GA4 = typeof ReactGA & { default: typeof ReactGA };

addons.register("google-analytics", (api) => {
  (ReactGA as GA4).default.initialize("G-1B739CVWP4");

  api.on(STORY_CHANGED, () => {
    const { path } = api.getUrlState();
    (ReactGA as GA4).default.send({ hitType: "pageview", page: path });
  });
  api.on(STORY_ERRORED, ({ description }: { description: string }) => {
    (ReactGA as GA4).default.event("exception", {
      description,
      fatal: true,
    });
  });
  api.on(STORY_MISSING, (id: string) => {
    (ReactGA as GA4).default.event("exception", {
      description: `attempted to render ${id}, but it is missing`,
      fatal: false,
    });
  });
});

addons.register("github-sponsor", () => {
  addons.add("github-sponsor/toolbar", {
    title: "Github Sponsor",
    type: types.TOOLEXTRA,
    render: () => (
      <iframe
        src="https://github.com/sponsors/siriwatknp/button"
        title="Sponsor siriwatknp"
        height="32"
        width="108"
        style={{ border: 0, borderRadius: 6 }}
      ></iframe>
    ),
  });
});

addons.register("block-usage", () => {
  addons.add("block-usage/toolbar", {
    title: "Block Usage",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: BlockUsage as unknown as () => React.ReactElement,
  });
});

addons.register("cli-toolbar", () => {
  addons.add("cli-toolbar/toolbar", {
    title: "CLI Toolbar",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: BlockPicker as unknown as () => React.ReactElement,
  });
});

addons.register("contributor", () => {
  addons.add("contributor/toolbar", {
    title: "Author",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: Tool as unknown as () => React.ReactElement,
  });
});

addons.register("carbon-ads", (api) => {
  api.on(STORY_CHANGED, () => {
    if (typeof (window as any)._carbonads !== "undefined") {
      (window as any)._carbonads.refresh();
    }
  });
  addons.add("carbon-ads/toolbar", {
    title: "Carbon Ads",
    type: types.TOOL,
    render: () => <CarbonAds vertical />,
  });
});

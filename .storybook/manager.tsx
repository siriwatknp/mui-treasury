import React from "react";
import ReactGA from "react-ga4";
import { addons, types } from "@storybook/manager-api";
import {
  STORY_CHANGED,
  STORY_ERRORED,
  STORY_MISSING,
} from "@storybook/core-events";
import { Tool } from "./decorators/Author";
import CarbonAds from './carbon-ads/CarbonAds';

// https://storybook.js.org/docs/react/configure/features-and-behavior
addons.setConfig({
  showNav: true,
  showPanel: false,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  theme: undefined,
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

addons.register("contributor", () => {
  addons.add("contributor/toolbar", {
    title: "Author",
    type: types.TOOL,
    render: Tool as unknown as () => React.ReactElement,
  });
});

addons.register("carbon-ads", (api) => {
  api.on(STORY_CHANGED, () => {
    if (typeof (window as any)._carbonads !== 'undefined') {
      (window as any)._carbonads.refresh();
    }
  });
  addons.add("carbon-ads/toolbar", {
    title: "Carbon Ads",
    type: types.TOOL,
    render: () => <CarbonAds vertical />,
  });
});

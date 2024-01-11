import type { Meta } from "@storybook/react";
import googleFont from "../../.storybook/decorators/googleFont";
import storyDialog from "../../.storybook/decorators/storyDialog";
import {
  Circle as CircleMockup,
  Pill as PillMockup,
  Square as SquareMockup,
} from "./index";
import Usage from "./usage.mdx";

const meta = {
  title: "Mockup/Shape",
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage), googleFont([])],
} satisfies Meta;

export default meta;

export const Circle = CircleMockup;

export const Pill = PillMockup;

export const Square = SquareMockup;

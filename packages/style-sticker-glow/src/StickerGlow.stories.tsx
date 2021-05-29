import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
import { Sticker, StickerProps } from "@mui-treasury/component-sticker";
import { useStickerGlowStyles } from "./StickerGlow.styles";

import Add from "@material-ui/icons/Add";

export default {
  title: "Component/Sticker/Glow",
  component: Sticker,
  argTypes: {
    palette: {
      control: {
        type: "select",
        options: Object.keys(treasuryPalette),
      },
    },
    size: {
      control: "text",
    },
    classes: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["none", "solid", "soft", "outlined"],
      },
    },
  },
  args: {
    round: false,
    hasText: false,
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Solid: Story<StickerProps> = (args) => {
  const classes = useStickerGlowStyles({ palette: args.palette });
  return (
    <Sticker {...args} classes={classes}>
      <Add fontSize="large" />
    </Sticker>
  );
};
Solid.args = {
  variant: "solid",
};

export const Soft: Story<StickerProps> = (args) => {
  const classes = useStickerGlowStyles({ palette: args.palette });
  return (
    <Sticker {...args} classes={classes}>
      <Add fontSize="large" />
    </Sticker>
  );
};
Soft.args = {
  palette: "primary",
  variant: "soft",
};

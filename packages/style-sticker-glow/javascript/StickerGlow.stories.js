import React from "react";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
import { Sticker } from "@mui-treasury/component-sticker";
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
};
export const Solid = (args) => {
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
export const Soft = (args) => {
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

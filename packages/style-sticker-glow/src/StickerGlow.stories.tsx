import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { useTheme } from "@material-ui/core/styles";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
import { Sticker, StickerProps } from "@mui-treasury/component-sticker";
import { getStickerGlowStyles } from "@mui-treasury/style-sticker-glow";

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
  const theme = useTheme();
  const styles = getStickerGlowStyles(theme);
  // const classes = useStickerGlowStyles({ palette: args.palette });
  return (
    <Sticker {...args} sx={styles}>
      <Add fontSize="large" />
    </Sticker>
  );
};
Solid.args = {
  variant: "solid",
};

export const Soft: Story<StickerProps> = (args) => {
  const theme = useTheme();
  const styles = getStickerGlowStyles(theme);
  return (
    <Sticker {...args} sx={styles}>
      <Add fontSize="large" />
    </Sticker>
  );
};
Soft.args = {
  palette: "primary",
  variant: "soft",
};

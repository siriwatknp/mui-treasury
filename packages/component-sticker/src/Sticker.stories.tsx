import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import ButtonBase from "@material-ui/core/ButtonBase";

import DeleteForever from "@material-ui/icons/DeleteForever";
import Add from "@material-ui/icons/Add";

import {
  treasuryPalette,
  createTreasuryTheme,
} from "@mui-treasury/theme-treasury";

import { Sticker, StickerProps } from "./Sticker";

export default {
  title: "Component/Sticker",
  component: Sticker,
  argTypes: {
    palette: {
      control: {
        type: "select",
        options: Object.keys(treasuryPalette),
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["none", "soft", "solid", "outlined"],
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

export const Palette: Story<StickerProps> = (args) => {
  return (
    <Sticker {...args}>
      <Add fontSize="large" />
    </Sticker>
  );
};

export const Solid: Story<StickerProps> = (args) => {
  return (
    <Sticker {...args}>
      <Add fontSize="large" />
    </Sticker>
  );
};
Solid.args = {
  variant: "solid",
};

export const Soft: Story<StickerProps> = (args) => {
  return (
    <Sticker {...args}>
      <Add fontSize="large" />
    </Sticker>
  );
};
Soft.args = {
  variant: "soft",
  palette: "error",
};

export const Outlined: Story<StickerProps> = (args) => {
  return (
    <Sticker {...args}>
      <Add fontSize="large" />
    </Sticker>
  );
};
Outlined.args = {
  variant: "outlined",
  palette: "error",
};

export const Round: Story<StickerProps> = (args) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Sticker {...args} variant="outlined">
        <Add fontSize="large" />
      </Sticker>
      <Sticker {...args} variant="soft">
        <Add fontSize="large" />
      </Sticker>
      <Sticker {...args} variant="solid">
        <Add fontSize="large" />
      </Sticker>
    </Box>
  );
};
Round.args = {
  round: true,
};
Round.argTypes = {
  variant: {
    table: {
      disable: true,
    },
  },
};

export const Sizes: Story<StickerProps> = (args) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Sticker {...args} sx={{ minWidth: 20, minHeight: 20 }}>
        <Add fontSize="small" />
      </Sticker>
      <Sticker {...args} sx={{ minWidth: 40, minHeight: 40 }}>
        <Add fontSize="large" />
      </Sticker>
    </Box>
  );
};
Sizes.args = {
  variant: "solid",
};

export const AsButton: Story<StickerProps> = (args) => {
  return (
    <Sticker
      {...args}
      component={ButtonBase}
      centerRipple
      sx={{
        width: 72,
      }}
    >
      <Add fontSize="large" />
    </Sticker>
  );
};
AsButton.args = {
  variant: "outlined",
  palette: "error",
};

export const Text: Story<StickerProps> = (args) => {
  return (
    <Stack spacing={2} alignItems="center" sx={{ fontSize: 14 }}>
      <Sticker {...args}>Status</Sticker>
      <Sticker {...args} component={ButtonBase}>
        <Add fontSize="inherit" />
        Status
      </Sticker>
      <Sticker {...args} component={ButtonBase}>
        Status
        <DeleteForever fontSize="inherit" />
      </Sticker>
    </Stack>
  );
};
Text.args = {
  variant: "solid",
  round: true,
  hasText: true,
};

export const Theme: Story<StickerProps> = (args) => {
  return (
    <ThemeProvider
      theme={createTreasuryTheme({
        palette: {
          primary: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
          },
        },
        components: {
          JunSticker: {
            defaultProps: {
              variant: "soft",
              palette: "primary",
            },
            styleOverrides: {
              soft: {
                border: "4px solid",
                borderColor: "currentColor",
              },
              outlined: {
                boxShadow: "0 1px 8px 0",
              },
            },
          },
        },
      })}
    >
      <Sticker {...args}>
        <Add fontSize="large" />
      </Sticker>
    </ThemeProvider>
  );
};

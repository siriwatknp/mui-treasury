import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Info,
  InfoProps,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
  InfoEyebrow,
} from "@mui-treasury/component-info";

export default {
  title: "Component/Info",
  component: Info,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Basic: Story<InfoProps> = (args) => {
  return (
    <Info>
      <InfoEyebrow>Material Blog</InfoEyebrow>
      <InfoTitle>Unveiling Material You</InfoTitle>
      <InfoSubtitle>The next stage for Material Design</InfoSubtitle>
      <InfoCaption>10 FEB 2021</InfoCaption>
    </Info>
  );
};

declare module "./Info" {
  interface InfoPropsVariantOverrides {
    awesome: true;
  }
}

export const ThemeOverrides: Story<InfoProps> = (args) => {
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          JunInfo: {
            variants: [
              {
                props: { variant: "awesome" },
                style: {
                  backgroundColor: "#f5f5f5",
                  "& .JunInfo-head": {
                    color: "red",
                  },
                },
              },
            ],
            styleOverrides: {
              root: {
                "& + .JunInfo-root": {
                  marginTop: "20px",
                },
              },
              title: { letterSpacing: "1px", color: "rgba(0,0,0,0.6)" },
            },
          },
        },
      })}
    >
      <Info>
        <InfoEyebrow>Theme overrides</InfoEyebrow>
        <InfoTitle>Unveiling Material You</InfoTitle>
        <InfoSubtitle>The next stage for Material Design</InfoSubtitle>
      </Info>
      <Info variant="awesome">
        <InfoEyebrow>Theme variants</InfoEyebrow>
        <InfoTitle>Unveiling Material You</InfoTitle>
        <InfoSubtitle>The next stage for Material Design</InfoSubtitle>
      </Info>
    </ThemeProvider>
  );
};

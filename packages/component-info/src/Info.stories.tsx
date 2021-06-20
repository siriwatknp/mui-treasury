import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  Info,
  InfoProps,
  InfoHead,
  InfoParagraph,
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

export const Base: Story<InfoProps> = (args) => {
  return (
    <Info>
      <InfoEyebrow>Material Blog</InfoEyebrow>
      <InfoHead>Unveiling Material You</InfoHead>
      <InfoParagraph>The next stage for Material Design</InfoParagraph>
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
              head: { letterSpacing: "1px", color: "rgba(0,0,0,0.6)" },
            },
          },
        },
      })}
    >
      <Info>
        <InfoEyebrow>Theme overrides</InfoEyebrow>
        <InfoHead>Unveiling Material You</InfoHead>
        <InfoParagraph>The next stage for Material Design</InfoParagraph>
      </Info>
      <Info variant="awesome">
        <InfoEyebrow>Theme variants</InfoEyebrow>
        <InfoHead>Unveiling Material You</InfoHead>
        <InfoParagraph>The next stage for Material Design</InfoParagraph>
      </Info>
    </ThemeProvider>
  );
};

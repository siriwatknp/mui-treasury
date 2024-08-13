import { MDXProvider } from "@mdx-js/react";
import { ReactRenderer } from "@storybook/react";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AnchorMdx, CodeOrSourceMdx, HeadersMdx } from "@storybook/blocks";
import {
  background,
  color,
  ThemeProvider,
  themes,
  typography,
} from "@storybook/theming";
import { DecoratorFunction } from "@storybook/types";

const defaultTheme = {
  ...themes.light,
  color,
  background,
  typography,
};

const defaultComponents: Record<string, any> = {
  code: CodeOrSourceMdx,
  a: AnchorMdx,
  ...HeadersMdx,
};

export default function storyDialog(Component: React.ComponentType) {
  return function storyDialogDecorator(Story, { globals }) {
    return (
      <>
        <Story />
        <Dialog maxWidth="md" open={globals.blockUsage || false}>
          <DialogTitle>Usage</DialogTitle>
          <DialogContent>
            <ThemeProvider theme={defaultTheme}>
              <MDXProvider components={defaultComponents}>
                <Component />
              </MDXProvider>
            </ThemeProvider>
          </DialogContent>
        </Dialog>
      </>
    );
  } as DecoratorFunction<ReactRenderer, {}>;
}

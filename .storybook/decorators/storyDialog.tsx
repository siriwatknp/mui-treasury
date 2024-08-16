import { MDXProvider } from "@mdx-js/react";
import { ReactRenderer } from "@storybook/react";
import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
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
  return function storyDialogDecorator(Story, { globals, ...rest }) {
    return (
      <>
        <Story />
        <Dialog
          fullScreen
          open={globals.blockUsage || false}
          transitionDuration={{ enter: 300, exit: 400 }}
          slotProps={{
            backdrop: {
              sx: (theme) => ({
                backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel}/0.5)`,
              }),
            },
          }}
        >
          <DialogContent>
            <Container maxWidth="md">
              <ThemeProvider theme={defaultTheme}>
                <MDXProvider components={defaultComponents}>
                  <Suspense fallback="loading...">
                    <Component />
                  </Suspense>
                </MDXProvider>
              </ThemeProvider>
            </Container>
          </DialogContent>
        </Dialog>
      </>
    );
  } as DecoratorFunction<ReactRenderer, {}>;
}

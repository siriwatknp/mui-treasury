import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { LayoutProvider } from '../packages/mui-layout/src/core/layoutContext';

const baseTheme = createMuiTheme();

const renderWithinTheme = ui => {
  const utils = render(<ThemeProvider theme={baseTheme}>{ui}</ThemeProvider>);
  return {
    ...utils,
    rerenderWithTheme: element =>
      utils.rerender(
        <ThemeProvider theme={baseTheme}>{element}</ThemeProvider>
      ),
  };
};

const renderWithinLayout = (ui, { config, ...rest } = {}) => {
  const utils = renderWithinTheme(
    <LayoutProvider {...rest} config={config}>
      {ui}
    </LayoutProvider>
  );
  return {
    ...utils,
    rerenderWithLayout: (element, { config: nextConfig = config } = {}) =>
      utils.rerenderWithTheme(
        <LayoutProvider {...rest} config={nextConfig}>
          {element}
        </LayoutProvider>
      ),
  };
};

export { renderWithinTheme, renderWithinLayout };

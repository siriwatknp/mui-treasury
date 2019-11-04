import React from 'react';
import { render } from '@testing-library/react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { LayoutConsumer } from '../core/layoutContext';
import Sidebar from '../components/Sidebar';
import Root from '../components/Root';

const baseTheme = createMuiTheme();

describe('context', () => {
  test('Layout Context works', () => {
    const { getByText } = render(
      <LayoutConsumer>{value => <span>Received: {value}</span>}</LayoutConsumer>
    );
    expect(getByText(/^Received:/).textContent).toBe('Received: value');
  });

  test('Able to config in each screen', () => {
    const config = {
      screen: 'xs',
      xs: {
        sidebar: {
          variant: 'temporary',
        },
      },
      md: {
        sidebar: {
          variant: 'permanent',
        },
      },
    };
    const { queryByTestId, rerender } = render(
      <ThemeProvider theme={baseTheme}>
        <Root config={config}>
          <Sidebar data-testid={'sidebar-root'} />
        </Root>
      </ThemeProvider>
    );
    expect(queryByTestId('sidebar-root')).not.toBeInTheDocument();

    config.screen = 'md';
    rerender(
      <ThemeProvider theme={baseTheme}>
        <Root config={config}>
          <Sidebar data-testid={'sidebar-root'} />
        </Root>
      </ThemeProvider>
    );
    expect(queryByTestId('sidebar-root')).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Root from '../components/Root';
import HeaderOffset from '../components/HeaderOffset';

const baseTheme = createMuiTheme();

describe('Offset', () => {
  test('HeaderOffset should have correct height based on header position', () => {
    const config = {
      header: {
        position: 'fixed',
        offsetHeight: 80,
      },
    };
    const { getByTestId, rerender } = render(
      <ThemeProvider theme={baseTheme}>
        <Root config={config}>
          <HeaderOffset data-testid={'header-offset'} />
        </Root>
      </ThemeProvider>
    );
    let computedStyle = getComputedStyle(getByTestId('header-offset'));
    expect(computedStyle.height).toBe('80px');

    config.header.offsetHeight = 56;
    rerender(
      <ThemeProvider theme={baseTheme}>
        <Root config={config}>
          <HeaderOffset data-testid={'header-offset'} />
        </Root>
      </ThemeProvider>
    );
    computedStyle = getComputedStyle(getByTestId('header-offset'));
    expect(computedStyle.height).toBe('56px');
  });
});

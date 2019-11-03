import React from 'react';
// import mediaQuery from 'css-mediaquery';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { render } from '@testing-library/react';
import Root from '../components/Root';
import Sidebar from '../components/Sidebar';
import useScreen from '../hooks/useScreen';

const baseTheme = createMuiTheme();

// function createMatchMedia(width) {
//   return query => ({
//     matches: mediaQuery.match(query, { width }),
//     addListener: () => {},
//     removeListener: () => {},
//   });
// }

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

const Width = () => {
  const width = useScreen();
  return <span data-testid={'screen'}>{width}</span>;
};

describe('React Hooks', () => {
  let renderLayout;
  beforeEach(() => {
    renderLayout = (config, props) => elm =>
      render(
        <ThemeProvider theme={baseTheme}>
          <Root {...props} config={config}>
            {elm}
          </Root>
        </ThemeProvider>
      );
    // window.matchMedia = createMatchMedia(window.innerWidth);
  });
  test.skip('[useWidth] give the correct width as string', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={baseTheme}>
        <Width />
      </ThemeProvider>
    );
    expect(getByTestId('screen').textContent).toBe('md');
    resizeWindow(320, 768);
    console.log('window.innerWidth', window.innerWidth);
    expect(getByTestId('screen').textContent).toBe('sm');
  });

  test('[useAutoCollapse] sidebar collapsed when screen hit collapsed breakpoint from bigger', () => {
    const config = {
      screen: 'xl',
      sidebar: {
        variant: 'permanent',
        autoCollapsedDisabled: false,
        collapsedBreakpoint: 'md',
      },
      header: {},
    };
    const { queryByTestId, rerender } = renderLayout(config)(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>
    );
    expect(queryByTestId('collapsed')).not.toBeInTheDocument();

    // fake that screen is changed to "md"
    config.screen = 'sm';
    rerender(
      <ThemeProvider theme={baseTheme}>
        <Root config={config}>
          <Sidebar>
            {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
          </Sidebar>
        </Root>
      </ThemeProvider>
    );
    expect(queryByTestId('collapsed')).toBeInTheDocument();
  });

  test('[useAutoCollapse] sidebar uncollapsed when screen pass collapsed breakpoint up', () => {
    const config = {
      screen: 'xs',
      sidebar: {
        variant: 'permanent',
        autoCollapsedDisabled: false,
        collapsedBreakpoint: 'md',
      },
      header: {},
    };
    const { queryByTestId, rerender } = renderLayout(config, {
      initialCollapsed: true,
    })(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>
    );
    expect(queryByTestId('collapsed')).toBeInTheDocument();

    // fake that screen is changed to "md"
    config.screen = 'lg';
    rerender(
      <ThemeProvider theme={baseTheme}>
        <Root config={config}>
          <Sidebar>
            {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
          </Sidebar>
        </Root>
      </ThemeProvider>
    );
    expect(queryByTestId('collapsed')).not.toBeInTheDocument();
  });
});

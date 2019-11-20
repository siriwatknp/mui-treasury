import React from 'react';
// import mediaQuery from 'css-mediaquery';
import { renderWithinTheme, renderWithinLayout } from 'testingUtils/renderer';
import Root from '../components/Root';
import Sidebar from '../components/Sidebar';
// import useScreen from '../hooks/useScreen';

// function createMatchMedia(width) {
//   return query => ({
//     matches: mediaQuery.match(query, { width }),
//     addListener: () => {},
//     removeListener: () => {},
//   });
// }

// const resizeWindow = (x, y) => {
//   window.innerWidth = x;
//   window.innerHeight = y;
//   window.dispatchEvent(new Event('resize'));
// };
//
// const Width = () => {
//   const width = useScreen();
//   return <span data-testid={'screen'}>{width}</span>;
// };

describe('React Hooks', () => {
  let renderLayout;
  beforeEach(() => {
    renderLayout = (config, props) => elm =>
      renderWithinTheme(
        <Root {...props} config={config}>
          {elm}
        </Root>
      );
    // window.matchMedia = createMatchMedia(window.innerWidth);
  });
  // test.skip('[useWidth] give the correct width as string', () => {
  //   const { getByTestId } = render(
  //     <ThemeProvider theme={baseTheme}>
  //       <Width />
  //     </ThemeProvider>
  //   );
  //   expect(getByTestId('screen').textContent).toBe('md');
  //   resizeWindow(320, 768);
  //   expect(getByTestId('screen').textContent).toBe('sm');
  // });

  test('[useAutoCollapse] disabled', () => {
    const config = {
      screen: 'sm',
      autoCollapseDisabled: true,
      sidebar: {
        variant: 'permanent',
      },
    };
    const { queryByTestId } = renderWithinLayout(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>,
      { config }
    );
    expect(queryByTestId('collapsed')).not.toBeInTheDocument();
  });

  test('[useAutoCollapse] sidebar auto collapsed at breakpoint and lower', () => {
    const config = {
      screen: 'sm',
      sidebar: {
        variant: 'permanent',
      },
    };
    const { queryByTestId } = renderWithinLayout(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>,
      { config }
    );
    expect(queryByTestId('collapsed')).toBeInTheDocument();
  });

  test('[useAutoCollapse] sidebar collapsed when screen hit collapsed breakpoint from bigger', () => {
    const config = {
      screen: 'xl',
      sidebar: {
        variant: 'permanent',
      },
    };
    const { queryByTestId, rerenderWithLayout } = renderWithinLayout(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>,
      { config }
    );
    expect(queryByTestId('collapsed')).not.toBeInTheDocument();

    // fake that screen is changed to "md"
    config.screen = 'sm';
    rerenderWithLayout(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>,
      { config }
    );
    expect(queryByTestId('collapsed')).toBeInTheDocument();
  });

  test('[useAutoCollapse] sidebar uncollapsed when screen pass collapsed breakpoint up', () => {
    const config = {
      screen: 'xs',
      sidebar: {
        variant: 'permanent',
      },
    };
    const { queryByTestId, rerenderWithLayout } = renderWithinLayout(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>,
      {
        config,
        initialCollapsed: true,
      }
    );
    expect(queryByTestId('collapsed')).toBeInTheDocument();

    // fake that screen is changed to "md"
    config.screen = 'lg';
    rerenderWithLayout(
      <Sidebar>
        {({ collapsed }) => collapsed && <span data-testid={'collapsed'} />}
      </Sidebar>,
      { config }
    );
    expect(queryByTestId('collapsed')).not.toBeInTheDocument();
  });
});

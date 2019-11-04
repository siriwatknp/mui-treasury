import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { LayoutProvider } from '../core/layoutContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CollapseBtn from '../components/CollapseBtn';

const baseTheme = createMuiTheme();
const initialConfig = {
  autoCollapseDisabled: true,
  sidebar: {
    variant: 'permanent',
    width: 256,
    collapsible: true,
    collapsedWidth: 80,
  },
  header: {
    position: 'relative',
  },
};

describe('Header', function() {
  let header;
  let trigger;
  let sidebarPaper;
  let renderLayout;
  beforeEach(() => {
    renderLayout = (elm, config = initialConfig) =>
      render(
        <ThemeProvider theme={baseTheme}>
          <LayoutProvider config={config}>{elm}</LayoutProvider>
        </ThemeProvider>
      );
  });
  test('Header should have AppBar + Toolbar', () => {
    const { getByText } = renderLayout(<Header>Hello</Header>);
    expect(getByText(/hello/i)).toBeInTheDocument();
  });

  test("Header should have margin-right when Sidebar's width changed", () => {
    const { getByTestId } = renderLayout(
      <>
        <Header data-testid={'header'} />
        <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }}>
          <CollapseBtn data-testid={'trigger'}>toggle</CollapseBtn>
        </Sidebar>
      </>
    );
    header = getByTestId('header');
    expect(header.style.marginLeft).toBe('256px');

    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    expect(header.style.marginLeft).toBe('80px');
  });

  test('[Clipped] fixed should have default width & no margin', () => {
    // static position cannot be clipped
    const { getByTestId } = renderLayout(
      <>
        <Header data-testid={'header'} />
      </>,
      {
        header: {
          clipped: true,
          position: 'fixed',
        },
      }
    );
    const computedStyle = getComputedStyle(getByTestId('header'));
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.marginLeft).toBe('');
  });

  test('[Clipped] relative should have default width & no margin', () => {
    // static position cannot be clipped
    const { getByTestId } = renderLayout(
      <>
        <Header data-testid={'header'} />
      </>,
      {
        header: {
          clipped: true,
          position: 'relative',
        },
      }
    );
    const computedStyle = getComputedStyle(getByTestId('header'));
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.marginLeft).toBe('');
  });

  // ** Cannot test, getComputedStyle(header) not use the fresh one **
  // test('[Clipped] Header should stay in front of Sidebar', () => {
  //   const { getByTestId, debug } = renderLayout(
  //     <>
  //       <Header data-testid={'header'} />
  //       <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }} />
  //     </>,
  //     {
  //       sidebar: {
  //         variant: 'permanent',
  //       },
  //       header: {
  //         clipped: true,
  //       },
  //     }
  //   );
  //   header = getByTestId('header');
  //   sidebarPaper = getByTestId('sidebar-paper');
  //   console.log('getComputedStyle(header)', getComputedStyle(header)['z-index']);
  //   const headerIndex = parseInt(getComputedStyle(header).zIndex);
  //   const sidebarIndex = parseInt(getComputedStyle(sidebarPaper).zIndex);
  //   console.log('headerIndex ', headerIndex);
  //   console.log('sidebarIndex ', sidebarIndex);
  //   expect(headerIndex > sidebarIndex).toBeTruthy();
  // });
});

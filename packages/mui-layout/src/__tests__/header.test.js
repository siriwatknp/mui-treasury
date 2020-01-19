import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithinLayout } from 'testingUtils/renderer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CollapseBtn from '../components/CollapseBtn';

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
  test('able to render with empty config', () => {
    expect(() => {
      renderWithinLayout(<Header>header</Header>, { config: {} });
    }).not.toThrow();
  });

  test('Header should have AppBar', () => {
    const { getByText, debug } = renderWithinLayout(<Header>Hello</Header>, {
      config: initialConfig,
    });
    const header = getByText(/hello/i);
    expect(header).toBeInTheDocument();
    expect(header.className).toEqual(expect.stringContaining('MuiAppBar-root'));
  });

  test("Header should have margin-right when Sidebar's width changed", () => {
    const { getByTestId } = renderWithinLayout(
      <>
        <Header data-testid={'header'} />
        <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }}>
          <CollapseBtn data-testid={'trigger'}>toggle</CollapseBtn>
        </Sidebar>
      </>,
      { config: initialConfig }
    );
    header = getByTestId('header');
    expect(header.style.marginLeft).toBe('256px');

    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    expect(header.style.marginLeft).toBe('80px');
  });

  test('[Clipped] fixed should have default width & no margin', () => {
    // static position cannot be clipped
    const { getByTestId } = renderWithinLayout(
      <>
        <Header data-testid={'header'} />
      </>,
      {
        config: {
          header: {
            clipped: true,
            position: 'fixed',
          },
        },
      }
    );
    const computedStyle = getComputedStyle(getByTestId('header'));
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.marginLeft).toBe('');
  });

  test('[Clipped] absolute should have default width & no margin', () => {
    // static position cannot be clipped
    const { getByTestId } = renderWithinLayout(
      <>
        <Header data-testid={'header'} />
      </>,
      {
        config: {
          header: {
            clipped: true,
            position: 'absolute',
          },
        },
      }
    );
    const computedStyle = getComputedStyle(getByTestId('header'));
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.marginLeft).toBe('');
  });

  test('[Clipped] sticky header should have default width & no margin', () => {
    // static position cannot be clipped
    const { getByTestId } = renderWithinLayout(
      <>
        <Header data-testid={'header'} />
      </>,
      {
        config: {
          header: {
            clipped: true,
            position: 'relative',
          },
        },
      }
    );
    const computedStyle = getComputedStyle(getByTestId('header'));
    expect(computedStyle.width).toBe('100%');
    expect(computedStyle.marginLeft).toBe('');
  });

  test('[Clipped] relative header should have default width & no margin', () => {
    // static position cannot be clipped
    const { getByTestId } = renderWithinLayout(
      <>
        <Header data-testid={'header'} />
      </>,
      {
        config: {
          header: {
            clipped: true,
            position: 'relative',
          },
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

import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithinLayout } from 'testingUtils/renderer';
import SecondarySidebar from '../components/SecondarySidebar';
import SecondarySidebarTrigger from '../components/SecondarySidebarTrigger';
import SecondaryCollapseBtn from '../components/SecondaryCollapseBtn';

test('able to render with empty config', () => {
  expect(() => {
    renderWithinLayout(<SecondarySidebar>content</SecondarySidebar>, {
      config: {},
    });
  }).not.toThrow();
});

describe('[Layout_RightSidebar]', function() {
  let sidebarRoot;
  let sidebarPaper;
  let trigger;
  let backdrop;

  test('[Permanent] should always display on screen', () => {
    const { getByTestId } = renderWithinLayout(
      <SecondarySidebar data-testid={'sidebar-root'} />,
      {
        config: {
          secondarySidebar: { variant: 'permanent' },
        },
      }
    );
    const sidebarRoot = getByTestId('sidebar-root');
    expect(sidebarRoot).toBeInTheDocument();
  });

  test('[Persistent] should show & hide on screen when triggered', () => {
    const { getByTestId } = renderWithinLayout(
      <SecondarySidebar
        data-testid={'sidebar-root'}
        PaperProps={{ 'data-testid': 'sidebar-paper' }}
      >
        <SecondarySidebarTrigger data-testid={'trigger'} />
      </SecondarySidebar>,
      { config: { secondarySidebar: { variant: 'persistent' } } }
    );
    sidebarPaper = getByTestId('sidebar-paper');
    expect(sidebarPaper.style.visibility).toBe('hidden');
    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    expect(sidebarPaper.style.visibility).toBe('');
  });

  test('[Temporary] should appear in dom when opened', () => {
    const { queryByTestId, getByTestId } = renderWithinLayout(
      <>
        <SecondarySidebar
          data-testid={'sidebar-root'}
          ModalProps={{ BackdropProps: { 'data-testid': 'backdrop' } }}
        />
        <SecondarySidebarTrigger data-testid={'trigger'} />
      </>,
      { config: { secondarySidebar: { variant: 'temporary' } } }
    );
    sidebarRoot = queryByTestId('sidebar-root');
    expect(sidebarRoot).toBeNull();

    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    sidebarRoot = queryByTestId('sidebar-root');
    expect(sidebarRoot).not.toBeNull();

    backdrop = getByTestId('backdrop');
    fireEvent.click(backdrop);
    sidebarRoot = queryByTestId('sidebar-root');
    expect(sidebarRoot.getAttribute('aria-hidden')).toBe('true');
  });

  test("Sidebar's width is set by config", () => {
    const width = 256;
    const { getByTestId } = renderWithinLayout(
      <SecondarySidebar PaperProps={{ 'data-testid': 'sidebar-paper' }} />,
      {
        config: {
          secondaryAutoCollapseDisabled: true,
          secondarySidebar: {
            variant: 'permanent',
            width,
          },
        },
      }
    );
    sidebarPaper = getByTestId('sidebar-paper');
    expect(sidebarPaper.style.width).toEqual(`${width}px`);
  });

  test('Collapsible Side + Trigger should work', () => {
    const collapsedWidth = 80;
    const { getByTestId } = renderWithinLayout(
      <SecondarySidebar PaperProps={{ 'data-testid': 'sidebar-paper' }}>
        <SecondaryCollapseBtn data-testid={'trigger'}>
          toggle
        </SecondaryCollapseBtn>
      </SecondarySidebar>,
      {
        config: {
          secondaryAutoCollapseDisabled: true,
          secondarySidebar: {
            variant: 'permanent',
            width: 256,
            collapsible: true,
            collapsedWidth,
          },
        },
      }
    );
    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    sidebarPaper = getByTestId('sidebar-paper');
    expect(sidebarPaper.style.width).toEqual(`${collapsedWidth}px`);
  });
});

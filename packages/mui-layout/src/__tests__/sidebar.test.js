import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithinLayout } from 'testingUtils/renderer';
import Sidebar from '../components/Sidebar';
import CollapseBtn from '../components/CollapseBtn';
import SidebarTrigger from '../components/SidebarTrigger';

describe('[Layout_LeftSidebar]', function() {
  let sidebarRoot;
  let sidebarPaper;
  let trigger;
  let backdrop;
  test('[Permanent] should always display on screen', () => {
    const { getByTestId } = renderWithinLayout(
      <Sidebar data-testid={'sidebar-root'} />,
      {
        config: {
          sidebar: { variant: 'permanent' },
        },
      }
    );
    sidebarRoot = getByTestId('sidebar-root');
    expect(sidebarRoot).toBeInTheDocument();
  });

  test('[Persistent] should show & hide on screen when triggered', () => {
    const { getByTestId } = renderWithinLayout(
      <Sidebar
        data-testid={'sidebar-root'}
        PaperProps={{ 'data-testid': 'sidebar-paper' }}
      >
        <SidebarTrigger data-testid={'trigger'} />
      </Sidebar>,
      { config: { sidebar: { variant: 'persistent' } } }
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
        <Sidebar
          data-testid={'sidebar-root'}
          ModalProps={{ BackdropProps: { 'data-testid': 'backdrop' } }}
        />
        <SidebarTrigger data-testid={'trigger'} />
      </>,
      { config: { sidebar: { variant: 'temporary' } } }
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
      <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }} />,
      {
        config: {
          autoCollapseDisabled: true,
          sidebar: {
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
      <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }}>
        <CollapseBtn data-testid={'trigger'}>toggle</CollapseBtn>
      </Sidebar>,
      {
        config: {
          autoCollapseDisabled: true,
          sidebar: {
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

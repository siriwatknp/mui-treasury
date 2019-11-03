import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { render, fireEvent } from '@testing-library/react';
import { LayoutProvider, LayoutConsumer } from '../layoutContext';
import Sidebar from '../components/Sidebar';
import CollapseBtn from '../components/CollapseBtn';

const baseTheme = createMuiTheme();

describe('Sidebar', function() {
  let sidebarRoot;
  let sidebarPaper;
  let trigger;
  let backdrop;
  let renderLayout;
  beforeEach(() => {
    renderLayout = (elm, config) =>
      render(
        <ThemeProvider theme={baseTheme}>
          <LayoutProvider config={config}>{elm}</LayoutProvider>
        </ThemeProvider>
      );
  });
  test('[Permanent] should always display on screen', () => {
    const { getByTestId } = renderLayout(
      <Sidebar data-testid={'sidebar-root'} />,
      { sidebar: { variant: 'permanent' } }
    );
    sidebarRoot = getByTestId('sidebar-root');
    expect(sidebarRoot).toBeInTheDocument();
  });

  test('[Persistent] should show & hide on screen when triggered', () => {
    const { getByTestId } = renderLayout(
      <Sidebar
        data-testid={'sidebar-root'}
        PaperProps={{ 'data-testid': 'sidebar-paper' }}
      >
        {({ setOpened, opened }) => (
          <button data-testid={'trigger'} onClick={() => setOpened(!opened)} />
        )}
      </Sidebar>,
      { sidebar: { variant: 'persistent' } }
    );
    sidebarPaper = getByTestId('sidebar-paper');
    expect(sidebarPaper.style.visibility).toBe('hidden');
    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    expect(sidebarPaper.style.visibility).toBe('');
  });

  test('[Temporary] should appear in dom when opened', () => {
    const { queryByTestId, getByTestId } = renderLayout(
      <>
        <Sidebar
          data-testid={'sidebar-root'}
          ModalProps={{ BackdropProps: { 'data-testid': 'backdrop' } }}
        />
        <LayoutConsumer>
          {({ setOpened, opened }) => (
            <button
              data-testid={'trigger'}
              onClick={() => setOpened(!opened)}
            />
          )}
        </LayoutConsumer>
      </>,
      { sidebar: { variant: 'temporary' } }
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
    const { getByTestId } = renderLayout(
      <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }} />,
      {
        sidebar: {
          variant: 'permanent',
          width,
        },
      }
    );
    sidebarPaper = getByTestId('sidebar-paper');
    expect(sidebarPaper.style.width).toEqual(`${width}px`);
  });

  test('Sidebar can be collapsed to some width', () => {
    const collapsedWidth = 80;
    const { getByTestId } = renderLayout(
      <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }}>
        {({ setCollapsed }) => (
          <button data-testid={'trigger'} onClick={() => setCollapsed(true)} />
        )}
      </Sidebar>,
      {
        sidebar: {
          variant: 'permanent',
          width: 256,
          collapsible: true,
          collapsedWidth,
        },
      }
    );
    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    sidebarPaper = getByTestId('sidebar-paper');
    expect(sidebarPaper.style.width).toEqual(`${collapsedWidth}px`);
  });

  test('Collapsible Side + Trigger should work', () => {
    const collapsedWidth = 80;
    const { getByTestId } = renderLayout(
      <Sidebar PaperProps={{ 'data-testid': 'sidebar-paper' }}>
        <CollapseBtn data-testid={'trigger'}>toggle</CollapseBtn>
      </Sidebar>,
      {
        sidebar: {
          variant: 'permanent',
          width: 256,
          collapsible: true,
          collapsedWidth,
        },
      }
    );
    trigger = getByTestId('trigger');
    fireEvent.click(trigger);
    sidebarPaper = getByTestId('sidebar-paper');
    expect(sidebarPaper.style.width).toEqual(`${collapsedWidth}px`);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { renderWithinTheme } from 'testingUtils/renderer';
import { LayoutConsumer } from '../core/layoutContext';
import Sidebar from '../components/Sidebar';
import Root from '../components/Root';

describe('context', () => {
  test('Layout Context works', () => {
    const { getByText } = render(
      <LayoutConsumer>{value => <span>Received: {value}</span>}</LayoutConsumer>
    );
    expect(getByText(/^Received:/i).textContent).toBe('Received: value');
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
    const { queryByTestId, rerenderWithTheme } = renderWithinTheme(
      <Root config={config}>
        <Sidebar data-testid={'sidebar-root'} />
      </Root>
    );
    expect(queryByTestId('sidebar-root')).not.toBeInTheDocument();

    config.screen = 'md';
    rerenderWithTheme(
      <Root config={config}>
        <Sidebar data-testid={'sidebar-root'} />
      </Root>
    );
    expect(queryByTestId('sidebar-root')).toBeInTheDocument();
  });
});

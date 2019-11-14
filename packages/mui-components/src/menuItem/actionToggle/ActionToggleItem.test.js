import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ActionToggleItem from './ActionToggleItem';

const theme = createMuiTheme();

describe('ActionToggleItem', () => {
  test('there is one role=button', () => {
    const { queryAllByRole } = render(
      <ThemeProvider theme={theme}>
        <ActionToggleItem>Menu</ActionToggleItem>
      </ThemeProvider>
    );
    expect(queryAllByRole('button').length).toBe(2);
  });
  test('able to expanded', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <ActionToggleItem
          expanded
          renderSymbol={({ expanded }) => (
            <span>{expanded ? 'expanded' : 'folded'}</span>
          )}
        >
          Menu
        </ActionToggleItem>
      </ThemeProvider>
    );
    expect(queryByText('expanded')).not.toBeNull();
  });
  test('can click', () => {
    const mockCallback = jest.fn();
    const { queryAllByRole } = render(
      <ThemeProvider theme={theme}>
        <ActionToggleItem onClick={mockCallback}>Menu</ActionToggleItem>
      </ThemeProvider>
    );
    queryAllByRole('button').forEach(btn => {
      fireEvent.click(btn);
    });
    expect(mockCallback).toHaveBeenCalledTimes(2);
  });
});

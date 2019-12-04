import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ToggleMenuItem from './ToggleMenuItem';

const theme = createMuiTheme();

describe('ToggleMenuItem', () => {
  test('role is button & show text as children', () => {
    const { queryByRole } = render(
      <ThemeProvider theme={theme}>
        <ToggleMenuItem>Menu</ToggleMenuItem>
      </ThemeProvider>
    );
    expect(queryByRole('button').textContent).toBe('Menu');
  });
  test('able to expanded', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <ToggleMenuItem
          expanded
          renderSymbol={({ expanded }) => (
            <span>{expanded ? 'expanded' : 'folded'}</span>
          )}
        >
          Menu
        </ToggleMenuItem>
      </ThemeProvider>
    );
    expect(queryByText('expanded')).not.toBeNull();
  });
  test('can click', () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <ToggleMenuItem onToggle={mockCallback}>Menu</ToggleMenuItem>
      </ThemeProvider>
    );
    fireEvent.click(getByRole('button'));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Root from '../components/Root';

describe('Root', () => {
  test('render without crash', () => {
    render(<Root>children</Root>);

    let styles = {};
    render(
      <Root>
        {({ sidebarStyles, headerStyles }) => {
          Object.assign(styles, {
            sidebar: sidebarStyles,
            header: headerStyles,
          });
          return 'fake';
        }}
      </Root>
    );
    expect(styles).toMatchObject({
      sidebar: expect.objectContaining({}),
      header: expect.objectContaining({}),
    });
  });

  test('omitThemeProvider throw error', () => {
    console.error = jest.fn().mockImplementation(() => '');
    expect(() => {
      try {
        render(<Root omitThemeProvider>children</Root>);
      } catch (e) {
        throw new Error();
      }
    }).not.toThrowError();
    console.error.mockRestore();
  });
});

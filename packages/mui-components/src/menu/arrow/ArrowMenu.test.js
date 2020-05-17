import React from 'react';
import { render } from '@testing-library/react';
import ArrowMenu from './ArrowMenu';

describe('ArrowMenu', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<ArrowMenu />);
    }).not.toThrow();
  });
});

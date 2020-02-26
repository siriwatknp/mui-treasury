import React from 'react';
import { render } from '@testing-library/react';
import CollapsibleMenu from './CollapsibleMenu';

describe('CollapsibleMenu', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<CollapsibleMenu />);
    }).not.toThrow();
  });
});

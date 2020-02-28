import React from 'react';
import { render } from '@testing-library/react';
import NestedMenu from './NestedMenu';

describe('NestedMenu', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<NestedMenu />);
    }).not.toThrow();
  });
});

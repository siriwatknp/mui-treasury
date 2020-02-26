import React from 'react';
import { render } from '@testing-library/react';
import RowToggle from './RowToggle';

describe('RowToggle', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<RowToggle />);
    }).not.toThrow();
  });
});

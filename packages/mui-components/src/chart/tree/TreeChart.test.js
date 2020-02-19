import React from 'react';
import { render } from '@testing-library/react';
import TreeChart from './TreeChart';

describe('TreeChart', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<TreeChart />);
    }).not.toThrow();
  });
});

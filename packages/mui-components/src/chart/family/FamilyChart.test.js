import React from 'react';
import { render } from '@testing-library/react';
import FamilyChart from './FamilyChart';

describe('FamilyChart', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<FamilyChart />);
    }).not.toThrow();
  });
});

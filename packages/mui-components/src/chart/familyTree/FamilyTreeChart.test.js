import React from 'react';
import { render } from '@testing-library/react';
import FamilyTreeChart from './FamilyTreeChart';

describe('FamilyTreeChart', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<FamilyTreeChart />);
    }).not.toThrow();
  });
});

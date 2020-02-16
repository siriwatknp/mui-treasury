import React from 'react';
import { render } from '@testing-library/react';
import OrgChart from './OrgChart';

describe('OrgChart', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<OrgChart />);
    }).not.toThrow();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import SwitchToggle from './SwitchToggle';

describe('SwitchToggle', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<SwitchToggle />);
    }).not.toThrow();
  });
});

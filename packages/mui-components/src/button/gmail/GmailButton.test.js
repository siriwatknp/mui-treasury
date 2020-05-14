import React from 'react';
import { render } from '@testing-library/react';
import GmailButton from './GmailButton';

describe('GmailButton', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<GmailButton />);
    }).not.toThrow();
  });
});

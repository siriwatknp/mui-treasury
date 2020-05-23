import React from 'react';
import { render } from '@testing-library/react';
import GmailTabs from './GmailTabs';

describe('GmailTabs', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<GmailTabs />);
    }).not.toThrow();
  });
});

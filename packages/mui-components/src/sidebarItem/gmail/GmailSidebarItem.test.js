import React from 'react';
import { render } from '@testing-library/react';
import GmailSidebarItem from './GmailSidebarItem';

describe('GmailSidebarItem', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<GmailSidebarItem />);
    }).not.toThrow();
  });
});

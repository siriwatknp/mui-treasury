import React from 'react';
import { renderWithinLayout } from 'testingUtils/renderer';
import HeaderOffset from '../components/HeaderOffset';

describe('Offset', () => {
  test('HeaderOffset should have correct height based on header position', () => {
    const config = {
      header: {
        position: 'fixed',
        offsetHeight: 80,
      },
    };
    const { getByTestId, rerenderWithLayout } = renderWithinLayout(
      <HeaderOffset data-testid={'header-offset'} />,
      { config }
    );
    let computedStyle = getComputedStyle(getByTestId('header-offset'));
    expect(computedStyle.height).toBe('80px');

    config.header.offsetHeight = 56;
    rerenderWithLayout(<HeaderOffset data-testid={'header-offset'} />);
    computedStyle = getComputedStyle(getByTestId('header-offset'));
    expect(computedStyle.height).toBe('56px');
  });
});

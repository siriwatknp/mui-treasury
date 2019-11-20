import React from 'react';
import { renderWithinLayout } from 'testingUtils/renderer';
import SecondarySidebar from '../components/SecondarySidebar';

describe('[Layout_RightSidebar]', function() {
  test('[Permanent] should always display on screen', () => {
    const { getByTestId } = renderWithinLayout(
      <SecondarySidebar data-testid={'sidebar-root'} />,
      {
        config: {
          secondarySidebar: { variant: 'permanent' },
        },
      }
    );
    const sidebarRoot = getByTestId('sidebar-root');
    expect(sidebarRoot).toBeInTheDocument();
  });

  // todo: can be triggered (open | close) by context fn: set
});

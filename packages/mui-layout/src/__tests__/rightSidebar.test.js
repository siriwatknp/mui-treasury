import React from 'react';
import { renderWithinLayout } from 'testingUtils/renderer';
import RightSidebar from '../components/RightSidebar';

describe('[Layout_RightSidebar]', function() {
  test('[Permanent] should always display on screen', () => {
    const { getByTestId } = renderWithinLayout(
      <RightSidebar data-testid={'sidebar-root'} />,
      {
        config: {
          rightSidebar: { variant: 'permanent' },
        },
      }
    );
    const sidebarRoot = getByTestId('sidebar-root');
    expect(sidebarRoot).toBeInTheDocument();
  });

  // todo: can be triggered (open | close) by context fn: set
});

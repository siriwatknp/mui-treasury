import React from 'react';
import { render } from '@testing-library/react';
import CollapsibleMenu from './CollapsibleMenu';

describe('CollapsibleMenu', () => {
  const renderComponent = () =>
    render(
      <CollapsibleMenu
        renderWrapper={({ children, collapsed }) => (
          <div collapsed={`${collapsed}`}>{children}</div>
        )}
        renderToggle={({ collapsed, onClick }) => (
          <CollapsibleMenu.Row data-testid="row">
            <CollapsibleMenu.RowItem data-testid="row-item">
              Category
            </CollapsibleMenu.RowItem>
            <CollapsibleMenu.Action
              data-testid="action"
              toggled={collapsed}
              onClick={onClick}
            />
          </CollapsibleMenu.Row>
        )}
      >
        <CollapsibleMenu.ListItem>List item</CollapsibleMenu.ListItem>
        <CollapsibleMenu.ListItem>List item</CollapsibleMenu.ListItem>
      </CollapsibleMenu>
    );
  it('render without clashes', () => {
    expect(() => {
      renderComponent();
    }).not.toThrow();
  });
});

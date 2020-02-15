---
to: packages/mui-components/src/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>.test.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import { render } from '@testing-library/react';
import <%=displayName%> from './<%=displayName%>';

describe('<%=displayName%>', () => {
  it('render without clashes', () => {
    expect(() => {
      render(<<%=displayName%> />);
    }).not.toThrow();
  });
});

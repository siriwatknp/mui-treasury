---
to: packages/mui-components/src/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>.stories.js
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import { storiesOf } from '@storybook/react';
import <%= displayName %> from './<%= displayName %>';

storiesOf('mui-components|<%= h.changeCase.pascal(category) %>', module).add('<%= name %>', () => (
  <<%= displayName %> />
));

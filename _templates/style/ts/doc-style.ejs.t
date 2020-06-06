---
to: website/src/docs/styles/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>Style.tsx
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';

// @ts-ignore
import { use<%= displayName %>Styles } from '@mui-treasury/styles/<%= category %>/<%= name %>';

// IComposition is for internal usage only
// you can remove IComposition in your project
export const <%= displayName %>Style: React.FC<{}> & IComposition = () => {
  return (
    <>
      Style showcase goes here!
    </>
  );
};
// hide-start
// eslint-disable-next-line import/first
import Showcase, { IMetadata, ShowcaseProps } from '../../../../components/Showcase';

interface IComposition {
  Showcase: React.FC<ShowcaseProps>
  metadata: IMetadata
}

<%= displayName %>Style.Showcase = props => (
  <Showcase
    {...props}
    title={'<%= h.changeCase.pascal(name) %>'}
    description={''}
    creators={[require('constants/creators').<%= by %>]}
  >
    <<%= displayName %>Style />
  </Showcase>
)
<%= displayName %>Style.metadata = {
  path: 'styles/<%= category %>/<%= name %>',
  colSpan: 1,
  rowSpan: 2,
  createdAt: '<%= h.now() %>',
  files: [{ pkg: 'mui-styles', path: '<%= category %>/<%= name %>/<%= name + h.changeCase.pascal(category) %>.styles.ts' }],
};
// hide-end

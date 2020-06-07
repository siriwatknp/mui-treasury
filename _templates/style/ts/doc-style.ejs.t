---
to: website/src/docs/styles/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>Style.tsx
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';

import { use<%= displayName %>Styles } from '@mui-treasury/styles/<%= category %>/<%= name %>';

export const <%= displayName %>Style: React.FC<{}> = React.memo(
  function <%= displayName %>() {
    return (
      <>
        Style showcase goes here!
      </>
    );
  }
);
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'<%= h.changeCase.pascal(name) %>'}
    description={''}
    creators={[require('constants/creators').<%= by %>]}
  >
    <<%= displayName %>Style />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/<%= category %>/<%= name %>',
  colSpan: 1,
  rowSpan: 2,
  createdAt: '<%= h.now() %>',
  files: [{ pkg: 'mui-styles', path: '<%= category %>/<%= name %>/<%= name + h.changeCase.pascal(category) %>.styles.ts' }],
};
// @ts-ignore
<%= displayName %>Style.Showcase = AttachedShowcase
// @ts-ignore
<%= displayName %>Style.metadata = metadata
// hide-end

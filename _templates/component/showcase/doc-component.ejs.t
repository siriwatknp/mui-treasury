---
to: website/src/docs/components/<%= category %>/<%= name %>/<%= h.changeCase.pascal(name) + h.changeCase.pascal(category) %>Demo.tsx
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';

export const <%= displayName %>Demo = React.memo(
  function <%= displayName %>() {
    return (
      <>
        Demo goes here!
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
    <<%= displayName %>Demo />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'components/<%= category %>/<%= name %>',
  colSpan: 1,
  rowSpan: 2,
  createdAt: '<%= h.now() %>',
  files: [],
};
// @ts-ignore
<%= displayName %>Demo.Showcase = AttachedShowcase
// @ts-ignore
<%= displayName %>Demo.metadata = metadata
// hide-end

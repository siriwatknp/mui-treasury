import React from 'react';

// @ts-ignore
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';

// IComposition is for internal usage only
// you can remove IComposition in your project
export const DynamicAvatarStyle: React.FC<{}> & IComposition = () => {
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

DynamicAvatarStyle.Showcase = props => (
  <Showcase
    {...props}
    title={'Dynamic'}
    description={'customisable size and radius'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <DynamicAvatarStyle />
  </Showcase>
)
DynamicAvatarStyle.metadata = {
  path: 'styles/avatar/dynamic',
  colSpan: 4,
  rowSpan: 2,
  createdAt: 'Sat Jun 06 2020',
  files: [{ pkg: 'mui-styles', path: 'avatar/dynamic/dynamicAvatar.styles.ts' }],
};
// hide-end

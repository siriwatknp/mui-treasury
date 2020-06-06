import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { useGrowAvatarStyles } from '@mui-treasury/styles/avatar/grow';

// IComposition is for internal usage only
// you can remove IComposition in your project
export const GrowAvatarStyle: React.FC<{}> & IComposition = () => {
  const src =
    'https://freedesignfile.com/upload/2017/05/Sunrise-tropical-island-beach-view-HD-picture-01.jpg';
  const styles = useGrowAvatarStyles({ src, size: 100, radius: 16, blur: '16px' });
  return (
    <>
      <Avatar classes={styles} src={src} />
    </>
  );
};
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

interface IComposition {
  Showcase: React.FC<ShowcaseProps>;
  metadata: IMetadata;
}

GrowAvatarStyle.Showcase = props => (
  <Showcase
    {...props}
    title={'Grow'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <GrowAvatarStyle />
  </Showcase>
);
GrowAvatarStyle.metadata = {
  path: 'styles/avatar/grow',
  colSpan: 1,
  rowSpan: 2,
  createdAt: 'Sat Jun 06 2020',
  files: [{ pkg: 'mui-styles', path: 'avatar/grow/growAvatar.styles.ts' }],
};
// hide-end

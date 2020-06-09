import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { useGrowAvatarStyles } from '@mui-treasury/styles/avatar/grow';

export const GrowAvatarStyle: React.FC<{}> = React.memo(function GrowAvatar() {
  const src =
    'https://freedesignfile.com/upload/2017/05/Sunrise-tropical-island-beach-view-HD-picture-01.jpg';
  const styles = useGrowAvatarStyles({
    src,
    size: 100,
    radius: 16,
    blur: '16px',
  });
  return (
    <>
      <Avatar classes={styles} src={src} />
    </>
  );
});
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Grow'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <GrowAvatarStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/avatar/grow',
  colSpan: { sm: 6, md: 4, lg: 3 },
  rowSpan: 1,
  createdAt: 'Sat Jun 06 2020',
  files: [{ pkg: 'mui-styles', path: 'avatar/grow/growAvatar.styles.ts' }],
};
// @ts-ignore
GrowAvatarStyle.Showcase = AttachedShowcase;
// @ts-ignore
GrowAvatarStyle.metadata = metadata;
// hide-end

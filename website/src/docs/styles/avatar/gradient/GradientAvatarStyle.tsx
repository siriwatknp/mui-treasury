import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient';

export const GradientAvatarStyle = React.memo(() => {
  const styles = useGradientAvatarStyles({
    size: 80,
    gap: 3,
    thickness: 3,
    gapColor: '#f4f7fa',
    color: 'linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)',
  });
  return (
    <>
      <div className={styles.root}>
        <Avatar src={'https://i.pravatar.cc/300?img=30'} />
      </div>
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
    title={'Gradient'}
    description={'only for gradient color'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <GradientAvatarStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/avatar/gradient',
  colSpan: 1,
  rowSpan: 2,
  createdAt: 'Sun Jun 07 2020',
  files: [
    { pkg: 'mui-styles', path: 'avatar/gradient/gradientAvatar.styles.ts' },
  ],
};
// @ts-ignore
GradientAvatarStyle.Showcase = AttachedShowcase
// @ts-ignore
GradientAvatarStyle.metadata = metadata
// hide-end

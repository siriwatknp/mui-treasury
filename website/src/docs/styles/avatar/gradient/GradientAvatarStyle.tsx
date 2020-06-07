import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient';

// IComposition is for internal usage only
// you can remove IComposition in your project
export const GradientAvatarStyle: React.FC<{}> & IComposition = () => {
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

GradientAvatarStyle.Showcase = props => (
  <Showcase
    {...props}
    title={'Gradient'}
    description={'only for gradient color'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <GradientAvatarStyle />
  </Showcase>
);
GradientAvatarStyle.metadata = {
  path: 'styles/avatar/gradient',
  colSpan: 1,
  rowSpan: 2,
  createdAt: 'Sun Jun 07 2020',
  files: [
    { pkg: 'mui-styles', path: 'avatar/gradient/gradientAvatar.styles.ts' },
  ],
};
// hide-end

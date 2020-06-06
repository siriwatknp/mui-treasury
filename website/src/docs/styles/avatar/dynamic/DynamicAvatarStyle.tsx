import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useRowGutterStyles } from '@mui-treasury/styles/gutter/row';

// IComposition is for internal usage only
// you can remove IComposition in your project
export const DynamicAvatarStyle: React.FC<{}> & IComposition = () => {
  const styles = useDynamicAvatarStyles({ size: 48 });
  const styles2 = useDynamicAvatarStyles({ size: 64, radius: 8 });
  const styles3 = useDynamicAvatarStyles({ size: 32 });
  const gutterStyles = useRowGutterStyles({ size: 8 });
  return (
    <Box display={'flex'} className={gutterStyles.parent}>
      <Avatar classes={styles} src={'https://i.pravatar.cc/300?img=11'} />
      <Avatar classes={styles2} src={'https://i.pravatar.cc/300?img=12'} />
      <Avatar
        classes={styles3}
        variant={'square'}
        src={'https://i.pravatar.cc/300?img=13'}
      />
    </Box>
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

DynamicAvatarStyle.Showcase = props => (
  <Showcase
    {...props}
    title={'Dynamic'}
    description={'customisable size and radius'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <DynamicAvatarStyle />
  </Showcase>
);
DynamicAvatarStyle.metadata = {
  path: 'styles/avatar/dynamic',
  colSpan: 1,
  rowSpan: 2,
  createdAt: 'Sat Jun 06 2020',
  files: [
    { pkg: 'mui-styles', path: 'avatar/dynamic/dynamicAvatar.styles.ts' },
  ],
};
// hide-end

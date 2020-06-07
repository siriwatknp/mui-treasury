import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import { useOnlineAvatarStyles } from '@mui-treasury/styles/avatar/online';
import { useRowGutterStyles } from '@mui-treasury/styles/gutter/row';

export const OnlineAvatarStyle: React.FC<{}> = React.memo(
  function OnlineAvatar() {
    const gutterStyles = useRowGutterStyles({ size: 16 });
    const styles = useOnlineAvatarStyles({ color: '#f05a99' });
    const styles2 = useOnlineAvatarStyles({
      color: '#1081f8',
      size: 100,
      thickness: 4,
      gap: 4,
    });
    return (
      <Box className={gutterStyles.parent}>
        <div className={styles.root}>
          <Avatar src={'https://i.pravatar.cc/300'} />
        </div>
        <div className={styles2.root}>
          <Avatar src={'https://i.pravatar.cc/300'} />
        </div>
      </Box>
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
    title={'Online'}
    description={'only for solid color'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <OnlineAvatarStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/avatar/online',
  colSpan: 1,
  rowSpan: 2,
  createdAt: 'Sat Jun 06 2020',
  files: [{ pkg: 'mui-styles', path: 'avatar/online/onlineAvatar.styles.ts' }],
};
// @ts-ignore
OnlineAvatarStyle.Showcase = AttachedShowcase;
// @ts-ignore
OnlineAvatarStyle.metadata = metadata;
// hide-end

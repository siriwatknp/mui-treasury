import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Apps from '@material-ui/icons/Apps';
import { Row, Item } from '@mui-treasury/components/flex';

import { useGrowIconButtonStyles } from '@mui-treasury/styles/iconButton/grow';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

export const GrowIconButtonStyle = React.memo(function GrowIconButton() {
  const largeStyles = useSizedIconButtonStyles({ childSize: 64, padding: 12 });
  const defaultGrowStyles = useGrowIconButtonStyles();
  const customGrowStyles = useGrowIconButtonStyles({ color: '#ABCFF8', thickness: 6 });
  return (
    <Row>
      <Item>
        <IconButton classes={defaultGrowStyles}>
          <Apps />
        </IconButton>
      </Item>
      <Item>
        <IconButton
          classes={largeStyles}
          className={customGrowStyles.root}
          disableTouchRipple
        >
          <img
            alt={''}
            src={
              'https://seeklogo.com/images/O/open-collective-logo-8C2D7E16D3-seeklogo.com.png'
            }
          />
        </IconButton>
      </Item>
    </Row>
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
    <GrowIconButtonStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/iconButton/grow',
  colSpan: 4,
  createdAt: 'Sat Jun 13 2020',
  files: [
    { pkg: 'mui-styles', path: 'iconButton/grow/growIconButton.styles.ts' },
  ],
  frameProps: { bgcolor: '#E7EDF3' }
};
// @ts-ignore
GrowIconButtonStyle.Showcase = AttachedShowcase;
// @ts-ignore
GrowIconButtonStyle.metadata = metadata;
// hide-end

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';

export const SizedIconButtonStyle = React.memo(() => {
  const tiny = useSizedIconButtonStyles({
    color: '#6894ff',
    padding: '1rem',
    childSize: '1rem',
  });
  const small = useSizedIconButtonStyles({
    color: '#000',
    padding: 8,
    childSize: 24,
  });
  const large = useSizedIconButtonStyles({ padding: 16, childSize: 32 });
  return (
    <div>
      <IconButton classes={tiny}>
        <Search />
      </IconButton>
      <IconButton classes={small}>
        <Add />
      </IconButton>
      <IconButton classes={large} color={'secondary'}>
        <Delete />
      </IconButton>
    </div>
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
    title={'Sized'}
    description={'custom button and icon size dynamically'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <SizedIconButtonStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/iconButton/sized',
  colSpan: 4,
  createdAt: 'Thu May 14 2020',
  files: [{ pkg: 'mui-styles', path: 'iconButton/sized/sizedIconButton.styles.ts' }],
};
// @ts-ignore
SizedIconButtonStyle.Showcase = AttachedShowcase
// @ts-ignore
SizedIconButtonStyle.metadata = metadata
// hide-end

export default SizedIconButtonStyle;

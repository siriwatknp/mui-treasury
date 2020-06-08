import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallMade from '@material-ui/icons/CallMade';

import { Row, Column, Item } from '@mui-treasury/components/flex';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.2rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#495869',
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: '#495869',
  },
}));

const BasicProfile = props => {
  const styles = useBasicProfileStyles();
  return (
    <Row {...props}>
      <Avatar className={styles.avatar}>S</Avatar>
      <Item position={'middle'} pl={{ xs: 1, sm: 1.5 }}>
        <Typography className={styles.overline}>CREATOR</Typography>
        <Typography className={styles.name}>siriwatknp</Typography>
      </Item>
    </Row>
  );
};

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: '1.25rem',
    color: '#122740',
  },
  subheader: {
    fontSize: '0.875rem',
    color: '#495869',
  },
}));

const CardHeader = props => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={'middle'}>
        <Typography className={styles.title}>
          <b>Firebase</b>
        </Typography>
        <Typography className={styles.subheader}>
          Similar to firebase theme
        </Typography>
      </Item>
      <Item position={'right'} mr={-0.5}>
        <StyledTooltip title={'See details'}>
          <IconButton classes={iconBtnStyles}>
            <CallMade />
          </IconButton>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#5B9FED',
    },
  },
}));

export const ShowcaseCardDemo = React.memo(function ShowcaseCard() {
  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }
  return (
    <Grid container spacing={4} justify={'center'}>
      <Grid item xs={12} sm={4} md={3}>
        <Column className={styles.card} p={gap} gap={gap}>
          <CardHeader />
          <Item>
            <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8} />
          </Item>
          <BasicProfile />
        </Column>
      </Grid>
      <Grid item xs={12} sm={8} lg={7}>
        <Row className={styles.card} p={gap} gap={gap}>
          <Item grow>
            <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8} />
          </Item>
          <Column>
            <CardHeader />
            <BasicProfile position={'bottom'} />
          </Column>
        </Row>
      </Grid>
    </Grid>
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
    title={'Showcase'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <ShowcaseCardDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/card/showcase',
  createdAt: 'Sun May 31 2020',
  colSpan: 12,
  rowSpan: 1,
  frameProps: { bgcolor: '#fff' },
  files: [],
};
// @ts-ignore
ShowcaseCardDemo.Showcase = AttachedShowcase;
// @ts-ignore
ShowcaseCardDemo.metadata = metadata;
// hide-end
export default ShowcaseCardDemo

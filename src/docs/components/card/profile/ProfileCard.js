import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow';
import MOCK from 'constants/mock';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

const ProfileCard = () => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        <Avatar className={styles.avatar} src={MOCK.face} />
        <h3 className={styles.heading}>Alan Podemski</h3>
        <span className={styles.subheader}>Poland</span>
      </CardContent>
      <Divider light />
      <Grid container>
        <Grid item xs={6}>
          <Box p={2}>
            <p className={styles.statLabel}>Followers</p>
            <p className={styles.statValue}>6941</p>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2}>
            <p className={styles.statLabel}>Following</p>
            <p className={styles.statValue}>12</p>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

// hide-start
ProfileCard.metadata = {
  title: 'Profile',
  description: 'Social network',
  path: 'card/profile',
  files: [],
};
// hide-end

export default ProfileCard;

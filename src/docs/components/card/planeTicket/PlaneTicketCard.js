import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import { useVerticalRipStyles } from '@mui-treasury/styles/rip';
import MOCK from 'constants/mock';

const mainColor = '#003399';
const lightColor = '#ecf2ff';
const borderRadius = 12;

const useStyles = makeStyles(({ palette }) => ({
  card: {
    overflow: 'visible',
    background: 'none',
    display: 'flex',
    minWidth: 400,
    minHeight: 150,
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
    '& $moveLeft, $moveRight': {
      transition: '0.3s',
    },
    '&:hover': {
      '& $moveLeft': {
        transform: 'translateX(-8px)',
      },
      '& $moveRight': {
        transform: 'translateX(8px)',
      },
    },
  },
  left: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    flexBasis: '33.33%',
    display: 'flex',
    backgroundColor: '#fff',
  },
  media: {
    margin: 'auto',
    width: 80,
    height: 80,
    borderRadius: '50%',
  },
  right: {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: lightColor,
  },
  label: {
    padding: '0 8px',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 4,
  },
  subheader: {
    fontSize: 12,
    margin: 0,
    color: palette.text.secondary,
  },
  path: {
    flex: 1,
    flexBasis: 72,
    padding: '0 4px',
  },
  line: {
    position: 'relative',
    margin: '20px 0 16px',
    borderBottom: '1px dashed rgba(0,0,0,0.38)',
  },
  plane: {
    position: 'absolute',
    display: 'inline-block',
    padding: '0 4px',
    fontSize: 32,
    backgroundColor: lightColor,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(90deg)',
  },
  flight: {
    fontSize: 14,
    lineHeight: '24px',
    minWidth: 48,
    padding: '0 8px',
    borderRadius: 40,
    backgroundColor: '#bed0f5',
    color: mainColor,
    display: 'block',
  },
  moveLeft: {},
  moveRight: {},
}));

const PlaneTicketCard = () => {
  const styles = useStyles();
  const ripStyles = useVerticalRipStyles({
    size: 24,
    rightColor: lightColor,
    tearColor: mainColor,
  });
  return (
    <Card className={styles.card} elevation={0}>
      <div className={cx(styles.left, styles.moveLeft)}>
        <CardMedia className={styles.media} image={MOCK.planeLogoImg} />
      </div>
      <div className={cx(ripStyles.left, styles.moveLeft)}>
        <div className={ripStyles.tear} />
      </div>
      <div className={cx(ripStyles.right, styles.moveRight)}>
        <div className={ripStyles.tear} />
      </div>
      <div className={cx(styles.right, styles.moveRight)}>
        <div className={styles.label}>
          <h2 className={styles.heading}>BEK</h2>
          <p className={styles.subheader}>Beijing China</p>
        </div>
        <div className={styles.path}>
          <div className={styles.line}>
            <AirplanemodeActive className={styles.plane} />
          </div>
          <span className={styles.flight}>AB256</span>
        </div>
        <div className={styles.label}>
          <h2 className={styles.heading}>DMK</h2>
          <p className={styles.subheader}>Don Meaung</p>
        </div>
      </div>
    </Card>
  );
};

// hide-start
PlaneTicketCard.metadata = {
  title: 'Plane Ticket',
  description: 'An inspiration ticket from Pinterest',
  path: 'card/planeTicket',
  longFrame: true,
  frameProps: {
    bgcolor: mainColor,
  },
  files: [],
};
// hide-end

export default PlaneTicketCard;

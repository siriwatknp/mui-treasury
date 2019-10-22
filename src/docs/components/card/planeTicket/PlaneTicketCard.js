import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import MOCK from 'constants/mock';

const mainColor = '#003399';
const lightColor = '#ecf2ff';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    background: 'none',
    display: 'flex',
    borderRadius: 12,
    minWidth: 400,
    minHeight: 150,
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
  },
  left: {
    flexBasis: '33.33%',
    display: 'flex',
    backgroundColor: '#fff',
  },
  rip: {
    flexBasis: 20,
    flexShrink: 0,
    position: 'relative',
    margin: '10px 0',
    textAlign: 'center',
    background: `linear-gradient(to right, #fff 50%, ${lightColor} 50%)`,
    '&:before, &:after': {
      boxSizing: 'content-box',
      display: 'block',
      content: '" "',
      width: 20,
      height: 20,
      borderRadius: '50%',
      position: 'absolute',
      left: '50%',
      borderWidth: 5,
      borderStyle: 'solid',
      borderLeftColor: 'transparent',
    },
    '&:before': {
      top: -10,
      transform: 'translate(-50%, -50%) rotate(45deg)',
      borderBottomColor: '#fff',
      borderRightColor: lightColor,
      borderTopColor: 'transparent',
    },
    '&:after': {
      bottom: -10,
      transform: 'translate(-50%, 50%) rotate(-45deg)',
      borderTopColor: '#fff',
      borderRightColor: lightColor,
      borderBottomColor: 'transparent',
    },
  },
  tear: {
    borderRight: `3px dotted ${mainColor}`,
    height: '100%',
    display: 'inline-block',
  },
  media: {
    margin: 'auto',
    width: 80,
    height: 80,
    borderRadius: '50%',
  },
  right: {
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
}));

const PlaneTicketCard = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card} elevation={0}>
      <div className={styles.left}>
        <CardMedia className={styles.media} image={MOCK.planeLogoImg} />
      </div>
      <div className={styles.rip}>
        <div className={styles.tear} />
      </div>
      <div className={styles.right}>
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

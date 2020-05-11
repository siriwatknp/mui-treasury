import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
  title: {
    textAlign: 'center',
    marginBottom: '-0.5rem',
  },
}));

const BrandCard = ({ src, title, imgBgColor, ...props }) => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  return (
    <Card component={'a'} {...props} className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={src}
        style={{ backgroundColor: imgBgColor }}
      />
      <CardContent className={styles.content}>
        <Typography className={cx(textCardContentStyles.heading, styles.title)}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BrandCard;

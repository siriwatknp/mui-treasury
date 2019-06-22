import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';

const PeaEventCardSmall = ({ image, name, range, time, images }) => (
  <Card className={'PeaEventCardSmall-root'}>
    <CardMedia className={'MuiCardMedia-root'} image={image}>
      {range && (
        <div className={'MuiCardTag-root'}>
          <PeaIcon size={'small'} color={'white'} icon={'location_on'} />{' '}
          {range}
        </div>
      )}
    </CardMedia>
    <CardContent className={'MuiCardContent-root'}>
      <Typography className={'MuiTypography--heading'}>{name}</Typography>
      <Grid container alignItems={'center'} spacing={1}>
        <Grid item>
          <PeaIcon
            size={'small'}
            color={'secondary'}
            icon={'fas fa-calendar-alt'}
          />
        </Grid>
        <Grid item>
          <Typography color={'textSecondary'} variant={'caption'} gutterBottom>
            {time}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems={'center'} spacing={1}>
        <Grid item>
          <PeaIcon size={'small'} color={'secondary'} icon={'fas fa-users'} />
        </Grid>
        <Grid item>
          <PeaAvatar.Group
            images={images}
            more={3}
            avatarProps={{ size: 'small' }}
          />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

PeaEventCardSmall.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  range: PropTypes.string,
  time: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
};
PeaEventCardSmall.defaultProps = {
  range: '',
  images: [],
};
PeaEventCardSmall.metadata = {
  name: 'Pea Event Card Small',
};
PeaEventCardSmall.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaEventCardSmall;

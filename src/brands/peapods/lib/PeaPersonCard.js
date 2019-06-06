import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';

const PeaPersonCard = ({ image, name, tag, location, bio }) => (
  <Card className={'PeaPersonCard-root'}>
    <CardMedia className={'MuiCardMedia-root'} image={image} />
    <CardContent className={'MuiCardContent-root'}>
      <ListItem className={'MuiListItem-root'}>
        <ListItemText primary={name} secondary={tag} />
        <PeaButton
          className={'MuiButton--auto'}
          variant={'contained'}
          color={'primary'}
        >
          Follow
        </PeaButton>
      </ListItem>
      <Grid container spacing={1} wrap={'nowrap'}>
        <Grid item>
          <PeaIcon size={'small'} color={'secondary'} icon={'location_on'} />
        </Grid>
        <Grid item>
          <Typography>{location}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} wrap={'nowrap'}>
        <Grid item>
          <PeaIcon size={'small'} color={'secondary'} icon={'info'} />
        </Grid>
        <Grid item>
          <Typography>{bio}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

PeaPersonCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string,
};
PeaPersonCard.defaultProps = {
  bio: '',
};
PeaPersonCard.metadata = {
  name: 'Pea Person Card',
};
PeaPersonCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaPersonCard;

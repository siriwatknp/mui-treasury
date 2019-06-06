import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';
import PeaText from './PeaTypography';
import PeaIcon from './PeaIcon';

const PeaUserCard = ({
  name,
  tag,
  location,
  bio,
  cover,
  image,
  AvatarProps,
}) => (
  <Card className={'PeaUserCard-root'}>
    <CardMedia className={'MuiCardMedia-root'} image={cover}>
      <PeaAvatar src={image} size={'huge'} {...AvatarProps} />
    </CardMedia>
    <CardContent className={'MuiCardContent-root'}>
      <div className={'PeaUserCard-actions'}>
        <PeaButton
          variant={'contained'}
          color={'primary'}
          size={'small'}
          style={{ minWidth: 100 }}
        >
          Follow
        </PeaButton>
      </div>
      <Box mb={2}>
        <PeaText weight={'bold'} color={'textPrimary'}>
          {name}
        </PeaText>
        <PeaText variant={'body2'} gutterBottom>
          {tag}
        </PeaText>
      </Box>
      <PeaText>
        <PeaIcon
          size={'small'}
          color={'secondary'}
          icon={'location_on'}
          push={'right'}
        />
        {location}
      </PeaText>
      <PeaText>
        <PeaIcon
          size={'small'}
          color={'secondary'}
          icon={'info'}
          push={'right'}
        />
        {bio}
      </PeaText>
    </CardContent>
  </Card>
);

PeaUserCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string,
  cover: PropTypes.string,
  AvatarProps: PropTypes.shape({}),
};
PeaUserCard.defaultProps = {
  bio: '',
  cover: '',
  AvatarProps: {},
};
PeaUserCard.metadata = {
  name: 'Pea User Card',
};
PeaUserCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaUserCard;

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PeaTypography from './PeaTypography';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';

const PodCard = ({ image, name, range, time, price, images }) => (
  <Card className={'PodCard-root'}>
    <CardMedia className={'MuiCardMedia-root'} image={image}>
      <Box
        position={'absolute'}
        left={0}
        right={0}
        bottom={0}
        p={1.5}
        display={'flex'}
        justifyContent={'space-between'}
      >
        {range && (
          <div className={'MuiCardTag-root'}>
            <PeaIcon size={'small'} color={'white'} icon={'location_on'} />{' '}
            {range}
          </div>
        )}
        <PeaAvatar.Group
          images={images}
          more={3}
          avatarProps={{ size: 'small' }}
        />
      </Box>
    </CardMedia>
    <CardContent className={'MuiCardContent-root'}>
      <PeaTypography weight={'bold'} bottomSpace={'small'}>
        {name}
      </PeaTypography>
      <PeaTypography variant={'body2'} bottomSpace={'small'}>
        <PeaIcon
          push={'right'}
          size={'small'}
          color={'secondary'}
          icon={'far fa-dollar-sign'}
        />
        {price}
      </PeaTypography>
      <PeaTypography variant={'body2'}>
        <PeaIcon
          push={'right'}
          size={'small'}
          color={'secondary'}
          icon={'fas fa-calendar-alt'}
        />
        {time}
      </PeaTypography>
    </CardContent>
  </Card>
);

PodCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  range: PropTypes.string,
  time: PropTypes.string.isRequired,
  price: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
};
PodCard.defaultProps = {
  range: '',
  images: [],
  price: undefined,
};
PodCard.metadata = {
  name: 'Pod Card',
};
PodCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PodCard;

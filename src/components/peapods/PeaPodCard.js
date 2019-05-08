/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';

const list = [
  {
    key: '1',
    icon: 'fas fa-calendar-alt',
    text: 'Thursday, January 10th, 4:00am',
    label: 'More details',
  },
  {
    key: '2',
    icon: 'location_on',
    text: 'Pivotal Labs, 875 Howard St. San Francisco USA',
    label: 'Show map',
  },
  {
    key: '3',
    icon: 'fas fa-users',
    label: 'Show all',
    // eslint-disable-next-line react/prop-types
    renderText: ({ podCount, peopleGoing, peopleInterested }) => (
      <React.Fragment>
        <b>{podCount}</b> Pods, <b>{peopleGoing.length}</b> Going and{' '}
        <b>{peopleInterested.length}</b> interested
      </React.Fragment>
    ),
  },
];

const PeaPodCard = ({
  image,
  profile,
  social,
  title,
  podCount,
  peopleGoing,
  peopleInterested,
}) => (
  <Card className={'PeaPodCard-root'}>
    <CardHeader
      avatar={<PeaAvatar src={profile.image} />}
      title={
        <>
          <b>{profile.name}</b> created pod for
        </>
      }
      subheader={'5 minutes ago'}
      action={<PeaAvatar src={social} />}
    />
    <CardMedia className={'MuiCardMedia-root'} image={image} />
    <CardContent className={'MuiCardContent-root'}>
      <Typography className={'MuiTypography--heading'}>{title}</Typography>
      {list.map(item => (
        <Grid key={item.key} container spacing={1} wrap={'nowrap'}>
          <Grid item>
            <PeaIcon size={'small'} color={'secondary'} icon={item.icon} />
          </Grid>
          <Grid item xs>
            <Typography color={'textSecondary'} variant={'caption'}>
              {item.renderText
                ? item.renderText({ podCount, peopleGoing, peopleInterested })
                : item.text}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={'caption'}>
              <Link color={'secondary'}>{item.label}</Link>
            </Typography>
          </Grid>
        </Grid>
      ))}
      <Grid
        className={'PeaPodCardPeople-root'}
        container
        alignItems={'center'}
        spacing={1}
      >
        <Grid item xs>
          <div className={'PeaPodCardPeople-people'}>
            <Typography variant={'caption'} color={'textSecondary'}>
              Attending :
            </Typography>
            <PeaAvatar.Group {...peopleGoing} avatarProps={{ size: 'small' }} />
          </div>
          <div className={'PeaPodCardPeople-people'}>
            <Typography variant={'caption'} color={'textSecondary'}>
              Interested :
            </Typography>
            <PeaAvatar.Group
              {...peopleInterested}
              avatarProps={{ size: 'small' }}
            />
          </div>
        </Grid>
        <Grid item>
          <PeaButton color={'secondary'} className={'MuiButton--auto'}>
            Join Pod
          </PeaButton>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

PeaPodCard.propTypes = {
  image: PropTypes.string.isRequired,
  profile: PropTypes.shape({ name: PropTypes.string, image: PropTypes.string })
    .isRequired,
  social: PropTypes.string.isRequired,
  title: PropTypes.string,
  podCount: PropTypes.number,
  peopleGoing: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    more: PropTypes.number,
  }).isRequired,
  peopleInterested: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    more: PropTypes.number,
  }).isRequired,
};
PeaPodCard.defaultProps = {
  title: '',
  podCount: 0,
};
PeaPodCard.metadata = {
  name: 'Pea Pod Card',
};
PeaPodCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaPodCard;

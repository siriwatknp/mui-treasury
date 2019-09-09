import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';

import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';
import PeaCardActions from './PeaCardActions';
import PeaImageCarousel from './PeaImageCarousel';
import PeaMenuItem from './PeaMenuItem';
import PeaShareContent from './PeaShareContent';

const MAX_AVATARS = 13;

const createList = ({
  timeString,
  location,
  podCount,
  attendingCount,
  interestedCount,
  limit,
}) => [
  {
    key: '1',
    icon: 'fas fa-calendar-alt',
    text: timeString,
  },
  {
    key: '2',
    icon: 'location_on',
    text: location,
  },
  {
    key: '3',
    icon: 'fas fa-users',
    renderText: () => (
      <React.Fragment>
        {!!limit && (
          <span>
            limit <b>{limit} - </b>
          </span>
        )}
        {podCount} pod{podCount > 1 ? 's' : ''}, {attendingCount} going,{' '}
        {interestedCount} interested
      </React.Fragment>
    ),
  },
];

const Details = props => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'fas fa-info-circle'} />}
    {...props}
  >
    Details
  </PeaButton>
);

const Share = props => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'fas fa-share-square'} />}
    {...props}
  >
    Share
  </PeaButton>
);

const CreatePod = props => (
  <PeaButton
    shape={''}
    size={'small'}
    variant={'contained'}
    color={'primary'}
    icon={<PeaIcon icon={'add_circle'} />}
    {...props}
  >
    Create Pod
  </PeaButton>
);

const MenuItemStyle = {
  padding: '20px',
};

const PeaEventCard = ({
  id,
  images,
  profile,
  social,
  socialLink,
  title,
  subTitle,
  timeString,
  location,
  podCount,
  attendingPeas,
  interestedPeas,
  stats,
  onShowDetailsClicked,
  onShareEventClicked,
  onCreatePodClicked,
  ...props
}) => {
  const [shareAnchorEl, setShareAnchorEl] = useState(null);
  const openSharePopover = Boolean(shareAnchorEl);
  const shareAriaId = openSharePopover ? 'share-popover' : undefined;

  const [openMoreShare, setOpenMoreShare] = useState(false);

  const handleShareClick = event => {
    event.stopPropagation();
    setShareAnchorEl(event.currentTarget);
  };

  const handleShareClose = event => {
    event.stopPropagation();
    setShareAnchorEl(null);
  };

  const handleShareItemClick = item => event => {
    event.stopPropagation();
    if (item === 'more') {
      if (navigator.share) {
        onShareEventClicked('native');
      } else {
        setOpenMoreShare(true);
      }
    } else {
      onShareEventClicked(item);
    }
    setShareAnchorEl(null);
  };

  const closeMoreShare = event => {
    event.stopPropagation();
    setOpenMoreShare(false);
  };

  const handleMoreShareItem = name => {
    onShareEventClicked(name);
    setOpenMoreShare(false);
  };

  return (
    <Card className={'PeaEventCard-root'} {...props}>
      <CardHeader
        avatar={<PeaAvatar src={profile.image} />}
        title={<b>{title}</b>}
        subheader={subTitle}
        action={
          social ? <PeaAvatar src={social} externalLink={socialLink} /> : null
        }
      />

      <PeaImageCarousel
        data={images.map((image, idx) => ({ image, id: idx }))}
      />

      <CardContent className={'MuiCardContent-root'}>
        <Grid container direction="row">
          <Grid container direction="column">
            {createList({
              timeString,
              location,
              podCount,
              attendingCount: stats.attending,
              interestedCount: stats.interested,
              limit: stats.limit,
            }).map(item => (
              <Grid key={item.key} container spacing={1} wrap={'nowrap'}>
                <Grid item>
                  <PeaIcon
                    size={'small'}
                    color={'secondary'}
                    icon={item.icon}
                  />
                </Grid>
                <Grid item xs>
                  <Typography color={'textSecondary'} variant={'caption'}>
                    {item.renderText ? item.renderText() : item.text}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid
          className={'PeaPodCardPeople-root'}
          container
          alignItems={'center'}
          spacing={2}
        >
          <Grid item xs={12} style={{ position: 'relative' }}>
            {!!attendingPeas.length && (
              <div className={'PeaPodCardPeople-people'}>
                <Typography variant={'caption'} color={'textSecondary'}>
                  Peas Attending
                </Typography>
                <PeaAvatar.Group
                  more={
                    attendingPeas.length > MAX_AVATARS
                      ? attendingPeas.length - MAX_AVATARS
                      : 0
                  }
                  images={attendingPeas.slice(0, MAX_AVATARS)}
                  avatarProps={{ size: 'small' }}
                />
              </div>
            )}

            {!!interestedPeas.length && (
              <div className={'PeaPodCardPeople-people'}>
                <Typography variant={'caption'} color={'textSecondary'}>
                  Peas Interested
                </Typography>
                <PeaAvatar.Group
                  more={
                    interestedPeas.length > MAX_AVATARS
                      ? interestedPeas.length - MAX_AVATARS
                      : 0
                  }
                  images={interestedPeas.slice(0, MAX_AVATARS)}
                  avatarProps={{ size: 'small' }}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </CardContent>

      <PeaCardActions
        centered
        left={
          <>
            <Share
              onClick={handleShareClick}
              aria-describedby={shareAriaId}
              variant="contained"
            />
            <Popover
              id={shareAriaId}
              open={openSharePopover}
              anchorEl={shareAnchorEl}
              onClose={handleShareClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Paper>
                <PeaMenuItem
                  style={MenuItemStyle}
                  onClick={handleShareItemClick('pea')}
                  label="Share with Peas"
                />

                <PeaMenuItem
                  style={MenuItemStyle}
                  onClick={handleShareItemClick('group')}
                  label="Share to Group"
                />

                <PeaMenuItem
                  style={MenuItemStyle}
                  label="More"
                  onClick={handleShareItemClick('more')}
                />
              </Paper>
            </Popover>
            <PeaShareContent
              open={openMoreShare}
              title={title}
              socialLink={socialLink}
              onClose={closeMoreShare}
              onShare={handleMoreShareItem}
            />
            <CreatePod onClick={onCreatePodClicked} />
            <Details onClick={onShowDetailsClicked} />
          </>
        }
      />
    </Card>
  );
};

PeaEventCard.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  social: PropTypes.string,
  socialLink: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  podCount: PropTypes.number,
  timeString: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  attendingPeas: PropTypes.arrayOf(PropTypes.string),
  interestedPeas: PropTypes.arrayOf(PropTypes.string),
  onShowDetailsClicked: PropTypes.func.isRequired,
  onCreatePodClicked: PropTypes.func.isRequired,
  onShareEventClicked: PropTypes.func.isRequired,
  stats: PropTypes.shape({
    interested: PropTypes.number.isRequired,
    attending: PropTypes.number.isRequired,
    limit: PropTypes.number,
  }).isRequired,
};

PeaEventCard.defaultProps = {
  subTitle: '',
  podCount: 0,
  attendingPeas: [],
  interestedPeas: [],
  social: undefined,
  socialLink: undefined,
};

PeaEventCard.metadata = {
  name: 'Pea Event Card',
};

PeaEventCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaEventCard;

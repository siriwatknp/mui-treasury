import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import cx from 'classnames';

import PeaButton from './PeaButton';
import PeaText from './PeaTypography';
import PeaAvatar from './PeaAvatar';
import PeaIcon from './PeaIcon';
import PeaTag from './PeaTag';
import PeaSwipeableTabs from './PeaSwipeableTabs';

// TODO: this can be cleaned up and refactored
// Much of this can be reused for GroupDetails

const renderAboutDetails = ({
  profile,
  timeString,
  mapOrigin,
  location,
  podCount,
  attendingCount,
  interestedCount,
  limit,
}) => [
  {
    key: '0',
    icon: (
      <img alt="event-host" src={profile.image} style={{ height: '100%' }} />
    ),
    renderText: () => (
      <span>
        Hosted by{' '}
        <Link target="_blank" href={profile.link}>
          {profile.name}
        </Link>
      </span>
    ),
  },
  {
    key: '1',
    icon: 'fas fa-calendar-alt',
    text: timeString,
  },
  {
    key: '2',
    icon: 'location_on',
    renderText: () => {
      // eslint-disable-next-line max-len
      const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${mapOrigin}&destination=${location}&travelMode=driving`;
      return (
        <Link href={mapDirectionsUrl} target="blank" rel="noopener">
          {location}
        </Link>
      );
    },
  },
  {
    key: '3',
    icon: 'fas fa-users',
    renderText: () => (
      <>
        {!!limit && (
          <span>
            limit <b>{limit} - </b>
          </span>
        )}
        <b>{podCount}</b> pods, <b>{attendingCount}</b> going, and{' '}
        <b>{interestedCount}</b> interested
      </>
    ),
  },
];

const PeaEventDetails = ({
  id,
  profile,
  title,
  description,
  tags,
  cover,
  timeAgo,
  timeString,
  sourceImage,
  sourceLink,
  podCount,
  mapOrigin,
  location,
  stats,
  isPodMember,
  onCreatePodClicked,
  onEditEventClicked,
  renderPods,
  renderConnections,
  isMobile,
  onChangeTab,
  isLoading,
  onReport,
}) => {
  const tabs = [
    { label: 'Pods' },
    { label: 'About' },
    { label: 'Connections' },
  ];

  const onTabChange = index => {
    if (onChangeTab) {
      onChangeTab(tabs[index].label);
    }
  };

  const buttonText = isPodMember ? 'Edit Pod' : 'Create Pod';

  const [anchorEl, setAnchor] = useState(null);
  const open = Boolean(anchorEl);

  const onReportClicked = () => {
    onReport();
    setAnchor(null);
  };

  const editEvent = () => {
    setAnchor(null);
    onEditEventClicked();
  };

  const renderMenu = () => (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchor(null)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        style: {
          minWidth: 240,
        },
      }}
    >
      <MenuItem onClick={onReportClicked}>
        <ListItemText disableTypography>
          <PeaText variant={'body1'} weight={'bold'}>
            Report
          </PeaText>
        </ListItemText>
      </MenuItem>

      <MenuItem onClick={() => editEvent()}>
        <ListItemText disableTypography>
          <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
            Edit Event
          </PeaText>
        </ListItemText>
      </MenuItem>
    </Menu>
  );

  return (
    <Card className={'PeaGroupProfile-root'}>
      <CardMedia className={'MuiCardMedia-root'} image={cover} />

      <CardContent className={'MuiCardContent-root'}>
        <Grid container direction="column">
          <Grid item container alignItems={'center'} xs>
            <PeaText variant={'h6'} weight={'bold'}>
              {title}
            </PeaText>
          </Grid>

          <Grid item>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <PeaText gutterBottom>
                  <PeaIcon push={'right'} color={'secondary'} size={'small'}>
                    fas fa-clock
                  </PeaIcon>
                  created {timeAgo}
                </PeaText>
              </Grid>

              <Grid item>
                {sourceImage && (
                  <button
                    type="button"
                    className="MuiButtonBase-root"
                    href={sourceLink}
                  >
                    <PeaAvatar src={sourceImage} />
                  </button>
                )}

                <PeaButton
                  shape={'circular'}
                  icon={'more_vert'}
                  size={'small'}
                  style={{ marginLeft: 8 }}
                  onClick={e => setAnchor(e.currentTarget)}
                />
                {renderMenu()}

                <PeaButton
                  onClick={() => onCreatePodClicked(id)}
                  variant={'contained'}
                  color={'primary'}
                  size="small"
                  loading={isLoading}
                  style={{ marginLeft: 8, minWidth: 120 }}
                >
                  {buttonText}
                </PeaButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      <PeaSwipeableTabs
        tabs={tabs}
        enableFeedback={isMobile}
        onTabChange={onTabChange}
      >
        {renderPods()}

        <>
          <PeaText color={'secondary'}>
            <b>Details</b>
          </PeaText>
          <Grid container direction="row">
            <Grid container direction="column">
              {renderAboutDetails({
                profile,
                timeString,
                mapOrigin,
                location,
                podCount,
                attendingCount: stats ? stats.attending : null,
                interestedCount: stats ? stats.interested : null,
                limit: stats ? stats.limit : null,
              }).map(item => (
                <Grid key={item.key} container spacing={1} wrap={'nowrap'}>
                  <Grid item>
                    {typeof item.icon === 'string' ? (
                      <PeaIcon
                        size={'big'}
                        color={'secondary'}
                        icon={item.icon}
                        shape="square"
                      />
                    ) : (
                      <div
                        style={{
                          fontSize: '28px',
                        }}
                        className={cx(
                          'MuiIcon-root',
                          '-size-big',
                          '-shape-circular',
                        )}
                      >
                        {item.icon}
                      </div>
                    )}
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

          <PeaText color={'secondary'}>
            <b>Description</b>
          </PeaText>

          {description && (
            <div className={cx('MuiTypography-root', 'MuiTypography-body1')}>
              {typeof description === 'string' ? (
                <PeaText>{description}</PeaText>
              ) : (
                React.Children.map(description, text => (
                  <div
                    style={{
                      marginBottom: 20,
                    }}
                  >
                    {text}
                  </div>
                ))
              )}
            </div>
          )}

          <PeaText color={'secondary'}>
            <b>Tags</b>
          </PeaText>
          <PeaText gutterBottom />
          <Grid container wrap="wrap" spacing={1}>
            {tags.map(tag => (
              <Grid item key={tag}>
                <PeaTag
                  color={'secondary'}
                  label={`#${tag}`}
                  onClick={() => {}}
                />
              </Grid>
            ))}
          </Grid>
        </>

        {renderConnections()}
      </PeaSwipeableTabs>
    </Card>
  );
};

PeaEventDetails.propTypes = {
  id: PropTypes.string.isRequired,
  isPodMember: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cover: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  sourceImage: PropTypes.string,
  sourceLink: PropTypes.string,
  onCreatePodClicked: PropTypes.func.isRequired,
  onEditEventClicked: PropTypes.func.isRequired,
  renderConnections: PropTypes.func.isRequired,
  renderPods: PropTypes.func.isRequired,
  podCount: PropTypes.number,
  timeString: PropTypes.string.isRequired,
  mapOrigin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    interested: PropTypes.number.isRequired,
    attending: PropTypes.number.isRequired,
    limit: PropTypes.number,
  }).isRequired,
  isMobile: PropTypes.bool,
  onChangeTab: PropTypes.func,
  isLoading: PropTypes.bool,
  onReport: PropTypes.func,
};

PeaEventDetails.defaultProps = {
  podCount: 0,
  description: undefined,
  tags: [],
  sourceImage: undefined,
  sourceLink: undefined,
  isMobile: true,
  onChangeTab: undefined,
  isLoading: false,
  onReport: () => {},
};

PeaEventDetails.metadata = {
  name: 'Pea Event Details',
};

export default memo(PeaEventDetails);

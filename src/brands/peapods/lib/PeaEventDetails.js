import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import cx from 'classnames';

import PeaButton from './PeaButton';
import PeaText from './PeaTypography';
import PeaAvatar from './PeaAvatar';
import PeaIcon from './PeaIcon';
import PeaTag from './PeaTag';

const createList = ({
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
  onLeavePodClicked,
  renderPods,
  renderConnections,
}) => {
  const [tabIndex, onChange] = useState(0);

  return (
    <Card className={'PeaGroupProfile-root'}>
      <CardMedia className={'MuiCardMedia-root'} image={cover} />

      <CardContent className={'MuiCardContent-root'}>
        <Grid container>
          <Grid item container alignItems={'center'} xs>
            <PeaText variant={'h6'} weight={'bold'}>
              {title}
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
            >
              email
            </PeaButton>

            {isPodMember ? (
              <PeaButton
                onClick={() => onLeavePodClicked(id)}
                variant={'outlined'}
                color={'danger'}
                size="small"
                style={{ marginLeft: 8, minWidth: 120 }}
              >
                Leave Pod
              </PeaButton>
            ) : (
              <PeaButton
                onClick={() => onCreatePodClicked(id)}
                variant={'contained'}
                color={'primary'}
                size="small"
                style={{ marginLeft: 8, minWidth: 120 }}
              >
                Create Pod
              </PeaButton>
            )}
          </Grid>
        </Grid>

        <PeaText gutterBottom>
          <PeaIcon push={'right'} color={'secondary'} size={'small'}>
            fas fa-clock
          </PeaIcon>
          created {timeAgo}
        </PeaText>

        <Tabs
          className={'MuiTabs-root'}
          variant={'fullWidth'}
          centered
          value={tabIndex}
          onChange={(e, val) => onChange(val)}
        >
          <Tab label="Pods" disableRipple />
          <Tab label="About" disableRipple />
          <Tab label="Connections" disableRipple />
        </Tabs>

        {tabIndex === 0 && <Box minHeight={300}>{renderPods()}</Box>}

        {tabIndex === 1 && (
          <Box mt={2}>
            <PeaText color={'secondary'}>
              <b>Details</b>
            </PeaText>
            <Grid container direction="row">
              <Grid container direction="column">
                {createList({
                  profile,
                  timeString,
                  mapOrigin,
                  location,
                  podCount,
                  attendingCount: stats.attending,
                  interestedCount: stats.interested,
                  limit: stats.limit,
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
            <PeaText gutterBottom>{description}</PeaText>

            <PeaText color={'secondary'}>
              <b>Tags</b>
            </PeaText>
            <PeaText gutterBottom />
            <Grid container spacing={1}>
              {tags.map(item => (
                <Grid item key={item.label}>
                  <PeaTag
                    color={'secondary'}
                    label={`#${item.label}`}
                    onClick={() => {}}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {tabIndex === 2 && <Box minHeight={300}>{renderConnections()}</Box>}
      </CardContent>
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
  description: PropTypes.string,
  cover: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  sourceImage: PropTypes.string,
  sourceLink: PropTypes.string,
  onCreatePodClicked: PropTypes.func.isRequired,
  onLeavePodClicked: PropTypes.func.isRequired,
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
};

PeaEventDetails.defaultProps = {
  podCount: 0,
  description: undefined,
  tags: [],
  sourceImage: undefined,
  sourceLink: undefined,
};

PeaEventDetails.metadata = {
  name: 'Pea Event Details',
};

export default PeaEventDetails;

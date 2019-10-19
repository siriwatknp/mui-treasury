/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';

const MAX_AVATARS = 7;
const DEFAULT_POD_SIZE_LIMIT = 3;

// TODO: we should be able to receive a 'onUserClicked' prop

const PeaPodCard = ({
  pod,
  joinPodText,
  onJoinPodClicked,
  onViewPeasClicked,
  isLoading,
  ...props
}) => {
  if (!pod) {
    return null;
  }
  const { members, maxSize, datingOption, state } = pod;

  const peopleGoing = members.map(member => member.profilePhoto);

  const limit = maxSize || DEFAULT_POD_SIZE_LIMIT;
  const stateString = state.toLowerCase();
  const dating = datingOption
    ? datingOption.toLowerCase().replace('_', ' ')
    : 'any';

  const items = [
    {
      key: 1,
      text: `Size Limit: ${limit}`,
      icon: members.length < limit ? 'fas fa-check' : 'fas fa-times-circle',
    },
    {
      key: 2,
      text: `Dating Option: ${dating}`,
      icon: 'fas fa-heart',
    },
    {
      key: 3,
      text: `State: ${stateString}`,
      icon: state === 'INTERESTED' ? 'fas fa-star' : 'fas fa-check',
    },
  ];

  return (
    <Card className={'PeaPodCard-root'} {...props}>
      <CardContent>
        <Grid
          className={'PeaPodCardPeople-root'}
          container
          alignItems={'center'}
          spacing={2}
        >
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                {items.map(item => (
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

              <Grid item xs={6} p={4}>
                <Grid container spacing={1}>
                  <Grid item>
                    <PeaButton
                      variant={'contained'}
                      color={'primary'}
                      size="small"
                      loading={isLoading}
                      onClick={onJoinPodClicked}
                      style={{
                        float: 'right',
                      }}
                    >
                      {joinPodText}
                    </PeaButton>
                  </Grid>

                  <Grid item>
                    <PeaButton
                      variant={'contained'}
                      color={'secondary'}
                      size="small"
                      onClick={onViewPeasClicked}
                      style={{
                        float: 'right',
                      }}
                    >
                      View Peas
                    </PeaButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div className={'PeaPodCardPeople-people'}>
              <PeaAvatar.Group
                more={
                  peopleGoing.length > MAX_AVATARS
                    ? peopleGoing.length - MAX_AVATARS
                    : 0
                }
                images={peopleGoing.slice(0, MAX_AVATARS)}
                avatarProps={{ size: 'big' }}
              />
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PeaPodCard.propTypes = {
  pod: PropTypes.shape({
    id: PropTypes.string,
    maxSize: PropTypes.number,
    datingOption: PropTypes.string,
    state: PropTypes.string,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        profilePhotos: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  }).isRequired,
  onJoinPodClicked: PropTypes.func.isRequired,
  onViewPeasClicked: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  joinPodText: PropTypes.string,
};

PeaPodCard.defaultProps = {
  isLoading: false,
  joinPodText: 'Join Pod',
};

PeaPodCard.metadata = {
  name: 'Pea Pod Card',
};

PeaPodCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaPodCard;

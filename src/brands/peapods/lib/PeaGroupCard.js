import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';
import PeaStatistic from './PeaStatistic';

const PeaGroupCard = ({ cover, image, groupName, tag, AvatarProps }) => {
  const [joined, setJoined] = useState(false);
  const joinButtonProps = {
    size: 'small',
    style: { marginLeft: 8, minWidth: 120 },
    onClick: () => setJoined(!joined),
  };
  let groupNameLabel = 'Personal';
  if (groupName === '2') {
    groupNameLabel = 'Exclusive';
  } else if (groupName === '3') {
    groupNameLabel = 'Public';
  }

  return (
    <Card className={'PeaProfileCard-root'}>
      <CardMedia className={'MuiCardMedia-root'} image={cover}>
        <PeaAvatar src={image} size={'large'} {...AvatarProps} />
      </CardMedia>
      <CardContent className={'MuiCardContent-root'}>
        <div className={'PeaProfileCard-actions'}>
          {joined ? (
            <PeaButton
              variant={'outlined'}
              color={'danger'}
              {...joinButtonProps}
            >
              Leave
            </PeaButton>
          ) : (
            <PeaButton
              variant={'contained'}
              color={'primary'}
              {...joinButtonProps}
            >
              Join
            </PeaButton>
          )}
          <IconButton
            className={'MuiIconButton--tiny'}
            style={{ marginLeft: 8 }}
          >
            <PeaIcon>more_vert</PeaIcon>
          </IconButton>
        </div>
        <Typography className={'MuiTypography--heading'}>
          {groupNameLabel} Group
        </Typography>
        <Typography className={'MuiTypography--subheading'}>{tag}</Typography>
        <Grid container justify={'space-between'}>
          <Grid item>
            <PeaStatistic label={'Pods'} value={2} />
          </Grid>
          <Grid item>
            <PeaStatistic label={'Following'} value={48} />
          </Grid>
          <Grid item>
            <PeaStatistic label={'Followers'} value={5} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

PeaGroupCard.propTypes = {
  image: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  tag: PropTypes.string,
  AvatarProps: PropTypes.shape({}),
};
PeaGroupCard.defaultProps = {
  tag: '',
  AvatarProps: {},
};
PeaGroupCard.metadata = {
  name: 'Pea Profile Card',
};
PeaGroupCard.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaGroupCard;

/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaSocialAvatar from './PeaSocialAvatar';
import PeaTag from './PeaTag';
import PeaText from './PeaTypography';
import PeaChat from './PeaChat';

const PeaGroupProfile = ({ cover, groupName, tags, followings, followers }) => {
  const [index, onChange] = useState(0);
  const [joined, setJoined] = useState(false);
  const joinButtonProps = {
    size: 'small',
    style: { marginLeft: 8, minWidth: 120 },
    onClick: () => setJoined(!joined),
  };
  return (
    <Card className={'PeaGroupProfile-root'}>
      <CardMedia className={'MuiCardMedia-root'} image={cover} />
      <CardContent className={'MuiCardContent-root'}>
        <Grid container>
          <Grid item container alignItems={'center'} xs>
            <PeaText variant={'h6'} weight={'bold'}>
              {groupName}
            </PeaText>
          </Grid>
          <Grid item>
            <PeaButton shape={'circular'} icon={'email'} size={'small'}>
              email
            </PeaButton>
            <PeaButton
              shape={'circular'}
              icon={'more_vert'}
              size={'small'}
              style={{ marginLeft: 8 }}
            >
              email
            </PeaButton>
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
          </Grid>
        </Grid>
        <PeaText gutterBottom>
          <PeaIcon push={'right'} color={'secondary'} size={'small'}>
            fas fa-user
          </PeaIcon>
          Personal Group
        </PeaText>
        <Tabs
          className={'MuiTabs-root'}
          variant={'fullWidth'}
          centered
          value={index}
          onChange={(e, val) => onChange(val)}
        >
          <Tab label="Pods" disableRipple />
          <Tab label="About" disableRipple />
          <Tab label="Members" disableRipple />
          <Tab label="Messages" disableRipple />
        </Tabs>
        {index === 0 && <Box minHeight={300} />}
        {index === 1 && (
          <Box mt={2}>
            <PeaText color={'secondary'}>
              <b>Description</b>
            </PeaText>
            <PeaText gutterBottom>
              This group is for friends only. Nice to meet you all!
            </PeaText>
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
            <br />
            {(followings || followers) && (
              <PeaText color={'secondary'} gutterBottom>
                <b>Connections</b>
              </PeaText>
            )}
            {followings && (
              <>
                <PeaText variant={'body2'} gutterBottom color={'textPrimary'}>
                  <b>Following</b>
                </PeaText>
                <Grid container spacing={2}>
                  {followings.map(item => (
                    <Grid item key={item.name}>
                      <PeaSocialAvatar {...item} />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
            <br />
            {followers && (
              <>
                <PeaText variant={'body2'} gutterBottom color={'textPrimary'}>
                  <b>Followers</b>
                </PeaText>
                <Grid container spacing={2}>
                  {followers.map(item => (
                    <Grid item key={item.name}>
                      <PeaSocialAvatar {...item} />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Box>
        )}
        {index === 2 && <Box minHeight={300} />}
        {index === 3 && (
          <div>
            <Box my={2} textAlign={'center'}>
              <PeaText variant={'caption'} color={'hint'}>
                Dec 25, 16.48
              </PeaText>
            </Box>
            <PeaChat
              side={'left'}
              avatar={
                'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg'
              }
              messages={[
                'Hi, I am jobs',
                'nunc pulvinar?',
                'Morbi tincidunt augue interdum velit euismod in pellentesque. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare.',
              ]}
            />
            <PeaChat
              side={'right'}
              messages={['Hello', 'etiam posuere magnis']}
            />
          </div>
        )}
      </CardContent>
      {index === 3 && (
        <CardActions className={'MuiCardActions-root'}>
          <PeaButton shape={'circular'} icon={'attach_file'} size={'small'}>
            email
          </PeaButton>
          <InputBase
            className={'MuiInputBase-root'}
            placeholder={'Type your message'}
          />
          <PeaButton shape={'circular'} icon={'send'} size={'small'}>
            email
          </PeaButton>
        </CardActions>
      )}
    </Card>
  );
};

PeaGroupProfile.propTypes = {
  cover: PropTypes.string,
  groupName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  followings: PropTypes.arrayOf(PropTypes.shape({})),
  followers: PropTypes.arrayOf(PropTypes.shape({})),
};
PeaGroupProfile.defaultProps = {
  cover: '',
  tags: [],
  followings: null,
  followers: null,
};
PeaGroupProfile.metadata = {
  name: 'Pea Group Profile',
};

export default PeaGroupProfile;

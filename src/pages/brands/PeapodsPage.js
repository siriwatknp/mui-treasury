/* eslint-disable max-len,no-alert,jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import get from 'lodash/get';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import Box from 'components/atoms/Box';
import Image from 'components/atoms/Image';
import PreviewWidget from 'components/molecules/PreviewWidget';
import peapodsBanner from 'components/peapods/assets/register-poster.png';

import MomentUtils from '@date-io/moment';

// PEAPODS THEME
import peapodsTheme from 'theme/peapods';
import { ThemeProvider } from '@material-ui/styles';

// PEAPODS COMPONENTS
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import PeaButton from 'components/peapods/PeaButton';
import PeaIcon from 'components/peapods/PeaIcon';
import PeaAvatar from 'components/peapods/PeaAvatar';
import PeaMenuItem from 'components/peapods/PeaMenuItem';
import PeaStatistic from 'components/peapods/PeaStatistic';
import PeaTag from 'components/peapods/PeaTag';
import PeaSearchInput from 'components/peapods/PeaSearchInput';
import PeaTabs from 'components/peapods/PeaTabs';
import PeaTextField from 'components/peapods/PeaTextField';
import PeaTextArea from 'components/peapods/PeaTextArea';
import PeaRadio from 'components/peapods/PeaRadio';
import PeaRadioGroup from 'components/peapods/PeaRadioGroup';
import PeaSwitch from 'components/peapods/PeaSwitch';
import PeaCounter from 'components/peapods/PeaCounter';
import PeaCategoryToggle from 'components/peapods/PeaCategoryToggle';
import PeaPersonListItem from 'components/peapods/PeaPersonListItem';
import PeaPeopleList from 'components/peapods/PeaPeopleList';
import PeaEventCard from 'components/peapods/PeaEventCard';
import PeaCardActions from 'components/peapods/PeaCardActions';
import PeaProfileCard from 'components/peapods/PeaProfileCard';
import PeaNotificationItem from 'components/peapods/PeaNotificationItem';
import PeaConfirmation from 'components/peapods/PeaConfirmation';
import PeaInvitationDialog from 'components/peapods/PeaInvitationDialog';
import PeaGroupDialog from 'components/peapods/PeaGroupDialog';
import PeaPodDialog from 'components/peapods/PeaPodDialog';
import PeaRegister from 'components/peapods/PeaRegister';
import PeaPodCard from 'components/peapods/PeaPodCard';
import PeaPersonCard from 'components/peapods/PeaPersonCard';
import PeaSlider from 'components/peapods/PeaSlider';
import PeaEventDialog from 'components/peapods/PeaEventDialog';
import PeaFilter from 'components/peapods/PeaFilter';
import PeaAppBar from 'components/peapods/PeaAppBar';
import PeaConnections from 'components/peapods/PeaConnections';
import PeaSocialAvatar from 'components/peapods/PeaSocialAvatar';
import PeaTypography from 'components/peapods/PeaTypography';
import PeaFullProfile from 'components/peapods/PeaFullProfile';
import PeaUserCard from 'components/peapods/PeaUserCard';
import PeaGroupProfile from 'components/peapods/PeaGroupProfile';
import PeaChat from 'components/peapods/PeaChat';
import PeaMediaUploader from 'components/peapods/PeaMediaUploader';
import PeaAccountProfile from 'components/peapods/PeaAccountProfile';
import PeaThreadTitle from 'components/peapods/PeaThreadTitle';

const PeaSelect = props => <PeaTextField {...props} />;
PeaSelect.metadata = {
  name: 'Pea Select',
};

const AVATAR =
  'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
const PEOPLE = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
    name: 'Yeoman',
    tag: '@whatsup yeo',
    onClick: () => alert('Followed Yeoman!'),
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
    name: 'GGWP',
    tag: '@goodgamewellplay',
    onClick: () => alert('Followed GGWP!'),
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    name: 'Sawasdee',
    tag: '@helloTH',
    onClick: () => alert('Followed Sawasdee!'),
  },
];
const SOCIAL1 = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
    name: 'Yeoman',
    social: 'twitter',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
    name: 'GGWP',
    social: 'meetup',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    name: 'Sawasdee',
    social: 'facebook',
  },
];
const SOCIAL2 = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example4.svg',
    name: 'Yeoman',
    social: 'tag',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example5.svg',
    name: 'GGWP',
    social: 'tag',
  },
];
const SOCIAL3 = [
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example7.svg',
    name: 'Yeoman',
    social: 'group',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example8.svg',
    name: 'GGWP',
    social: 'group',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example9.svg',
    name: 'Sawasdee',
    social: 'group',
  },
  {
    src: 'https://avatars.dicebear.com/v2/avataaars/example10.svg',
    name: 'Test',
    social: 'group',
  },
];
const peapodCardProps = {
  profile: {
    name: 'Siriwat Knp',
    image: 'https://avatars.dicebear.com/v2/avataaars/siriwat.svg',
  },
  social: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
  image:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
  title: 'Deep dive into chat bot training best practice.',
  time: 'Thursday, January 10th, 4:00am',
  location: 'Pivotal Labs, 875 Howard St. San Francisco USA',
  podCount: 3,
  peopleGoing: {
    images: [
      'https://avatars.dicebear.com/v2/avataaars/example.svg',
      'https://avatars.dicebear.com/v2/avataaars/example1.svg',
      'https://avatars.dicebear.com/v2/avataaars/example2.svg',
      'https://avatars.dicebear.com/v2/avataaars/example3.svg',
    ],
    more: 12,
  },
  peopleInterested: {
    images: [
      'https://avatars.dicebear.com/v2/avataaars/example4.svg',
      'https://avatars.dicebear.com/v2/avataaars/example5.svg',
      'https://avatars.dicebear.com/v2/avataaars/example6.svg',
      'https://avatars.dicebear.com/v2/avataaars/example7.svg',
      'https://avatars.dicebear.com/v2/avataaars/example8.svg',
    ],
    more: 4,
  },
};

const components = [
  {
    component: PeaButton,
    render: () => (
      <Box css={{ '& button': { marginTop: 8, marginLeft: 8 } }}>
        <PeaButton elongated color={'primary'}>
          Default
        </PeaButton>
        <PeaButton elongated variant={'outlined'} color={'primary'}>
          Outlined
        </PeaButton>
        <PeaButton elongated variant={'contained'} color={'primary'}>
          Contained
        </PeaButton>
        <PeaButton
          elongated
          labelExpanded
          variant={'contained'}
          color={'primary'}
          icon={'add'}
          iconPosition={'end'}
          iconProps={{ bgColor: 'lightPrimary' }}
        >
          Create Event
        </PeaButton>
        <PeaButton
          elongated
          fullWidth
          labelExpanded
          variant={'contained'}
          color={'primary'}
          icon={<PeaIcon icon={'fab fa-facebook-f'} bgColor={'white'} />}
        >
          Register with Facebook
        </PeaButton>
      </Box>
    ),
    previewProps: {
      white: true,
    },
  },
  {
    component: PeaIcon,
    render: () => (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaIcon icon={'fas fa-home'} />
        <PeaIcon icon={'add'} />
        <PeaIcon icon={'remove_circle'} size={'small'} />
        <PeaIcon icon={'remove_circle'} size={'big'} />
        <PeaIcon icon={'fab fa-facebook-f'} bgColor={'white'} />
        <PeaIcon icon={'add'} bgColor={'lightPrimary'} color={'inverted'} />
      </Box>
    ),
  },
  {
    component: PeaAvatar,
    render: () => (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaAvatar src={AVATAR} size={'small'} />
        <PeaAvatar src={AVATAR} />
        <PeaAvatar src={AVATAR} size={'big'} />
        <PeaAvatar src={AVATAR} size={'large'} />
        <PeaAvatar src={AVATAR} size={'huge'} />
      </Box>
    ),
  },
  {
    component: PeaAvatar.Group,
    render: () => (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaAvatar.Group
          more={12}
          images={[AVATAR, AVATAR, AVATAR, AVATAR, AVATAR]}
        />
      </Box>
    ),
  },
  {
    component: PeaMenuItem,
    render: () => <PeaMenuItem icon={'mail'} label={'Messages'} />,
  },
  {
    component: PeaStatistic,
    render: () => (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaStatistic label={'Pods'} value={2} />
        <PeaStatistic label={'Following'} value={48} />
        <PeaStatistic label={'Followers'} value={5} />
      </Box>
    ),
  },
  {
    component: PeaTag,
    render: () => (
      <Box>
        <Box mb={2} width={'100%'}>
          <PeaTag src={AVATAR} label={'Invited by @Markz'} />
        </Box>
        <PeaTag src={AVATAR} label={'Invited by @Markz'} color={'primary'} />
      </Box>
    ),
    previewProps: {
      white: true,
    },
  },
  {
    component: PeaSearchInput,
    render: () => <PeaSearchInput fullWidth placeholder={'Search events...'} />,
    previewProps: {
      white: true,
    },
  },
  {
    component: PeaTabs,
    render: () => <PeaTabs />,
  },
  {
    component: PeaTextField,
    render: () => (
      <Box>
        <PeaTextField />
      </Box>
    ),
  },
  {
    component: PeaTextArea,
    render: () => (
      <Box>
        <PeaTextArea />
      </Box>
    ),
    previewProps: {
      white: true,
    },
  },
  {
    component: PeaSelect,
    render: () => {
      const [value, onChange] = useState(0);
      return (
        <Box width={'75%'}>
          <PeaSelect
            select
            label={'Sort By'}
            value={value || ''}
            onChange={e => onChange(e.target.value)}
          >
            <MenuItem value={1}>Popular</MenuItem>
            <MenuItem value={2}>Newest</MenuItem>
          </PeaSelect>
        </Box>
      );
    },
  },
  {
    component: PeaRadio,
    render: () => (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaRadio checked={false} />
        <PeaRadio checked />
      </Box>
    ),
  },
  {
    component: PeaRadioGroup,
    render: () => (
      <Box>
        <PeaRadioGroup />
      </Box>
    ),
  },
  {
    component: PeaSwitch,
    render: () => {
      const [value, onChange] = useState(false);
      return (
        <PeaSwitch checked={value} onChange={e => onChange(e.target.checked)} />
      );
    },
  },
  {
    component: PeaCounter,
    render: () => {
      const [value, onChange] = useState(0);
      return (
        <PeaCounter value={value} onChange={e => onChange(e.target.value)} />
      );
    },
  },
  {
    component: PeaCategoryToggle,
    render: () => {
      const [checked, onChange] = useState(false);
      return (
        <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
          <PeaCategoryToggle
            label={'Space'}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7duEshbQ9Iple2a1jvGuUtRUGxJjKW7_lIwxlbEx_OthMBUiF'
            }
            checked={checked}
            onChange={e => onChange(e.target.checked)}
          />
          <PeaCategoryToggle
            label={'Beach'}
            src={
              'https://freedesignfile.com/upload/2017/05/Sunrise-tropical-island-beach-view-HD-picture-01.jpg'
            }
            checked={checked}
            onChange={e => onChange(e.target.checked)}
          />
        </Box>
      );
    },
    gridItemProps: {
      sm: 8,
      md: 6,
    },
  },
  {
    component: PeaPersonListItem,
    render: () => (
      <Box flex={1}>
        <PeaPersonListItem {...PEOPLE[0]} />
      </Box>
    ),
    gridItemProps: {
      sm: 8,
      md: 6,
    },
  },
  {
    component: PeaPeopleList,
    render: () => <PeaPeopleList people={PEOPLE} />,
    gridItemProps: {
      sm: 8,
      md: 6,
    },
  },
  {
    component: PeaEventCard,
    render: () => (
      <PeaEventCard
        name={'Carnival Night Festival'}
        people={PEOPLE}
        image={
          'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        }
        range={'4.6 miles'}
        time={'Thu, Jan 10th, 4:00am'}
        images={[AVATAR, AVATAR, AVATAR, AVATAR, AVATAR]}
      />
    ),
    gridItemProps: {
      sm: 8,
      md: 6,
    },
  },
  {
    component: PeaCardActions,
    render: () => (
      <Box width={'100%'}>
        <Card style={{ marginBottom: 20 }}>
          <CardContent style={{ minWidth: 320 }} />
          <PeaCardActions
            left={
              <React.Fragment>
                <PeaCardActions.Comment />
                <PeaCardActions.Share />
                <PeaCardActions.Create />
              </React.Fragment>
            }
          />
        </Card>
        <Card style={{ marginBottom: 20 }}>
          <CardContent style={{ minWidth: 320 }} />
          <PeaCardActions
            left={
              <React.Fragment>
                <PeaCardActions.Comment />
                <PeaCardActions.Share />
              </React.Fragment>
            }
            right={<PeaCardActions.Create />}
          />
        </Card>
        <Card>
          <CardContent style={{ minWidth: 320 }} />
          <PeaCardActions
            centered
            left={
              <React.Fragment>
                <PeaCardActions.Comment />
                <PeaCardActions.Share />
                <PeaCardActions.Create />
              </React.Fragment>
            }
          />
        </Card>
      </Box>
    ),
    gridItemProps: {
      sm: 12,
      md: 8,
      lg: 6,
    },
  },
  {
    component: PeaProfileCard,
    render: () => (
      <PeaProfileCard
        cover={
          'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        }
        image={AVATAR}
        name={'Sam Smith'}
        tag={'@samsmith'}
      />
    ),
  },
  {
    component: PeaNotificationItem,
    render: () => (
      <Box flex={1}>
        <PeaNotificationItem
          src={AVATAR}
          name={'JunZaa159'}
          description={'requested to follow you'}
          time={'Just now'}
          sticker={'person'}
        />
        <PeaNotificationItem
          src={PEOPLE[0].src}
          name={'Michael'}
          description={'has invited you to PodY'}
          time={'5 minutes ago'}
          sticker={'pea'}
          unread
        />
        <PeaNotificationItem
          src={PEOPLE[1].src}
          name={'Frank'}
          description={'has left your pod for React Europe Conf'}
          time={'4 Jan, 2019'}
          sticker={'remove'}
          unread
        />
        <PeaNotificationItem
          src={PEOPLE[2].src}
          name={'Jamie'}
          description={'Training#2 has been canceled'}
          time={'1 Jan, 2019'}
          sticker={'clear'}
        />
      </Box>
    ),
    gridItemProps: {
      sm: 12,
      md: 10,
      lg: 6,
    },
  },
  {
    component: PeaConfirmation,
    render: () => {
      const [open, setOpen] = useState(false);
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <PeaConfirmation
            title={'Block @JohnD'}
            content={
              "@JohnD won't be able to see your profile information, invite you on the events and send you messages"
            }
            open={open}
            onClose={() => setOpen(false)}
            onSubmit={() => alert('submitted!')}
          />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaInvitationDialog,
    render: () => {
      const [open, setOpen] = useState(false);
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Open Invitation</Button>
          <PeaInvitationDialog
            person={'@JohnD'}
            pods={[
              {
                primary: 'Music Festival',
                secondary: 'Peas: 2',
                src:
                  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              },
              {
                primary: 'Marketing Conference',
                secondary: 'Peas: 1',
                src:
                  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
              },
              {
                primary: 'Talk Show',
                secondary: 'Peas: 3',
                full: true,
                src:
                  'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              },
            ]}
            onInvite={({ primary }) => alert(`Invited to ${primary}`)}
            open={open}
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaGroupDialog,
    render: () => {
      const [open, setOpen] = useState(false);
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Create Group</Button>
          <PeaGroupDialog open={open} onClose={() => setOpen(false)} />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaPodDialog,
    render: () => {
      const [open, setOpen] = useState(false);
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Create Pod</Button>
          <PeaPodDialog open={open} onClose={() => setOpen(false)} />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaRegister,
    render: () => {
      const [open, setOpen] = useState(false);
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Register</Button>
          <PeaRegister open={open} onClose={() => setOpen(false)} />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaPodCard,
    render: () => <PeaPodCard {...peapodCardProps} />,
    gridItemProps: {
      sm: 12,
      md: 6,
      lg: 6,
    },
  },
  {
    component: PeaSlider,
    render: () => (
      <Box width={'100%'}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <FormLabel>Distance (in miles)</FormLabel>
          <Typography color={'textSecondary'}>5.7 miles</Typography>
        </Box>
        <PeaSlider />
      </Box>
    ),
    gridItemProps: {
      sm: 12,
      md: 4,
      lg: 4,
    },
  },
  {
    component: PeaPersonCard,
    render: () => (
      <PeaPersonCard
        image={
          'https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
        name={'Maria Garcia'}
        tag={'@MaryMary'}
        location={'Houston'}
        bio={'A senior year student, passionate in web design.'}
      />
    ),
    gridItemProps: {
      sm: 12,
      md: 8,
      lg: 8,
    },
  },
  {
    component: PeaEventDialog,
    render: () => {
      const [open, setOpen] = useState(false);
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Create Event</Button>
          <PeaEventDialog open={open} onClose={() => setOpen(false)} />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaMediaUploader,
    render: () => {
      const [open, setOpen] = useState(false);
      const config = {
        cloudName: 'peapods',
        apiKey: '722776811676265',
        sources: ['local', 'facebook', 'instagram', 'image_search'],
        facebookAppId: '884558128333147',
        instagramClientId: '38a65f7ede1d4452bc390c4778d02b54',
        googleApiKey: 'AIzaSyDt8VLlYubi76S06fS3n558c67EGaDBG7U',
        searchByRights: true,
        show_powered_by: false,
      };
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Upload Media</Button>
          <PeaMediaUploader
            isVisible={open}
            getConfig={() => config}
            onScriptLoadFailed={() => {
              alert('failed to load script');
            }}
            onWidgetEvent={() => {}}
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaFilter,
    render: () => {
      const [open, setOpen] = useState(false);
      return (
        <React.Fragment>
          <Button onClick={() => setOpen(true)}>Open Filter</Button>
          <PeaFilter open={open} onClose={() => setOpen(false)} />
        </React.Fragment>
      );
    },
  },
  {
    component: PeaAppBar,
    render: () => <PeaAppBar position={'static'} />,
    gridItemProps: {
      sm: 12,
      lg: 12,
    },
  },
  {
    component: PeaSocialAvatar,
    render: () => (
      <PeaSocialAvatar src={AVATAR} name={'username'} social={'meetup'} />
    ),
  },
  {
    component: PeaConnections,
    render: () => (
      <PeaConnections
        followers={SOCIAL1}
        followings={SOCIAL1}
        tags={SOCIAL2}
        groups={SOCIAL3}
      />
    ),
  },
  {
    component: PeaTypography,
    render: () => (
      <Box textAlign={'left'}>
        <Box pb={2}>
          <PeaTypography variant={'h6'} gutterBottom weight={'bold'}>
            <PeaIcon push={'right'}>description</PeaIcon>
            Heading 6
          </PeaTypography>
          <PeaTypography indent={'small'} align={'justify'}>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry standard
            dummy text ever since the 1500s
          </PeaTypography>
        </Box>
        <Box pb={2}>
          <PeaTypography variant={'body1'}>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and
            typesetting industry. <code>Lorem Ipsum</code> has been the industry
            standard dummy text ever since the 1500s
          </PeaTypography>
        </Box>
        <div>
          <PeaTypography variant={'subtitle1'}>
            <Link
              color={'secondary'}
              variant={'subtitle1'} // needed
              component={'button'}
              onClick={() => alert('Clicked')}
            >
              <PeaIcon size={'small'}>far fa-rocket</PeaIcon>
              Lorem Ipsum
            </Link>{' '}
            is simply dummy text of the printing and typesetting industry.{' '}
          </PeaTypography>
        </div>
      </Box>
    ),
  },
  {
    component: PeaUserCard,
    render: () => (
      <PeaUserCard
        cover={
          'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        }
        image={
          'https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
        name={'Maria Garcia'}
        tag={'@MaryMary'}
        location={'Houston'}
        bio={'A senior year student, passionate in web design.'}
      />
    ),
  },
  {
    component: PeaFullProfile,
    render: () => (
      <PeaFullProfile
        cover={
          'https://images.unsplash.com/photo-1546707640-7ba6e4b2df2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80'
        }
        image={AVATAR}
        name={'Sam Smith'}
        tag={'@samsmith'}
        site={'https://google.com'}
        bio={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
        location={'Washington'}
        age={35}
        gender={'Female'}
        groups={[
          {
            name: 'Celebrities',
            src:
              'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
          },
          {
            name: 'Friends',
            src:
              'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
          },
        ]}
        tags={[
          { label: 'cinema' },
          { label: 'sport' },
          { label: 'nightlife' },
          { label: 'theater' },
          { label: 'culture' },
          { label: 'holy' },
        ]}
      />
    ),
    gridItemProps: {
      sm: 10,
      lg: 8,
    },
  },
  {
    component: PeaGroupProfile,
    render: () => (
      <PeaGroupProfile
        cover={
          'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        }
        groupName={'Close Friends'}
        tags={[
          { label: 'cinema' },
          { label: 'sport' },
          { label: 'nightlife' },
          { label: 'theater' },
          { label: 'culture' },
          { label: 'holy' },
        ]}
        followings={[
          {
            name: 'Celebrities',
            src:
              'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
          },
        ]}
        followers={[
          {
            name: 'Friends',
            src:
              'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
          },
        ]}
      />
    ),
    gridItemProps: {
      sm: 10,
      md: 7,
      lg: 6,
    },
  },
  {
    component: PeaChat,
    render: () => (
      <div>
        <PeaChat
          side={'left'}
          avatar={AVATAR}
          messages={[
            'Hi, I am jobs',
            'How r u?',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
          ]}
        />
        <PeaChat side={'right'} messages={['Hello', 'etiam posuere magnis']} />
        <PeaChat side={'left'} avatar={AVATAR} messages={['Neh mind', 'Bye']} />
      </div>
    ),
    previewProps: {
      white: true,
    },
    gridItemProps: {
      md: 5,
    },
  },
  {
    component: PeaAccountProfile,
    render: () => (
      <PeaAccountProfile
        cover={
          'https://beinglol.com/media/facebook-cover/Iron-Man-3-Facebook-Covers-1598.jpeg'
        }
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYEi7-MP_fJqbD6yYkrykoIOo-65rj95h2lyI2dPQ8sDtgj9cpA'
        }
        name={'Iron Mann'}
        tag={'@ironmann'}
        site={'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man'}
        bio={
          'Anthony Edward "Tony" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries, a company originally started by his father, Howard Stark.'
        }
        location={'California'}
        age={35}
        gender={'Male'}
        groups={[
          {
            name: 'Celebrities',
            src:
              'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
          },
          {
            name: 'Friends',
            src:
              'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
          },
        ]}
        tags={[
          { label: 'cinema' },
          { label: 'sport' },
          { label: 'nightlife' },
          { label: 'theater' },
          { label: 'culture' },
          { label: 'holy' },
        ]}
        reputation={500}
        Z
        pods={[peapodCardProps]}
      />
    ),
    gridItemProps: {
      sm: 10,
      lg: 8,
    },
  },
  {
    component: PeaThreadTitle,
    render: () => (
      <PeaThreadTitle title="Foo bar" subtitle="Online" avatar={AVATAR} />
    ),
    gridItemProps: {
      sm: 10,
      lg: 8,
    },
  },
];

const PeapodsPage = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <Grid container>
      <Grid item xs={12} sm={'auto'}>
        <Box
          width={{ sm: 240 }}
          maxHeight={{ xs: 160, sm: 'none !important' }}
          height={'100%'}
        >
          <Image
            src={peapodsBanner}
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </Box>
      </Grid>
      <Grid item xs style={{ borderBottom: '1px solid #f0f0f0' }}>
        <Box p={{ xs: 2, md: 3 }}>
          <Typography variant={'h5'}>
            <Link href={'https://peapods.com/'} target={'_blank'}>
              Peapods
            </Link>
          </Typography>
          <Typography>
            Peapods is a new type of social network that values real human
            interaction.
          </Typography>
          <br />
          <Typography>
            This is a component showcase of peapods app. It uses{' '}
            <Link href={'https://material-ui.com'}>Material-UI</Link> v3.9.2. It
            shows that Material-UI is fully customizable.
          </Typography>
          <br />
          <Box maxWidth={{ sm: 140 }}>
            <PeaButton
              fullWidth
              size={'small'}
              variant={'contained'}
              color={'primary'}
              component={'a'}
              href={'https://peapods.com/'}
              target={'_blank'}
            >
              Visit Peapods
            </PeaButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
    <Box
      width={'100%'}
      p={{
        xs: 2,
        sm: 4,
      }}
    >
      <Grid container spacing={4} justify={'center'}>
        {components.map(
          ({ component, render, previewProps, gridItemProps }) => (
            <Grid
              key={get(component, 'metadata.name')}
              item
              xs={12}
              sm={6}
              lg={4}
              {...gridItemProps}
            >
              <PreviewWidget
                sandboxLink={component.codeSandbox}
                {...get(component, 'metadata')}
                {...previewProps}
              >
                <ThemeProvider theme={peapodsTheme}>{render()}</ThemeProvider>
              </PreviewWidget>
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  </MuiPickersUtilsProvider>
);

// Do not remove this line
PeapodsPage.components = components;

export default PeapodsPage;

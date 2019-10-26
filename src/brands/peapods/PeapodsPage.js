import React, { useState } from 'react';
import get from 'lodash/get';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from 'extensions/Typography';
import Box from 'components/atoms/Box';
import PdfButton from 'extensions/Button';
import Image from 'components/atoms/Image';
import PreviewWidget from 'components/molecules/PreviewWidget';
import CodeHighlight from 'components/highlights/CodeHighlight';

import MomentUtils from '@date-io/moment';

import peapodsBanner from './lib/assets/register-poster.png';
// PEAPODS THEME
import peapodsTheme from './lib/theme';

// PEAPODS COMPONENTS
import PeaButton from './lib/PeaButton';
import Button from './demo/Button';
import Icon from './demo/Icon';
import Avatar from './demo/Avatar';
import AvatarGroup from './demo/AvatarGroup';
import MenuItem from './demo/MenuItem';
import Statistic from './demo/Statistic';
import Tag from './demo/Tag';
import SearchInput from './demo/SearchInput';
import Tabs from './demo/Tabs';
import SwipeableTabs from './demo/SwipeableTabs';
import TextField from './demo/TextField';
import TextArea from './demo/TextArea';
import Radio from './demo/Radio';
import RadioGroup from './demo/RadioGroup';
import Select from './demo/Select';
import Switch from './demo/Switch';
import Counter from './demo/Counter';
import CategoryToggle from './demo/CategoryToggle';
import PersonListItem from './demo/PersonListItem';
import PeopleList from './demo/PeopleList';
import EventCardSmall from './demo/EventCardSmall';
import PodPodCard from './demo/PodPodCard';
import CardActions from './demo/CardActions';
import ProfileCard from './demo/ProfileCard';
import NotificationItem from './demo/NotificationItem';
import Confirmation from './demo/Confirmation';
import InvitationDialog from './demo/InvitationDialog';
import GroupDialog from './demo/GroupDialog';
import PodDialog from './demo/PodDialog';
import Register from './demo/Register';
import PodCard from './demo/PodCard';
import Slider from './demo/Slider';
import PersonCard from './demo/PersonCard';
import EventDialog from './demo/EventDialog';
import MediaUploader from './demo/MediaUploader';
import EventFilters from './demo/EventFilters';
import UserFilters from './demo/UserFilters';
import AppBar from './demo/AppBar';
import SocialAvatar from './demo/SocialAvatar';
import Connections from './demo/Connections';
import PeaTypography from './demo/Typography';
import UserCard from './demo/UserCard';
import GroupProfile from './demo/GroupProfile';
import GroupCard from './demo/GroupCard';
import EventCard from './demo/EventCard';
import Chat from './demo/Chat';
import AccountProfile from './demo/AccountProfile';
import ThreadTitle from './demo/ThreadTitle';
import ThreadHeader from './demo/ThreadHeader';
import MessageInput from './demo/MessageInput';
import TrendingHashtagList from './demo/TrendingHashtagList';
import Toast from './demo/Toast';
import LoadingSpinner from './demo/LoadingSpinner';
import ImageCarousel from './demo/ImageCarousel';
import EventDetails from './demo/EventDetails';
import Tooltip from './demo/Tooltip';
import AutocompleteList from './demo/AutocompleteList';
import AutocompleteHashtags from './demo/AutocompleteHashtags';
import UserSettings from './demo/UserSettings';
import ShareContent from './demo/ShareContent';
import AudienceSelector from './demo/AudienceSelector';

const components = [
  { component: AudienceSelector, previewProps: { white: true } },
  { component: Button, previewProps: { white: true } },
  { component: Icon },
  { component: Avatar },
  { component: AvatarGroup },
  { component: MenuItem },
  { component: Statistic },
  { component: Tag, previewProps: { white: true } },
  { component: AutocompleteList, previewProps: { white: true } },
  {
    component: AutocompleteHashtags,
    gridItemProps: {
      sm: 10,
      lg: 8,
    },
    previewProps: { white: true },
  },
  { component: SearchInput, previewProps: { white: true } },
  { component: Tabs },
  { component: SwipeableTabs },
  { component: TextField },
  { component: TextArea, previewProps: { white: true } },
  { component: Radio },
  { component: RadioGroup },
  { component: Select },
  { component: Switch },
  { component: Counter },
  {
    component: CategoryToggle,
    gridItemProps: {
      sm: 6,
      md: 6,
    },
  },
  {
    component: PersonListItem,
    gridItemProps: {
      sm: 6,
      md: 6,
    },
  },
  {
    component: PeopleList,
    gridItemProps: {
      sm: 6,
      md: 6,
    },
  },
  {
    component: EventCardSmall,
    gridItemProps: {
      sm: 6,
      md: 6,
    },
  },
  {
    component: PodPodCard,
    gridItemProps: {
      sm: 6,
      md: 6,
    },
  },
  {
    component: CardActions,
    gridItemProps: {
      sm: 12,
      md: 8,
      lg: 6,
    },
  },
  {
    component: NotificationItem,
    gridItemProps: {
      sm: 12,
      md: 10,
      lg: 6,
    },
  },
  { component: ProfileCard },
  { component: Confirmation },
  { component: InvitationDialog },
  { component: GroupDialog },
  { component: PodDialog },
  { component: Register },
  {
    component: PodCard,
    gridItemProps: {
      sm: 12,
      md: 6,
      lg: 6,
    },
  },
  {
    component: Slider,
    gridItemProps: {
      sm: 12,
      md: 4,
      lg: 4,
    },
  },
  {
    component: PersonCard,
    gridItemProps: {
      sm: 12,
      md: 8,
      lg: 8,
    },
  },
  { component: EventDialog },
  { component: MediaUploader },
  { component: EventFilters },
  { component: UserFilters },
  {
    component: AppBar,
    gridItemProps: {
      sm: 12,
      lg: 12,
    },
  },
  { component: SocialAvatar },
  { component: Connections },
  { component: PeaTypography },
  { component: UserCard },
  { component: UserSettings },

  {
    component: GroupProfile,
    gridItemProps: {
      sm: 10,
      md: 7,
      lg: 6,
    },
  },
  {
    component: EventDetails,
    gridItemProps: {
      sm: 10,
      md: 7,
      lg: 6,
    },
  },
  { component: GroupCard },
  { component: ImageCarousel },
  {
    component: EventCard,
    gridItemProps: {
      sm: 6,
      md: 6,
    },
  },
  {
    component: Chat,
    previewProps: {
      white: true,
    },
    gridItemProps: {
      md: 5,
    },
  },
  {
    component: AccountProfile,
    gridItemProps: {
      sm: 10,
      lg: 8,
    },
  },
  {
    component: ThreadTitle,
    gridItemProps: {
      sm: 6,
      md: 6,
      lg: 6,
    },
  },
  {
    component: ThreadHeader,
    gridItemProps: {
      sm: 6,
      md: 6,
      lg: 6,
    },
  },
  {
    component: MessageInput,
    gridItemProps: {
      sm: 6,
      md: 6,
      lg: 6,
    },
    previewProps: {
      white: true,
    },
  },
  { component: TrendingHashtagList },
  { component: Toast },
  { component: LoadingSpinner },
  { component: Tooltip, previewProps: { white: true } },
  { component: ShareContent, previewProps: { white: true } },
];

const PeapodsPage = () => {
  const [currentItem, setCurrentItem] = useState('');
  const apiUrl = get(currentItem, 'component.metadata.api');
  // eslint-disable-next-line react/prop-types
  const renderButton = ({ label, url }) => (
    <PdfButton
      key={label}
      style={{ marginLeft: 8 }}
      size={'small'}
      variant={'contained'}
      color={'primary'}
      component={Link}
      href={url}
      target={'_blank'}
      rel={'noopener'}
      underline={'none'}
      icon={'call_made'}
      iconPosition={'end'}
    >
      {label || 'Full API'}
    </PdfButton>
  );
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container>
        <Grid item xs={12} sm={'auto'}>
          <Box
            width={{ sm: 240 }}
            maxHeight={{
              xs: 160,
              sm: 'none !important',
            }}
            height={'100%'}
          >
            <Image
              src={peapodsBanner}
              style={{
                objectFit: 'cover',
                height: '100%',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs style={{ borderBottom: '1px solid #f0f0f0' }}>
          <Box
            p={{
              xs: 2,
              md: 3,
            }}
          >
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
              <Link href={'https://material-ui.com'}>Material-UI</Link> v4.0.2.
              It shows that Material-UI is fully customizable.
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
          {components.map(item => {
            const { component: Component, previewProps, gridItemProps } = item;
            return (
              <Grid
                key={get(Component, 'metadata.name')}
                item
                xs={12}
                sm={6}
                lg={4}
                {...gridItemProps}
              >
                <PreviewWidget
                  {...get(Component, 'metadata')}
                  {...previewProps}
                  onClickCode={() => setCurrentItem(item)}
                >
                  <ThemeProvider theme={peapodsTheme}>
                    <Component />
                  </ThemeProvider>
                </PreviewWidget>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Drawer
        open={Boolean(currentItem)}
        anchor={'right'}
        variant={'temporary'}
        onClose={() => setCurrentItem('')}
        PaperProps={{ style: { background: 'rgb(40, 44, 52)' } }}
      >
        <Box width={{ xs: 375, sm: 600 }} px={2} py={3}>
          {apiUrl && (
            <>
              <Box px={2} pb={2} textAlign={'right'}>
                {typeof apiUrl === 'string'
                  ? renderButton({ url: apiUrl })
                  : apiUrl.map(renderButton)}
              </Box>
              <Divider style={{ background: 'rgba(255, 255, 255, 0.12)' }} />
            </>
          )}
          <CodeHighlight code={get(currentItem, ['component', 'code'], '')} />
        </Box>
      </Drawer>
    </MuiPickersUtilsProvider>
  );
};

// Do not remove this line
PeapodsPage.components = components;

export default PeapodsPage;

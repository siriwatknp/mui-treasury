/* eslint-disable max-len */
import React, { useState } from 'react';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Box from 'components/atoms/Box';
import PreviewWidget from 'components/molecules/PreviewWidget';
import peapodsTheme from 'theme/peapods';
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

const PeaSelect = props => <PeaTextField {...props} />;
PeaSelect.metadata = {
  name: 'Pea Select',
};

const AVATAR =
  'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
const components = [
  {
    component: PeaButton,
    render: () => (
      <Box css={{ '& button': { marginTop: 8, marginLeft: 8 } }}>
        <PeaButton color={'primary'}>Default</PeaButton>
        <PeaButton variant={'outlined'} color={'primary'}>
          Outlined
        </PeaButton>
        <PeaButton variant={'contained'} color={'primary'}>
          Contained
        </PeaButton>
        <PeaButton variant={'contained'} color={'primary'}>
          <span>Create Event</span>
          <PeaIcon icon={'add'} light circular />
        </PeaButton>
        <PeaButton variant={'contained'} color={'primary'} fullWidth>
          <PeaIcon icon={'fab fa-facebook-f'} color={'white'} circular />
          <span>Register with Facebook</span>
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
        <PeaIcon icon={'fab fa-facebook-f'} color={'white'} circular />
        <PeaIcon icon={'add'} light circular />
      </Box>
    ),
  },
  {
    component: PeaAvatar,
    render: () => (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'}>
        <PeaAvatar src={AVATAR} size={'small'} />
        <PeaAvatar src={AVATAR} />
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
    render: () => <PeaTag src={AVATAR} label={'Invited by @Markz'} />,
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
    render: () => <PeaSwitch />,
  },
];

const PeapodsPage = () => (
  <Box
    width={'100%'}
    p={{
      xs: 2,
      sm: 4,
    }}
  >
    <Grid container spacing={32}>
      {components.map(({ component, render, previewProps }) => (
        <Grid key={get(component, 'metadata.name')} item xs={12} sm={6} lg={4}>
          <PreviewWidget
            sandboxLink={component.codeSandbox}
            {...get(component, 'metadata')}
            {...previewProps}
          >
            <MuiThemeProvider theme={peapodsTheme}>{render()}</MuiThemeProvider>
          </PreviewWidget>
        </Grid>
      ))}
    </Grid>
  </Box>
);

// Do not remove this line
PeapodsPage.components = components;

export default PeapodsPage;

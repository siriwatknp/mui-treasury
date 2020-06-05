import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useApexInfoStyles } from '@mui-treasury/styles/info/apex';
import { useGraphicBtnStyles } from '@mui-treasury/styles/button/graphic';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    transition: '0.3s',
    position: 'relative',
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      backgroundColor: '#d9daf1',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '&:before': {
        bottom: -6
      },
      '& $card': {
        boxShadow: '-12px 12px 64px 0 #bcc3d6',
      }
    }
  },
  card: {
    zIndex: 1,
    position: 'relative',
    borderRadius: '1rem',
    boxShadow: '0 6px 20px 0 #dbdbe8',
    backgroundColor: '#fff',
    transition: '0.4s',
    height: '100%',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: '0.75rem',
  },
  avatar: {
    fontFamily: 'Ubuntu',
    fontSize: '0.875rem',
    backgroundColor: '#6d7efc',
  },
  join: {
    background: 'linear-gradient(to top, #638ef0, #82e7fe)',
    '& > *': {
      textTransform: 'none !important',
    },
  },
}));

const CustomCard = ({ thumbnail, title, subtitle, description, joined }) => {
  const styles = useStyles();
  const btnStyles = useGraphicBtnStyles();
  return (
    <div className={styles.root}>
      <Column className={styles.card}>
        <Row gutter={2}>
          <Avatar className={styles.logo} variant={'rounded'} src={thumbnail} />
          <Info position={'middle'} useStyles={useApexInfoStyles}>
            <InfoTitle>{title}</InfoTitle>
            <InfoSubtitle>{subtitle}</InfoSubtitle>
          </Info>
        </Row>
        <Box
          pb={1}
          px={2}
          color={'grey.600'}
          fontSize={'0.875rem'}
          fontFamily={'Ubuntu'}
        >
          {description}
        </Box>
        <Row gutter={2} position={'bottom'}>
          <Item>
            <AvatarGroup max={4} classes={{ avatar: styles.avatar }}>
              {new Array(5).fill(0).map((_, index) => (
                <Avatar
                  key={index}
                  src={`https://i.pravatar.cc/300?img=${Math.floor(
                    Math.random() * 30
                  )}`}
                />
              ))}
            </AvatarGroup>
          </Item>
          <Item position={'middle-right'}>
            <Button
              className={styles.join}
              classes={btnStyles}
              variant={'contained'}
              color={'primary'}
              disableRipple
            >
              {joined ? 'Leave group' : 'Join group'}
            </Button>
          </Item>
        </Row>
      </Column>
    </div>
  );
};

const TeamCardDemo = () => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Ubuntu', weights: [400, 700] }]} />
      </NoSsr>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <CustomCard
            thumbnail={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU'
            }
            title={'APEX Legends: Assemble!'}
            subtitle={'Created by siriwatknp'}
            description={
              <>
                <b>Shining Alpaca</b> and 3 others are already members of this
                group.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CustomCard
            joined
            thumbnail={
              'https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg'
            }
            title={'League of Legends Official'}
            subtitle={'Created by LoL'}
            description={
              'You are already a member of this group since April 5th 2019.'
            }
            btnLabel={'Leave group'}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CustomCard
            thumbnail={'https://avatarfiles.alphacoders.com/537/53765.jpg'}
            title={'Overwatch official'}
            subtitle={'Created by Bliz'}
            description={
              <>
                <b>RainBOW</b> and 3 others are already members of this group.
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
};
// hide-start
TeamCardDemo.metadata = {
  title: 'Team',
  path: 'components/card/team',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  stylesUrl: '',
  frameProps: { bgcolor: '#f4f7fc' }, // props that applied to Box in grid view
  size: 'huge', // can be 'large' | 'huge' for grid size
  files: [],
};
// hide-end

export default TeamCardDemo;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Avatar from 'components/atoms/Avatar';
import Box from 'components/atoms/Box';
import Text from 'components/atoms/Text';

const ProfileWidget = () => (
  <Box
    p={3}
    borderRadius={{ xs: 0, md: 8 }}
    bgcolor={'grey.100'}
    textAlign={{ xs: 'center' }}
    maxWidth={{ xs: 'auto', md: 284 }}
    css={{
      // must use & in order to override child
      '& .MuiAvatar-root': {
        margin: 'auto',
      },
    }}
  >
    <Avatar
      src={
        'https://pbs.twimg.com/profile_images/' +
        '1060539954361622533/-9ofKMvA_400x400.jpg'
      }
      huge
    />
    <Text mt={3} variant={'h5'} fontWeight={'bold'}>
      Siriwatknp
    </Text>
    <Text>Web Design & Dev (Junior)</Text>
    <Text variant={'caption'} color={'text.secondary'}>
      2.5 years experience
    </Text>
    <Text my={3}>Love UI, React and Firebase</Text>
    <Box pb={3}>
      <Grid container>
        <Grid item xs>
          <IconButton
            component={'a'}
            href={'https://www.facebook.com/siriwat.kunaporn'}
            target={'_blank'}
          >
            <i className={'fab fa-facebook-f fa-fw fa-lg'} />
          </IconButton>
        </Grid>
        <Grid item xs>
          <IconButton
            component={'a'}
            href={'https://twitter.com/siriwatknp'}
            target={'_blank'}
          >
            <i className={'fab fa-twitter fa-fw fa-lg'} />
          </IconButton>
        </Grid>
        <Grid item xs>
          <IconButton
            component={'a'}
            href={'https://github.com/siriwatknp'}
            target={'_blank'}
          >
            <i className={'fab fa-github fa-fw fa-lg'} />
          </IconButton>
        </Grid>
        <Grid item xs>
          <IconButton
            component={'a'}
            href={'mailto:siriwatkunaporn@gmail.com?subject=Hello Jun!'}
            target={'_blank'}
          >
            <i className={'fas fa-envelope fa-fw fa-lg'} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

ProfileWidget.propTypes = {};
ProfileWidget.defaultProps = {};

export default ProfileWidget;

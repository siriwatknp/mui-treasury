import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  avatarRoot: {
    width: 120,
    height: 120,
  },
  img: {
    margin: 0,
  },
  iconButton: {
    height: 48,
    width: 48,
    borderBottom: 'none !important',
  },
}));

const links = [
  {
    href: 'https://www.facebook.com/siriwat.kunaporn',
    icon: 'fab fa-facebook-f',
  },
  {
    href: 'https://twitter.com/siriwatknp',
    icon: 'fab fa-twitter',
  },
  {
    href: 'https://github.com/siriwatknp',
    icon: 'fab fa-github',
  },
  {
    href: 'mailto:siriwatkunaporn@gmail.com?subject=Hello Jun!',
    icon: 'fas fa-envelope',
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <Box bgcolor={'grey.100'} py={'3.5rem'}>
      <Container maxWidth={'md'}>
        <Grid container spacing={4} justify={'center'}>
          <Grid item>
            <Box mt={1} />
            <Avatar
              classes={{
                root: classes.avatarRoot,
                img: classes.img,
              }}
              src={
                'https://pbs.twimg.com/profile_images/1060539954361622533/-9ofKMvA_400x400.jpg'
              }
            />
          </Grid>
          <Grid item>
            <Typography variant={'overline'} color={'textSecondary'}>
              A little bit about me
            </Typography>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3>Hi, I'm siriwatknp</h3>
            <p>A Junior Web Design & Developer. Love UI, React & Firebase</p>
            <Box mx={{ xs: 0, sm: -2 }}>
              <Grid container spacing={2}>
                {links.map(({ href, icon }) => (
                  <Grid item key={icon}>
                    <IconButton
                      className={classes.iconButton}
                      component={'a'}
                      href={href}
                      target={'_blank'}
                    >
                      <i className={icon} />
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;

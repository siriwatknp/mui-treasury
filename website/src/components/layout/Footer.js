/* eslint-disable */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    // icon: 'fab fa-facebook-f',
    icon: ['fab', 'facebook-f'],
    ariaLabel: 'This is my facebook page',
  },
  {
    href: 'https://twitter.com/siriwatknp',
    // icon: 'fab fa-twitter',
    icon: ['fab', 'twitter'],
    ariaLabel: 'This is my twitter page',
  },
  {
    href: 'https://github.com/siriwatknp',
    // icon: 'fab fa-github',
    icon: ['fab', 'github'],
    ariaLabel: 'This is my github page',
  },
  {
    href: 'mailto:siriwatkunaporn@gmail.com?subject=Hello Jun!',
    // icon: 'fas fa-envelope',
    icon: ['fas', 'envelope'],
    ariaLabel: 'This is my email',
  },
];

const Footer = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar-jun.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Box bgcolor={'grey.100'} py={'3.5rem'}>
      <Container maxWidth={'md'}>
        <Grid container spacing={4} justify={'center'}>
          <Grid item>
            <Box mt={1} />
            <Avatar
              component={Image}
              classes={{
                root: classes.avatarRoot,
                img: classes.img,
              }}
              fixed={data.file.childImageSharp.fixed}
            />
          </Grid>
          <Grid item>
            <Typography variant={'overline'}>A little bit about me</Typography>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3>Hi, I'm siriwatknp</h3>
            <p>A Junior Web Design & Developer. Love UI, React & Firebase</p>
            <Box mx={{ xs: 0, sm: -2 }}>
              <Grid container spacing={2}>
                {links.map(({ href, icon, ariaLabel }) => (
                  <Grid item key={icon}>
                    <IconButton
                      className={classes.iconButton}
                      component={'a'}
                      href={href}
                      target={'_blank'}
                      rel={'noopener'}
                      aria-label={ariaLabel}
                    >
                      {/* <FontAwesomeIcon icon={icon} />*/}
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

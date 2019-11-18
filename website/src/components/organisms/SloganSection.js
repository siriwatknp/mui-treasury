import React from 'react';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => {
  const { palette, breakpoints } = theme;
  return {
    overline: {
      color: palette.primary.light,
      fontWeight: 300,
      fontSize: 'calc(2vh + 1vw)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    headline: {
      color: palette.primary.main,
      fontSize: 27,
      fontWeight: 800,
      lineHeight: 1.4,
      [breakpoints.up('sm')]: {
        fontSize: 'calc(2vh + 3vw)',
        marginBottom: '2rem',
      },
    },
    body: {
      fontSize: 16,
      [breakpoints.up('sm')]: {
        fontSize: 'calc(2vh + 0.75vw)',
      },
    },
    buttonLabel: {
      letterSpacing: '1px',
    },
  };
});

const SloganSection = () => {
  const classes = useStyles();
  return (
    <Box
      textAlign={'center'}
      py={{ xs: '3rem', sm: '4.5rem' }}
      px={{ xs: 3, sm: '2rem' }}
      mx={'auto'}
    >
      <p className={classes.overline}>Bring your idea to life</p>
      <h1 className={classes.headline}>Browse, Choose and Use. That’s it.</h1>
      <Box
        maxWidth={{ sm: 600, md: 700 }}
        mx={'auto'}
        mb={{ xs: '2rem', sm: '3rem' }}
      >
        <p className={classes.body}>
          MUI Treasury is an ecosystem of{' '}
          <a
            href="https://material-ui.com"
            target={'_blank'}
            rel={'noopener'}
            style={{ marginLeft: 12 }}
          >
            Material-UI
          </a>
        </p>
      </Box>
      <Button
        size={'large'}
        variant={'contained'}
        color={'primary'}
        classes={{ label: classes.buttonLabel }}
        onClick={() => navigate('/components/card')}
      >
        Get started
      </Button>
    </Box>
  );
};

export default SloganSection;

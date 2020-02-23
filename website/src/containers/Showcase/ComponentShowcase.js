import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CarbonAds from 'components/atoms/CarbonAds';
import BtnGroup from 'components/molecules/BtnGroup';
import IFrame from 'components/layout/IFrame';
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph';

import useScreenList from 'logics/useScreenList';

const useStyles = makeStyles(({ breakpoints }) => ({
  title: {
    marginBottom: 0,
    fontSize: 36,
    [breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [breakpoints.up('md')]: {
      fontSize: 64,
    },
  },
}));

const ComponentShowcase = ({ metadata, renderComponent }) => {
  const classes = useStyles();
  const shadowStyles = useNeumorphShadowStyles({
    bgColor: '#efefef',
    darken: 0.1,
    blurLength: 16,
  });
  const { screenList, activeScreen, getIsActive, selectScreen } = useScreenList(
    {
      initialKey: 'sm',
      overrides: {
        xs: { height: 568 },
        sm: { height: 568 },
        md: { height: 568 },
        lg: { height: 568 },
      },
    }
  );
  const isLargeScreen = activeScreen?.width > 1280;
  return (
    <>
      <Container>
        <Box my={{ xs: 3, sm: 4, md: 5 }}>
          <Grid container justify={'space-between'} alignItems={'center'}>
            <Grid item xs={12} sm>
              <Box
                pb={{ xs: 2, sm: 0 }}
                textAlign={{ xs: 'center', sm: 'left' }}
              >
                <h1 className={classes.title}>Tree Chart</h1>
                <Typography variant={'h6'} color={'textSecondary'}>
                  A recursive component made easy.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={'auto'}>
              <CarbonAds />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        my={{ xs: 3, sm: 4, md: 5 }}
        bgcolor={'#efefef'}
        minHeight={300}
        borderRadius={4}
        p={{ xs: 2, sm: 3 }}
      >
        <BtnGroup
          buttons={screenList}
          onClick={selectScreen}
          getIsActive={getIsActive}
        />
        <Box mt={1.5} mb={1} textAlign={'center'}>
          <Box
            fontSize={12}
            borderRadius={20}
            color={'grey.500'}
            display={'inline-block'}
            px={1.5}
            py={0.5}
          >
            {activeScreen?.width} x {activeScreen?.height} -- screen:{' '}
            <b>{activeScreen?.screen}</b> {isLargeScreen && ', scale 80%'}
          </Box>
        </Box>
        <Box
          classes={shadowStyles}
          borderRadius={16}
          width={activeScreen?.width ?? 300}
          height={activeScreen?.height ?? 200}
          mx={'auto'}
          p={1}
          {...(isLargeScreen && {
            mx: 0,
            position: 'relative',
            css: {
              left: '50%',
              transform: 'scale(0.8) translateX(-50%)',
              transformOrigin: '0 0',
            },
          })}
        >
          <IFrame>{renderComponent()}</IFrame>
        </Box>
        {!isLargeScreen && (
          <>
            <br />
            <br />
          </>
        )}
      </Box>
    </>
  );
};

ComponentShowcase.propTypes = {
  metadata: PropTypes.shape({}),
  renderComponent: PropTypes.func,
};
ComponentShowcase.defaultProps = {
  metadata: undefined,
  renderComponent: () => {},
};

export default ComponentShowcase;

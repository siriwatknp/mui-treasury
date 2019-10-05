/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import zipObjectDeep from 'lodash/zipObjectDeep';
import mapValues from 'lodash/mapValues';
import { animateScroll as scroll } from 'react-scroll';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from 'components/atoms/Box';
import Button from 'extensions/Button';
import Typography from 'extensions/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Intro from './Intro';
import NavForm from './NavForm';
import HeaderForm from './HeaderForm';
import ContentForm from './ContentForm';
import FooterForm from './FooterForm';
import IconForm from './IconForm';
import GetCode from './GetCode';

const steps = [
  {
    text: 'Mobile',
    optional: '',
  },
  {
    text: 'Tablet',
    optional: '',
  },
  {
    text: 'Desktop+',
    optional: '',
  },
];

const styles = ({ breakpoints }) => ({
  stepperRoot: {
    padding: 0,
    [breakpoints.up('sm')]: {
      padding: 16,
    },
  },
  stepLabelWhite: {
    fill: 'white',
  },
});

const scrollConfig = {
  smooth: true,
  delay: 0,
  duration: 300,
};

const LayoutBuilderPage = ({ classes }) => {
  const [icon, setIcon] = useState({
    type: 'svg',
    style: 'chevron',
  });
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [screen, setScreen] = useState('xs');
  const [config, setConfig] = useState({
    navAnchor: 'left',
    navVariant: {
      xs: 'temporary',
      sm: 'persistent',
      md: 'permanent',
    },
    navWidth: {
      xs: 240,
      sm: 256,
      md: 256,
    },
    collapsible: {
      xs: false,
      sm: false,
      md: true,
    },
    collapsedWidth: {
      xs: 64,
      sm: 64,
      md: 64,
    },
    clipped: {
      xs: false,
      sm: false,
      md: false,
    },
    headerPosition: {
      xs: 'relative',
      sm: 'relative',
      md: 'relative',
    },
    squeezed: {
      xs: false,
      sm: false,
      md: true,
    },
    footerShrink: {
      xs: false,
      sm: false,
      md: true,
    },
  });
  const onChange = (keys, values) => {
    console.log('screen', screen);
    setConfig({
      ...config,
      ...keys.reduce(
        (result, key, index) => ({
          [key]: {
            ...config[key],
            [screen]: values[index],
          },
        }),
        {},
      ),
    });
  };
  const getActiveStep = () => {
    if (step <= 4) return 0;
    if (step <= 8) return 1;
    if (step <= 12) return 2;
    return 3;
  };
  const renderScreenForm = () => {
    if (step > 12) return null;
    if (step % 4 === 1)
      return <NavForm {...mapValues(config, screen)} onChange={onChange} />;
    if (step % 4 === 2)
      return <HeaderForm {...mapValues(config, screen)} onChange={onChange} />;
    if (step % 4 === 3)
      return <ContentForm {...mapValues(config, screen)} onChange={onChange} />;
    return <FooterForm {...mapValues(config, screen)} onChange={onChange} />;
  };
  const onNextStep = value => () => {
    const nextStep = step + value;
    scroll.scrollToTop(scrollConfig);
    setTimeout(() => {
      if (nextStep <= 4) {
        setScreen('xs');
      } else if (nextStep <= 8) {
        setScreen('sm');
      } else if (nextStep <= 12) {
        setScreen('md');
      }
      setStep(nextStep);
    }, 400);
  };
  return (
    <Box p={{ xs: 2, sm: 3 }}>
      {step === 0 ? (
        <Intro />
      ) : (
        <>
          {step <= 12 && (
            <Grid container justify={'center'}>
              <Grid item xs={12} md={10}>
                <Stepper
                  activeStep={getActiveStep()}
                  alternativeLabel
                  className={classes.stepperRoot}
                >
                  {steps.map(({ text, optional }) => (
                    <Step key={text}>
                      <StepLabel
                        optional={
                          <Typography size={'small'} align={'center'}>
                            {optional}
                          </Typography>
                        }
                        StepIconProps={{
                          classes: {
                            text: classes.stepLabelWhite,
                          },
                        }}
                      >
                        {text}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
            </Grid>
          )}
          {renderScreenForm()}
          {step === 13 && <IconForm icon={icon} setIcon={setIcon} />}
          <Box pb={2} />
        </>
      )}
      <GetCode
        open={show}
        onClose={() => setShow(false)}
        config={config}
        icon={icon}
      />
      <Box pb={6} />
      <Box
        position={'fixed'}
        zIndex={1190}
        bottom={0}
        right={0}
        width={'100%'}
        p={1}
        bgcolor={'common.white'}
        borderTop={'1px solid #e5e5e5'}
      >
        <Grid container justify={'center'} spacing={4}>
          <Grid item xs={12} sm={12} md={8}>
            <Box textAlign={'right'}>
              {step !== 0 && (
                <Button
                  size={'big'}
                  style={{ marginRight: 8 }}
                  icon={'arrow_back'}
                  onClick={onNextStep(-1)}
                >
                  Back
                </Button>
              )}
              {step < 13 && (
                <Button
                  color={'primary'}
                  variant={'contained'}
                  size={'big'}
                  icon={'arrow_forward'}
                  iconPosition={'end'}
                  onClick={onNextStep(1)}
                >
                  {step === 0 ? "Let's Begin" : 'Next'}
                </Button>
              )}
              {step === 13 && (
                <Button
                  variant={'contained'}
                  color={'secondary'}
                  size={'big'}
                  icon={'get_app'}
                  onClick={() => setShow(true)}
                >
                  Get code
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

LayoutBuilderPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};
LayoutBuilderPage.defaultProps = {};

export default withStyles(styles)(LayoutBuilderPage);

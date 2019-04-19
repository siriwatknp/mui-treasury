/* eslint-disable max-len,jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PreviewWidget from 'components/molecules/PreviewWidget';
import Typography from 'components/predefined/Typography';
import Icon from 'components/predefined/Icon';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const TypographySection = ({ globalTheme }) => {
  const [color, setColor] = useState('');
  const [weight, setWeight] = useState('');
  const [indent, setIndent] = useState('');
  const [spacing, setSpacing] = useState('');
  const [inverted, setInverted] = useState(false);
  const [code, setCode] = useState(false);
  const commonProps = {
    color,
    code,
    weight,
    indent,
    inverted,
    spacing,
  };
  return (
    <MuiThemeProvider
      theme={createTheme({
        ...globalTheme,
        overrides: {
          ...Typography.getTheme(merge(baseTheme, globalTheme)),
          ...Icon.getTheme(merge(baseTheme, globalTheme)),
        },
      })}
    >
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <PreviewWidget
            white
            inverted={inverted}
            contentProps={{ flexWrap: 'wrap', flexDirection: 'column' }}
          >
            <Typography {...commonProps}>Hello World!</Typography>
          </PreviewWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormGroup>
            <FormControlLabel
              checked={inverted}
              onChange={(e, val) => setInverted(val)}
              control={<Checkbox />}
              label={'inverted'}
            />
            <FormControlLabel
              checked={code}
              onChange={(e, val) => setCode(val)}
              control={<Checkbox />}
              label={'code'}
            />
          </FormGroup>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Color'}
            value={color}
            onChange={e => setColor(e.target.value)}
          >
            <MenuItem key={'none'} value={''}>
              none
            </MenuItem>
            <MenuItem key={'primary'} value={'primary'}>
              primary
            </MenuItem>
            <MenuItem key={'secondary'} value={'secondary'}>
              secondary
            </MenuItem>
            <MenuItem key={'error'} value={'error'}>
              error
            </MenuItem>
          </TextField>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Weight'}
            value={weight}
            onChange={e => setWeight(e.target.value)}
          >
            <MenuItem key={'normal'} value={'normal'}>
              normal
            </MenuItem>
            <MenuItem key={700} value={700}>
              700
            </MenuItem>
          </TextField>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Indent'}
            value={indent}
            onChange={e => setIndent(e.target.value)}
          >
            <MenuItem key={'none'} value={''}>
              none
            </MenuItem>
            <MenuItem key={'small'} value={'small'}>
              small
            </MenuItem>
            <MenuItem key={'big'} value={'big'}>
              big
            </MenuItem>
            <MenuItem key={'large'} value={'large'}>
              large
            </MenuItem>
          </TextField>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Spacing'}
            value={spacing}
            onChange={e => setSpacing(e.target.value)}
          >
            <MenuItem key={'none'} value={''}>
              none
            </MenuItem>
            <MenuItem key={'small'} value={'small'}>
              small
            </MenuItem>
            <MenuItem key={'big'} value={'big'}>
              big
            </MenuItem>
            <MenuItem key={'large'} value={'large'}>
              large
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PreviewWidget
            name={'Header & Paragraph'}
            contentProps={{
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <Typography variant={'h6'} gutterBottom weight={'bold'}>
              <Icon push={'right'}>description</Icon>
              Heading 6
            </Typography>
            <Typography indent={'small'} align={'justify'}>
              <b>Lorem Ipsum</b> is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry standard
              dummy text ever since the 1500s
            </Typography>
          </PreviewWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PreviewWidget
            name={'Code'}
            white
            contentProps={{
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <Typography variant={'body1'}>
              <b>Lorem Ipsum</b> is simply dummy text of the printing and
              typesetting industry. <code>Lorem Ipsum</code> has been the
              industry standard dummy text ever since the 1500s
            </Typography>
          </PreviewWidget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PreviewWidget
            name={'Link'}
            white
            contentProps={{
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}
          >
            <Typography variant={'subtitle1'}>
              <Link
                color={'secondary'}
                variant={'subtitle1'} // needed
                component={'button'}
                onClick={() => alert('Clicked')}
              >
                <Icon size={'small'}>far fa-rocket</Icon>
                Lorem Ipsum
              </Link>{' '}
              is simply dummy text of the printing and typesetting industry.{' '}
            </Typography>
          </PreviewWidget>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

TypographySection.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default TypographySection;

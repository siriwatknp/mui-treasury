/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from 'components/atoms/Box';
import PreviewWidget from 'components/molecules/PreviewWidget';
import Icon from 'components/predefined/Icon';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const IconSection = ({ globalTheme }) => {
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [size, setSize] = useState('');
  const [shape, setShape] = useState('');
  const [inverted, setInverted] = useState(false);
  const [link, setLink] = useState(false);
  const commonProps = {
    link,
    color,
    bgColor,
    size,
    inverted,
    shape,
  };
  return (
    <ThemeProvider
      theme={createTheme({
        ...globalTheme,
        overrides: Icon.getTheme(merge(baseTheme, globalTheme)),
      })}
    >
      <Grid container spacing={2} justify={'center'}>
        <Grid item xs={6} sm={4}>
          <PreviewWidget
            white
            inverted={inverted}
            rootProps={{ minHeight: 160, height: 'auto' }}
            contentProps={{ flexWrap: 'wrap' }}
          >
            <Icon icon={'favorite'} {...commonProps} />
            <Icon icon={'bookmark_border'} {...commonProps} />
            <Icon icon={'dashboard'} {...commonProps} />
            <Icon icon={'delete_forever'} {...commonProps} />
            <Icon icon={'exit_to_app'} {...commonProps} />
          </PreviewWidget>
          <Box>
            <Typography color={'textSecondary'} align={'center'}>
              Material Icon
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <PreviewWidget
            white
            inverted={inverted}
            rootProps={{ minHeight: 160, height: 'auto' }}
            contentProps={{ flexWrap: 'wrap' }}
          >
            <Icon icon={'fas fa-heart'} {...commonProps} />
            <Icon icon={'fab fa-facebook-f'} {...commonProps} />
            <Icon icon={'far fa-arrow-alt-circle-right'} {...commonProps} />
            <Icon icon={'fab fa-twitter'} {...commonProps} />
            <Icon icon={'fas fa-battery-quarter'} {...commonProps} />
          </PreviewWidget>
          <Box>
            <Typography color={'textSecondary'} align={'center'}>
              Font Awesome
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormGroup>
            <FormControlLabel
              checked={inverted}
              onChange={(e, val) => setInverted(val)}
              control={<Checkbox />}
              label={'inverted'}
            />
            <FormControlLabel
              checked={link}
              onChange={(e, val) => setLink(val)}
              control={<Checkbox />}
              label={'link'}
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
            <MenuItem key={'danger'} value={'danger'}>
              danger
            </MenuItem>
          </TextField>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Background color'}
            value={bgColor}
            onChange={e => setBgColor(e.target.value)}
          >
            <MenuItem key={'none'} value={''}>
              none
            </MenuItem>
            <MenuItem key={'default'} value={'default'}>
              default
            </MenuItem>
            <MenuItem key={'primary'} value={'primary'}>
              primary
            </MenuItem>
            <MenuItem key={'secondary'} value={'secondary'}>
              secondary
            </MenuItem>
            <MenuItem key={'danger'} value={'danger'}>
              danger
            </MenuItem>
          </TextField>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Size'}
            value={size}
            onChange={e => setSize(e.target.value)}
          >
            <MenuItem key={'small'} value={'small'}>
              small
            </MenuItem>
            <MenuItem key={'default'} value={''}>
              default
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
            label={'Shape'}
            value={shape}
            onChange={e => setShape(e.target.value)}
          >
            <MenuItem key={'none'} value={''}>
              none
            </MenuItem>
            <MenuItem key={'square'} value={'square'}>
              square
            </MenuItem>
            <MenuItem key={'round'} value={'round'}>
              round
            </MenuItem>
            <MenuItem key={'circular'} value={'circular'}>
              circular
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography gutterBottom variant={'h6'}>
            Perfectly inline with <code>Typography</code>
          </Typography>
          <PreviewWidget
            rootProps={{ height: 'auto' }}
            contentProps={{ flexDirection: 'column' }}
          >
            <Typography gutterBottom variant={'h5'}>
              <Icon icon={'far fa-copy'} size={'large'} /> Text(h5) with
              icon(large).
            </Typography>
            <Typography gutterBottom variant={'h6'}>
              <Icon icon={'far fa-copy'} size={'big'} /> Text(h6) with
              icon(big).
            </Typography>
            <Typography gutterBottom variant={'subtitle1'}>
              <Icon icon={'far fa-copy'} size={'default'} /> Text(subtitle1)
              with icon(default).
            </Typography>
            <Typography gutterBottom>
              <Icon icon={'far fa-copy'} size={'small'} /> Text(body2) with
              icon(small).
            </Typography>
          </PreviewWidget>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

IconSection.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default IconSection;

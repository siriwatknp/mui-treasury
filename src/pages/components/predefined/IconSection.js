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
import PreviewWidget from 'components/molecules/PreviewWidget';
import Icon from 'components/predefined/Icon';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const materialIcons = ['favorite'];

const fontAwesomeIcons = ['fas fa-heart'];

const IconSection = ({ globalTheme }) => {
  const [materialIcon, setMaterialIcon] = useState(materialIcons[0]);
  const [fontAwesomeIcon, setFontAwesomeIcon] = useState(fontAwesomeIcons[0]);
  const [color, setColor] = useState('default');
  const [size, setSize] = useState('default');
  const [inverted, setInverted] = useState(false);
  return (
    <MuiThemeProvider
      theme={createTheme({
        ...globalTheme,
        overrides: Icon.getTheme(merge(baseTheme, globalTheme)),
      })}
    >
      <Grid container spacing={32}>
        <Grid item xs={6} sm={4}>
          <PreviewWidget inverted={inverted} rootProps={{ height: 120 }}>
            <Icon
              icon={materialIcon}
              color={color}
              size={size}
              inverted={inverted}
            />
          </PreviewWidget>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Icon'}
            value={materialIcon}
            onChange={e => setMaterialIcon(e.target.value)}
          >
            {materialIcons.map(i => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} sm={4}>
          <PreviewWidget inverted={inverted} rootProps={{ height: 120 }}>
            <Icon
              icon={fontAwesomeIcon}
              color={color}
              size={size}
              inverted={inverted}
            />
          </PreviewWidget>
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Icon'}
            value={fontAwesomeIcon}
            onChange={e => setFontAwesomeIcon(e.target.value)}
          >
            {fontAwesomeIcons.map(i => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormGroup>
            <FormControlLabel
              checked={inverted}
              onChange={(e, val) => setInverted(val)}
              control={<Checkbox />}
              label={'inverted'}
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
            <MenuItem key={'default'} value={'default'}>
              default
            </MenuItem>
            <MenuItem key={'big'} value={'big'}>
              big
            </MenuItem>
            <MenuItem key={'large'} value={'large'}>
              large
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

IconSection.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default IconSection;

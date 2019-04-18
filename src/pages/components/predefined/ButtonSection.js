import React, { useState } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PreviewWidget from 'components/molecules/PreviewWidget';
import Grid from '@material-ui/core/Grid';
import Button from 'components/predefined/Button';

const createTheme = theme => createMuiTheme(theme);
const baseTheme = createMuiTheme();

const ButtonSection = ({ globalTheme }) => {
  const [inverted, setInverted] = useState(false);
  const [elongated, setElongated] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [shadowless, setShadowless] = useState(false);
  const [compact, setCompact] = useState(false);
  const [icon, setIcon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState('Button');
  const [size, setSize] = useState('default');
  const [shape, setShape] = useState('default');
  const [variant, setVariant] = useState('flat');
  const [color, setColor] = useState('default');
  const [iconPosition, setIconPlacement] = useState('start');
  return (
    <MuiThemeProvider
      theme={createTheme({
        ...globalTheme,
        overrides: Button.getTheme(merge(baseTheme, globalTheme)),
      })}
    >
      <Grid container spacing={32}>
        <Grid item xs={12} sm={6} lg={6}>
          <PreviewWidget inverted={inverted}>
            <Button
              color={color}
              compact={compact}
              size={size}
              shape={shape}
              inverted={inverted}
              elongated={elongated}
              loading={loading}
              variant={variant}
              disabled={disabled}
              shadowless={shadowless}
              icon={icon && 'favorite'}
              iconPosition={iconPosition}
            >
              {label}
            </Button>
          </PreviewWidget>
        </Grid>
        <Grid item xs={6} sm={3} lg={3}>
          <FormGroup>
            <FormControlLabel
              checked={compact}
              onChange={(e, val) => setCompact(val)}
              control={<Checkbox />}
              label={'compact'}
            />
            <FormControlLabel
              checked={disabled}
              onChange={(e, val) => setDisabled(val)}
              control={<Checkbox />}
              label={'disabled'}
            />
            <FormControlLabel
              checked={elongated}
              onChange={(e, val) => setElongated(val)}
              control={<Checkbox />}
              label={'elongated'}
            />
            <FormControlLabel
              checked={inverted}
              onChange={(e, val) => setInverted(val)}
              control={<Checkbox />}
              label={'inverted'}
            />
            <FormControlLabel
              checked={loading}
              onChange={(e, val) => setLoading(val)}
              control={<Checkbox />}
              label={'loading...'}
            />
            <FormControlLabel
              checked={shadowless}
              onChange={(e, val) => setShadowless(val)}
              control={<Checkbox />}
              label={'shadowless'}
            />
          </FormGroup>
          <FormControl margin={'normal'}>
            <FormLabel>Variant</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              value={variant}
              onChange={e => setVariant(e.target.value)}
            >
              <FormControlLabel value="flat" control={<Radio />} label="flat" />
              <FormControlLabel
                value="contained"
                control={<Radio />}
                label="contained"
              />
              <FormControlLabel
                value="outlined"
                control={<Radio />}
                label="outlined"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} lg={3}>
          <TextField
            fullWidth
            variant={'outlined'}
            margin={'normal'}
            label={'Label'}
            value={label}
            onChange={e => setLabel(e.target.value)}
          />
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
          <TextField
            margin={'normal'}
            fullWidth
            select
            label={'Shape'}
            value={shape}
            onChange={e => setShape(e.target.value)}
          >
            <MenuItem key={'default'} value={'default'}>
              default
            </MenuItem>
            <MenuItem key={'chubby'} value={'chubby'}>
              chubby
            </MenuItem>
            <MenuItem key={'circular'} value={'circular'}>
              circular
            </MenuItem>
          </TextField>
          <FormControl margin={'normal'} fullWidth>
            <FormControlLabel
              checked={icon}
              onChange={(e, val) => setIcon(val)}
              control={<Switch />}
              label={'Icon'}
            />
            {icon && (
              <React.Fragment>
                <TextField
                  margin={'normal'}
                  fullWidth
                  select
                  label={'placement'}
                  value={iconPosition}
                  onChange={e => setIconPlacement(e.target.value)}
                >
                  <MenuItem key={'start'} value={'start'}>
                    start
                  </MenuItem>
                  <MenuItem key={'end'} value={'end'}>
                    end
                  </MenuItem>
                </TextField>
              </React.Fragment>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

ButtonSection.propTypes = {
  globalTheme: PropTypes.shape({}).isRequired,
};

export default ButtonSection;

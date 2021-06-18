import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 500,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 700,
    },
  },
  paper: {
    padding: 16,
  },
});

const ContentForm = ({
  classes,
  preset,
  onChangePreset,
  data,
  onChangeData,
}) => {
  const handleChange = key => e =>
    onChangeData({
      ...data,
      [key]: e.target.checked,
    });
  return (
    <div className={classes.root}>
      <Paper elevation={1} square className={classes.paper}>
        <Grid container>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Presets</FormLabel>
              <RadioGroup
                aria-label="Preset"
                name="preset"
                value={preset}
                onChange={e => onChangePreset(e.target.value)}
              >
                <FormControlLabel
                  value="createDefaultLayout"
                  control={<Radio />}
                  label="Default"
                />
                <FormControlLabel
                  value="createStandardLayout"
                  control={<Radio />}
                  label="Standard"
                />
                <FormControlLabel
                  value="createFixedLayout"
                  control={<Radio />}
                  label="Fixed"
                />
                <FormControlLabel
                  value="createContentBasedLayout"
                  control={<Radio />}
                  label="Content-based"
                />
                <FormControlLabel
                  value="createCozyLayout"
                  control={<Radio />}
                  label="Cozy"
                />
                <FormControlLabel
                  value="createMuiTreasuryLayout"
                  control={<Radio />}
                  label="Mui Treasury"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Enabled mockup</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.header}
                      onChange={handleChange('header')}
                      value="header"
                    />
                  }
                  label="Header"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.nav}
                      onChange={handleChange('nav')}
                      value="nav"
                    />
                  }
                  label="Nav"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.content}
                      onChange={handleChange('content')}
                      value="content"
                    />
                  }
                  label="Content"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.footer}
                      onChange={handleChange('footer')}
                      value="footer"
                    />
                  }
                  label="Footer"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

ContentForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  preset: PropTypes.string.isRequired,
  onChangePreset: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
  onChangeData: PropTypes.func.isRequired,
};
ContentForm.defaultProps = {};

export default withStyles(styles)(ContentForm);

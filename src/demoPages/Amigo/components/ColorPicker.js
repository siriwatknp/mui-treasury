import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Icon from 'extensions/Icon';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  check: {
    fontSize: 22,
    lineHeight: '32px',
  },
}));

const Color = ({ color, checked }) => {
  const classes = useStyles();
  const isWhite =
    color.toLowerCase() === '#ffffff' ||
    color.toLowerCase() === 'fff' ||
    color === 'white';
  const border = isWhite ? '1px solid #a5a5a5' : 'none';
  return (
    <ButtonBase className={classes.root}>
      <div className={classes.root} style={{ backgroundColor: color, border }}>
        {checked && (
          <Icon className={classes.check} inverted={!isWhite}>
            check
          </Icon>
        )}
      </div>
    </ButtonBase>
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
Color.defaultProps = {
  checked: false,
};

const ColorPicker = ({ colors }) => (
  <Grid container spacing={2}>
    {colors.map(color => (
      <Grid key={color.color} item>
        <Color {...color} />
      </Grid>
    ))}
  </Grid>
);

ColorPicker.Color = Color;
ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};
ColorPicker.defaultProps = {
  colors: [],
};
ColorPicker.data = [
  {
    color: '#ffffff',
    checked: true,
  },
  {
    color: '#000000',
    checked: true,
  },
  {
    color: '#dd0500',
  },
  {
    color: '#dd7d00',
  },
  {
    color: '#dbdd00',
  },
  {
    color: '#00dd07',
  },
  {
    color: '#00dd9b',
  },
  {
    color: '#00ddc7',
    checked: true,
  },
  {
    color: '#0065dd',
  },
  {
    color: '#4200dd',
  },
  {
    color: '#a600dd',
  },
  {
    color: '#dd00b8',
  },
];

export default ColorPicker;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from 'extensions/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: ({ checked }) => ({
    border: `1px solid ${checked ? palette.primary.main : palette.grey[500]}`,
    color: checked ? '#ffffff' : palette.text.primary,
    background: checked ? palette.primary.main : 'unset',
    padding: spacing(0, 0.5),
    minWidth: 36,
  }),
}));

const Size = ({ size, checked }) => {
  const classes = useStyles({ checked });
  return (
    <ButtonBase>
      <Typography
        className={classes.root}
        display={'inline-block'}
        secondFamily
      >
        {size}
      </Typography>
    </ButtonBase>
  );
};

Size.propTypes = {
  size: PropTypes.number.isRequired,
  checked: PropTypes.bool,
};
Size.defaultProps = {
  checked: false,
};

const SizePicker = ({ sizes }) => (
  <Grid container spacing={2}>
    {sizes.map(size => (
      <Grid key={size.size} item>
        <Size {...size} />
      </Grid>
    ))}
  </Grid>
);

SizePicker.Size = Size;
SizePicker.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.number,
      checked: PropTypes.bool,
    }),
  ),
};
SizePicker.defaultProps = {
  sizes: [],
};
SizePicker.data = [
  {
    size: 4,
  },
  {
    size: 4.5,
    checked: true,
  },
  {
    size: 5,
  },
  {
    size: 5.5,
  },
  {
    size: 6,
  },
  {
    size: 6.5,
  },
  {
    size: 7,
  },
  {
    size: 7.5,
  },
  {
    size: 8,
  },
  {
    size: 8.5,
  },
  {
    size: 9,
  },
  {
    size: 9.5,
  },
];

export default SizePicker;

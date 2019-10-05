import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Typography from 'extensions/Typography';

const useStyles = makeStyles(({ transitions }) => ({
  value: ({ dragging }) => ({
    opacity: dragging ? 1 : 0,
    transition: transitions.create(),
    position: 'absolute',
    left: '50%',
    top: -20,
    transform: `translateX(-50%) scale(${dragging ? 1.2 : 1})`,
  }),
}));

const PricePicker = ({ min, max, ...props }) => {
  const [value, setValue] = useState(100);
  const [dragging, setDragging] = useState(false);
  const typographyProps = {
    size: 'small',
    color: 'textSecondary',
  };
  const classes = useStyles({ dragging });
  return (
    <Box pr={2} mt={3}>
      <Box px={1}>
        <Slider
          value={value}
          onChange={(e, val) => setValue(val)}
          step={10}
          min={min}
          max={max}
          thumb={
            <Box bgcolor={'primary.main'} borderRadius={'50%'}>
              <Typography className={classes.value} size={'small'}>
                {value}
              </Typography>
            </Box>
          }
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          {...props}
        />
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} mt={2}>
        <Typography {...typographyProps}>${min}</Typography>
        <Typography {...typographyProps}>${max}</Typography>
      </Box>
    </Box>
  );
};

PricePicker.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
PricePicker.defaultProps = {};

export default PricePicker;

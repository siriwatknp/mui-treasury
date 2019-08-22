import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import Logo from './assets/peapods-logo-circle.svg';

const styles = ({ palette }) => ({
  root: {
    padding: '22px 0px',
  },
  mark: {
    width: '0px',
    height: '0px',
    marginTop: -3,
  },
  markLabel: {
    marginTop: '26px',
  },
  rail: {
    left: 0,
    borderRadius: 10,
    height: 8,
  },
  track: {
    background: palette.secondary.main,
    borderRadius: 10,
    height: 8,
  },
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    marginTop: -11,
    marginLeft: -14,
    '& > img': {
      width: '100%',
      height: '100%',
    },
    '&:hover': {
      boxShadow: `0px 0px 0px 9px ${Color(palette.secondary.main)
        .fade(0.84)
        .string()}`,
    },
    '&$activated': {
      boxShadow: `0px 0px 0px 18px ${Color(palette.secondary.main)
        .fade(0.84)
        .string()}`,
    },
    '&$jumped': {
      boxShadow: `0px 0px 0px 18px ${Color(palette.secondary.main)
        .fade(0.84)
        .string()}`,
    },
  },
});

const tooltipStyles = theme => ({
  popper: {
    marginLeft: 0,
  },
  tooltip: {
    '&&&': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '& > span': {
      width: '32px',
      height: '32px',
      display: 'flex',
      transform: 'rotate(-45deg) !important',
      alignItems: 'center',
      borderRadius: '50% 50% 50% 0',
      justifyContent: 'center',
      color: `${Color(theme.palette.grey[200])}`,
      backgroundColor: `${Color(theme.palette.secondary.main)}`,
    },
    '& > span > span': {
      transform: 'rotate(45deg) !important',
    },
  },
});

const ValueLabelComponent = ({ children, open, value, classes }) => {
  const popperRef = React.useRef(null);

  useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      placement="top"
      title={
        <span>
          <span>{value}</span>
        </span>
      }
      classes={classes}
    >
      {children}
    </Tooltip>
  );
};

ValueLabelComponent.propTypes = Tooltip.propTypes;
ValueLabelComponent.defaultProps = Tooltip.defaultProps;
const StyledValueLabelComponent = withStyles(tooltipStyles)(
  ValueLabelComponent,
);

const ThumbComponent = forwardRef((props, ref) => (
  <span {...props} ref={ref}>
    <img src={Logo} alt="slider-input" />
  </span>
));

const PeaSlider = props => {
  const { value, onChange } = props;

  return (
    <Slider
      ThumbComponent={ThumbComponent}
      ValueLabelComponent={StyledValueLabelComponent}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

PeaSlider.propTypes = {
  ...Slider.propTypes,
  onChange: PropTypes.func.isRequired,
};
PeaSlider.defaultProps = Slider.defaultProps;
PeaSlider.metadata = {
  name: 'Pea Slider',
  libraries: [
    { text: 'Color', link: 'https://github.com/Qix-/color' },
    { text: '@material-ui/lab', link: 'https://material-ui.com/lab/slider/' },
  ],
};
PeaSlider.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default withStyles(styles)(PeaSlider);

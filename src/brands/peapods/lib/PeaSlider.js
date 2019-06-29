import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Logo from './assets/peapods-logo-circle.svg';

const styles = ({ palette }) => ({
  root: {
    padding: '22px 0px',
  },
  container: {
    padding: 32,
  },
  rail: {
    left: 0,
    borderRadius: 10,
    height: 4,
  },
  track: {
    background: palette.secondary.main,
    borderRadius: 10,
    height: 4,
  },
  thumb: {
    width: 24,
    height: 24,
    marginTop: -10,
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
  activated: {},
  jumped: {},
});

const tooltipStyles = theme => ({
  popper: {
    marginLeft: 0,
  },
  tooltip: {
    '&&&': {
      backgroundColor: 'transparent',
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

function ValueLabelComponent({ children, open, value, classes }) {
  const popperRef = React.useRef(null);
  React.useEffect(() => {
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
}

ValueLabelComponent.propTypes = Tooltip.propTypes;
ValueLabelComponent.defaultProps = Tooltip.defaultProps;
const StyledValueLabelComponent = withStyles(tooltipStyles)(
  ValueLabelComponent,
);

function ThumbComponent(props) {
  return (
    <span {...props}>
      <img src={Logo} alt="slider-input" />
    </span>
  );
}

const PeaSlider = props => {
  const { value, onChange } = props;

  return (
    <Slider
      className={'PeaSlider-root'}
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

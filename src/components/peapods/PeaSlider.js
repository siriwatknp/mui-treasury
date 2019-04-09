import React, { useState } from 'react';
import Color from 'color';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from './assets/peapods-logo-circle.svg';

const styles = ({ palette }) => ({
  root: {
    padding: '22px 0px',
  },
  track: {
    background: palette.secondary.main,
    borderRadius: 10,
    height: 4,
  },
  thumb: {
    width: 24,
    height: 24,
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

const PeaSlider = props => {
  const [value, onChange] = useState(50);
  return (
    <Slider
      className={'PeaSlider-root'}
      thumb={<Logo />}
      value={value}
      onChange={(e, val) => onChange(val)}
      {...props}
    />
  );
};

PeaSlider.propTypes = Slider.propTypes;
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

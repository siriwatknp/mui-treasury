import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';
import cssSystem from 'utils/cssSystem';
import {
  compose,
  typography,
  spacing,
  display,
  palette,
  positions,
  sizing,
} from '@material-ui/system';

export const styleFunction = compose(
  display,
  spacing,
  typography,
  palette,
  positions,
  sizing,
  cssSystem
);

const Image = styled('img')(styleFunction);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
Image.defaultProps = {
  display: 'block',
  width: '100%',
};

export default Image;

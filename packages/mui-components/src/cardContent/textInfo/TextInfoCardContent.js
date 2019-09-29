import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@mui-treasury/styling';
import Typography from '@material-ui/core/Typography';

const TextInfoCardContent = withStyles(
  {
    overline: {},
    heading: {},
    body: {},
  },
  { name: 'TextInfo' }
)(
  ({
    css,
    overline,
    heading,
    body,
    overlineProps,
    headingProps,
    bodyProps,
  }) => (
    <>
      {overline && (
        <Typography
          component={'span'}
          {...overlineProps}
          className={cx(css.overline, overlineProps.className)}
        >
          {overline}
        </Typography>
      )}
      <Typography
        component={'h4'}
        {...headingProps}
        className={cx(css.heading, headingProps.className)}
      >
        {heading}
      </Typography>
      <Typography {...bodyProps} className={cx(css.body, bodyProps.className)}>
        {body}
      </Typography>
    </>
  )
);

TextInfoCardContent.propTypes = {
  overline: PropTypes.node,
  heading: PropTypes.node,
  body: PropTypes.node,
  overlineProps: PropTypes.shape({}),
  headingProps: PropTypes.shape({}),
  bodyProps: PropTypes.shape({}),
};
TextInfoCardContent.defaultProps = {
  overline: null,
  heading: null,
  body: null,
  overlineProps: {},
  headingProps: {},
  bodyProps: {},
};

export default TextInfoCardContent;

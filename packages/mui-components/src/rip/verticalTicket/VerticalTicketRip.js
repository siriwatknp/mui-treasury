import React from 'react';
import PropTypes from 'prop-types';

const VerticalTicketRip = ({ classes }) => (
  <>
    <div className={classes.left}>
      <div className={classes.sheet}>
        <div className={classes.tear} />
      </div>
    </div>
    <div className={classes.right}>
      <div className={classes.sheet}>
        <div className={classes.tear} />
      </div>
    </div>
  </>
);

VerticalTicketRip.propTypes = {
  classes: PropTypes.shape({
    left: PropTypes.string,
    sheet: PropTypes.string,
    right: PropTypes.string,
    tear: PropTypes.string,
  }),
};
VerticalTicketRip.defaultProps = {
  classes: {},
};

export default VerticalTicketRip;

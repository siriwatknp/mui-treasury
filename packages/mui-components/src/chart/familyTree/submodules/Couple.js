import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from '../familyTreeChart.styles';

const defaultUseStyles = makeStyles(styles, { name: 'Couple' });

const Couple = ({ spouse, children, useStyles }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.stem}>
        <Avatar />
      </div>
      {spouse && !Array.isArray(spouse) && (
        <div
          className={cx(
            classes.spouse,
            children && children.length && classes.spouseWithChildren
          )}
        >
          <Avatar />
        </div>
      )}
    </>
  );
};

Couple.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})),
  spouse: PropTypes.shape({}),
  useStyles: PropTypes.func,
};
Couple.defaultProps = {
  children: undefined,
  spouse: undefined,
  useStyles: defaultUseStyles,
};

export default Couple;

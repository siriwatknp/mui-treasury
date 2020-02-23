import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { neumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph';

const useStyles = makeStyles(({ breakpoints }) => ({
  btn: props => ({
    boxShadow: 'none',
    transition: '0.4s ease-out',
    '&:not(:first-child)': {
      marginLeft: 8,
    },
    '&:hover': {
      backgroundColor: 'initial',
      ...neumorphShadowStyles().root({ ...props, blurLength: 8, spread: 2 }),
    },
    [breakpoints.up('sm')]: {
      padding: 16,
    },
  }),
  btnStatic: {
    '&:hover $icon': {
      transform: 'scale(1.02)',
    },
  },
  active: props => ({
    '&, &:hover': {
      ...neumorphShadowStyles().root(props),
    },
  }),
  activeStatic: {
    '& $icon, &:hover $icon': {
      transform: 'scale(1.05)',
    },
  },
  icon: {
    fontSize: 24,
    transition: '0.4s ease-out',
  },
}));

const BtnGroup = ({ buttons, onClick, getIsActive, ...props }) => {
  const classes = useStyles({ blurLength: 16, darken: 0.15 });
  return (
    <Box mx={-2} align={'center'} {...props}>
      {buttons.map(({ icon, ...others }, i) => (
        <IconButton
          key={i}
          disableRipple
          className={cx(
            classes.btn,
            classes.btnStatic,
            getIsActive(others) && cx(classes.active, classes.activeStatic)
          )}
          onClick={e => onClick(others, e)}
          {...others}
        >
          {React.cloneElement(icon, { className: classes.icon })}
        </IconButton>
      ))}
    </Box>
  );
};

BtnGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
  getIsActive: PropTypes.func,
};
BtnGroup.defaultProps = {
  buttons: [],
  onClick: () => {},
  getIsActive: () => {},
};

export default BtnGroup;

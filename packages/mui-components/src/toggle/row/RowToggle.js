import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import { StylesProvider } from './StylesContext';
import Action from './submodules/Action';
import ListItem from './submodules/ListItem';
import styles from './rowToggle.styles';

const useDefaultStyles = makeStyles(styles, { name: 'RowToggle' });

const RowToggle = ({
  component: Component = 'div',
  children,
  useStyles = useDefaultStyles,
  classes,
  className,
  selected,
  ...props
}) => {
  const result = useStyles({ classes, ...props });
  return (
    <StylesProvider useStyles={useStyles}>
      <Component
        className={cx(result.root, selected && result.rootSelected, className)}
        {...props}
      >
        {children}
      </Component>
    </StylesProvider>
  );
};

RowToggle.Action = Action;
RowToggle.ListItem = ListItem;
RowToggle.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node,
  useStyles: PropTypes.func,
  classes: PropTypes.shape({}),
  className: PropTypes.string,
  selected: PropTypes.bool,
};

export default RowToggle;

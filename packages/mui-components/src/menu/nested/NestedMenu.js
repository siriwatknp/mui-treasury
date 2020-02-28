import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from './StylesContext';
import ListItem from './submodules/ListItem';
import Parent from './submodules/Parent';
import Collapse from './submodules/Collapse';
import styles from './nestedMenu.styles';

const useDefaultStyles = makeStyles(styles, { name: 'NestedMenu' });

const NestedMenu = ({ useStyles = useDefaultStyles, ...props }) => {
  return <StylesProvider useStyles={useStyles} {...props} />;
};

NestedMenu.ListItem = ListItem;
NestedMenu.Parent = Parent;
NestedMenu.Collapse = Collapse;
NestedMenu.propTypes = {
  useStyles: PropTypes.func,
};
NestedMenu.defaultProps = {};

export default NestedMenu;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './treeChart.styles';

const useStyles = makeStyles(styles, { name: 'TreeChart' });

const TreeContext = React.createContext();

export const useTreeStyles = () => {
  const value = React.useContext(TreeContext);
  if (!value) {
    throw new Error('useTreeStyles must be used under TreeChart');
  }
  return value;
};

export const TreeConsumer = TreeContext.Consumer;

export const TreeProvider = props => {
  const styles = useStyles(props);
  return <TreeContext.Provider {...props} value={styles} />;
};

import React from 'react';
import PropTypes from 'prop-types';

const TreeContext = React.createContext();

export const useTreeStyles = () => {
  const value = React.useContext(TreeContext);
  if (!value) {
    throw new Error('useTreeStyles must be used under TreeChart');
  }
  return value;
};

export const TreeConsumer = TreeContext.Consumer;

export const TreeProvider = ({ useStyles, ...props }) => {
  const styles = useStyles(props);
  return <TreeContext.Provider {...props} value={styles} />;
};

TreeProvider.propTypes = {
  useStyles: PropTypes.func.isRequired,
};

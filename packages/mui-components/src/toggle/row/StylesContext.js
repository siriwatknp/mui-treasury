import React from 'react';
import PropTypes from 'prop-types';

const StylesContext = React.createContext();

export const useCtxStyles = () => React.useContext(StylesContext);

export const StylesProvider = ({ useStyles, ...props }) => {
  const styles = useStyles(props);
  return <StylesContext.Provider {...props} value={styles} />;
};

StylesProvider.propTypes = {
  useStyles: PropTypes.func.isRequired,
};

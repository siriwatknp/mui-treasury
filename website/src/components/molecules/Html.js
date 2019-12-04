import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import SourceCopier from 'components/atoms/SourceCopier';

const useStyles = makeStyles(() => ({
  div: {
    '& > p': {
      margin: 0,
    },
  },
}));

const Html = ({ html, source, fileName }) => {
  const styles = useStyles();
  return (
    <SourceCopier source={source} sourceName={fileName}>
      <div className={styles.div} dangerouslySetInnerHTML={{ __html: html }} />
    </SourceCopier>
  );
};

Html.propTypes = {
  html: PropTypes.string,
  fileName: PropTypes.string,
  source: PropTypes.string,
};
Html.defaultProps = {
  html: '',
  fileName: 'Click to copy',
  source: '',
};

export default Html;

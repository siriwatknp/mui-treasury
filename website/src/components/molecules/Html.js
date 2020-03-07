import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { makeStyles } from '@material-ui/styles';
import SourceCopier from 'components/atoms/SourceCopier';

const useStyles = makeStyles(() => ({
  div: {
    '& > p': {
      margin: 0,
    },
  },
}));

const Html = ({ body, source, fileName }) => {
  const styles = useStyles();
  return (
    <SourceCopier
      source={source.replace(/ *\/\/ hide-start[^)]*\/\/ hide-end */g, '')}
      sourceName={fileName}
    >
      <div className={styles.div}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </SourceCopier>
  );
};

Html.propTypes = {
  body: PropTypes.string,
  fileName: PropTypes.string,
  source: PropTypes.string,
};
Html.defaultProps = {
  body: '',
  fileName: 'Click to copy',
  source: '',
};

export default Html;

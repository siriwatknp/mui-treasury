import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import { useSearchInputStyles } from '@mui-treasury/styles/input/search';

const SearchInput = () => {
  const styles = useSearchInputStyles();
  return (
    <InputBase
      classes={styles}
      placeholder={'Search...'}
      startAdornment={<Search />}
    />
  );
};

// hide-start
SearchInput.metadata = {
  title: 'Search',
  path: 'input/search',
  files: [
    {
      pkg: 'mui-styles',
      path: 'input/search/searchInput.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default SearchInput;

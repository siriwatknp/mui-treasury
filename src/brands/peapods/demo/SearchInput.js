import React from 'react';
import PeaSearchInput from '../lib/PeaSearchInput';

const SearchInput = () => (
  <PeaSearchInput fullWidth placeholder={'Search events...'} />
);

SearchInput.metadata = {
  name: 'Pea Search Input',
  api: 'https://material-ui.com/pt/api/input-base/#inputbase-api',
};
SearchInput.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
SearchInput.code = `
  import PeaSearchInput from '../lib/PeaSearchInput';
  
  // same API as InputBase
  
  const Preview = () => (
    <PeaSearchInput fullWidth placeholder={'Search events...'} />
  )
`;

export default SearchInput;

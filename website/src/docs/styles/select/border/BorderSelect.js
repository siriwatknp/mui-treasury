import React from 'react';
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const BorderSelect = () => {
  const styles = useBorderSelectStyles();

  let age = 10;

  const handleChange = () => {};

  return (
    <FormControl className={styles}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

// hide-start
BorderSelect.metadata = {
  title: 'Border', // name that appear in web
  path: 'styles/select/border', // reference to markdown file
  relates: [],
  renderedWithoutIframe: false,
  creators: [require('constants/creators').paddy], // add yourself to creators.js first
  createdAt: 'Thu Apr 23 2020',
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'select/border/borderSelect.styles.js' }]
};
// hide-end

export default BorderSelect;

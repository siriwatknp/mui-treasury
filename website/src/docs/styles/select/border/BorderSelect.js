import React, { useState } from 'react';
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/541

const BorderSelect = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const borderSelectClasses = useBorderSelectStyles();

  // moves the menu below the select input
  const menuProps = {
    classes: {
      list: borderSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
  };

  // IconComponent in Select receives className via props. This is how the arrow up/down animation works.
  const iconComponent = (props) => {
    return (
      <FontAwesomeIcon
        className={props.className + " " + borderSelectClasses.icon} icon={['fas','chevron-down']}
      />
  )};// chevron-down added in fontawesome.js


  return (
    <FormControl>
      <InputLabel
        className={borderSelectClasses.label}
        id="inputLabel"
      >LABEL</InputLabel>
      <Select
        disableUnderline
        classes={{ root: borderSelectClasses.select, }}
        labelId="inputLabel"
        IconComponent={iconComponent}
        MenuProps={menuProps}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
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
  frameProps: {
    bgcolor: '#f2f2f2',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'select/border/borderSelect.styles.js' }]
};
// hide-end

export default BorderSelect;

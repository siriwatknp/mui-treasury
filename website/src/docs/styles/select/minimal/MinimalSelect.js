import React, { useState } from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540

const MinimalSelect = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list
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
        className={props.className + " " + minimalSelectClasses.icon} icon={['fas','chevron-down']}
      />
  )};// chevron-down added in fontawesome.js


  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select, }}
        IconComponent={iconComponent}
        MenuProps={menuProps}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>Principle</MenuItem>
        <MenuItem value={1}>Sketch</MenuItem>
        <MenuItem value={2}>Photoshop</MenuItem>
        <MenuItem value={3}>Framer</MenuItem>
      </Select>
    </FormControl>
  );
};

// hide-start
MinimalSelect.metadata = {
  title: 'Minimal', // name that appear in web
  path: 'styles/select/minimal', // reference to markdown file
  relates: [],
  renderedWithoutIframe: false,
  creators: [require('constants/creators').paddy], // add yourself to creators.js first
  createdAt: 'Thu Apr 23 2020',
  frameProps: {
    bgcolor: '#f2f2f2',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'select/minimal/minimalSelect.styles.js' }]
};
// hide-end

export default MinimalSelect;

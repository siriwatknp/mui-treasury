import React, { useState } from 'react';
import { useOutlineSelectStyles } from '@mui-treasury/styles/select/outline';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import SortIcon from '@material-ui/icons/Sort';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/539

const OutlineSelect = () => {
  const [val,setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const outlineSelectClasses = useOutlineSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreRoundedIcon className={props.className + " " + outlineSelectClasses.icon}/>
    )};

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: outlineSelectClasses.paper,
      list: outlineSelectClasses.list
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

  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: outlineSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>
          <ListItemIcon classes={{ root: outlineSelectClasses.listIcon }}>
            <SortIcon/>
          </ListItemIcon>
          <span style={{marginTop:3}}>
            Sort by Date Created
          </span>
        </MenuItem>
        <MenuItem value={1}>
          <ListItemIcon classes={{ root: outlineSelectClasses.listIcon }}>
            <SortIcon/>
          </ListItemIcon>
          <span style={{marginTop:3}}>
            Sort by Name
          </span>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

// hide-start
OutlineSelect.metadata = {
  title: 'Outline', // name that appear in web
  path: 'styles/select/outline', // reference to markdown file
  relates: [],
  renderedWithoutIframe: false,
  creators: [require('constants/creators').paddy], // add yourself to creators.js first
  createdAt: 'Thu Apr 23 2020',
  frameProps: {
    bgcolor: '#f2f2f2',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'select/outline/outlineSelect.styles.js' }]
};
// hide-end

export default OutlineSelect;

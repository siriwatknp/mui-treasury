import React, { useState } from 'react';
import { useDownloadMenuStyles } from '@mui-treasury/styles/menu/download';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/777

const DownloadMenu = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const downloadMenuClasses = useDownloadMenuStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + downloadMenuClasses.icon}/>
    )};

  // moves the menu below the menu input
  const menuProps = {
    classes: {
      paper: downloadMenuClasses.paper,
      list: downloadMenuClasses.list
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
        classes={{ root: downloadMenuClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
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
DownloadMenu.metadata = {
  title: 'Download', // name that appear in web
  path: 'styles/menu/download', // reference to markdown file
  relates: [],
  renderedWithoutIframe: false,
  creators: [require('constants/creators').paddy], // add yourself to creators.js first
  createdAt: 'Thu Apr 23 2020',
  frameProps: {
    bgcolor: '#f2f2f2',
  }, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'menu/download/downloadMenu.styles.js' }]
};
// hide-end

export default DownloadMenu;

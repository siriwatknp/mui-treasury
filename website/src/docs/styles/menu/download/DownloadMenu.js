import React from 'react';
import { useDownloadMenuStyles } from '@mui-treasury/styles/menu/download';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';


// Original design here: https://github.com/siriwatknp/mui-treasury/issues/777

const DownloadMenu = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const downloadMenuClasses = useDownloadMenuStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={downloadMenuClasses.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <GetAppRoundedIcon className={downloadMenuClasses.downloadIcon}/>
        <span>Download</span>
        <ExpandMoreIcon className={downloadMenuClasses.expandIcon}/>
      </Button>
      <Menu
        id="simple-menu"
        classes={{
          paper:downloadMenuClasses.paper,
          list: downloadMenuClasses.list
        }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>PDF File</MenuItem>
        <MenuItem onClick={handleClose}>CSV File</MenuItem>
        <MenuItem onClick={handleClose}>XLS File</MenuItem>
      </Menu>
    </div>
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

import React from 'react';
//import { useBorderSelectStyles } from '@mui-treasury/styles/select/border';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(({ theme, palette }) => ({
  myLabelStyle: {
    marginLeft: '4px',
    color: palette.grey[500],
    "&.Mui-focused":{
      color: palette.grey[500],
    }
  },
  mySelectStyle: {
    minWidth: '200px',
    background: 'white',
    color: palette.grey[700],
    borderColor: palette.grey[300],
    borderStyle:'solid',
    borderWidth: '2px',
    borderRadius: '4px',
    paddingLeft: '24px',
    paddingTop: '14px',
    paddingBottom: '15px',
    "&:hover":{
      borderColor: palette.grey[400],
    },
    "&:focus":{
      borderRadius: '4px',
      background: 'white',
      borderColor: 'lightblue'
    }
  },
  myIcon:{
    color: palette.grey[500],
    right: 12,
    position: 'absolute',
    pointerEvents: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    userSelect: 'none'
  },
  myList: {
    paddingTop:0,
    paddingBottom:0,
    background:'white',
    "& li.Mui-selected":{
      fontWeight:700
    }
  }
}));


const BorderSelect = () => {
  // const borderSelectStyles = useBorderSelectStyles();
  const borderSelectClasses = useStyles();

  return (
    <FormControl>
      <InputLabel
        className={borderSelectClasses.myLabelStyle}
        id="inputLabel"
      >LABEL</InputLabel>
      <Select
        //open
        disableUnderline
        classes={{ root: borderSelectClasses.mySelectStyle, }}
        labelId="inputLabel"
        defaultValue="Select"
        IconComponent={
          () => {
            return (
              <FontAwesomeIcon className={borderSelectClasses.myIcon} icon={['fas','chevron-down']}/>
            ) // chevron-down added in fontawesome.js
          }
        }
        MenuProps={
          {
            classes: {
              list: borderSelectClasses.myList
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
          }
        }
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

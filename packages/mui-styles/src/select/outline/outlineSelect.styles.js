import { blue } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';


export default () => ({
  select: {
    display: 'flex',
    minWidth: 240,
    background: 'white',
    borderStyle:'none',
    borderRadius: 8,
    paddingLeft: 24,
    paddingTop: 14,
    paddingBottom: 15,
    boxShadow: 'none',
    "&:focus":{
      borderRadius: 8,
      background: 'white',
    },
    '&[aria-expanded="true"]':{
      background: grey[50]
    },
    "& > div":{
      display:'inline-flex' // this shows the icon in the SelectInput but not the dropdown
    }
  },
  icon:{
    color: blue[500],
    right: 12,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none'
  },
  paper: {
    borderRadius: 4,
    marginTop: 8
  },
  list: {
    paddingTop:0,
    paddingBottom:0,
    paddingRight:8,
    paddingLeft:8,
    background:'white',
    "& li":{
      paddingTop:12,
      paddingBottom:12,
      paddingRight:8,
      paddingLeft:8,
    },
    "& li:hover":{
      background: blue[50]
    },
    "& li.Mui-selected":{
      color:'black',
      background: 'white'
    },
    "& li.Mui-selected:hover":{
      background: blue[50]
    }
  },
  listIcon: {
    minWidth: 32,
    display: 'none' // hide the ListItemIcon in the dropdown
  }
});

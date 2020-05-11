import { blue } from '@material-ui/core/colors';

export default ({ palette }) => ({
  label: {
    marginLeft: '4px',
    color: palette.grey[500],
    "&.Mui-focused":{
      color: palette.grey[500], // to overwrite the default behaviour
    }
  },
  select: {
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
      borderColor: blue[200]
    },
  },
  icon:{
    color: palette.grey[500],
    right: 12,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none'
  },
  list: {
    paddingTop:0,
    paddingBottom:0,
    background:'white',
    "& li.Mui-selected":{
      fontWeight:700
    }
  }
});

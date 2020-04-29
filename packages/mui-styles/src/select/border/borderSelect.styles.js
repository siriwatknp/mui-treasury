import { blue } from '@material-ui/core/colors';

export default ({ palette }) => ({
  label: {
    marginLeft: '4px',
    color: palette.grey[500],
    "&.Mui-focused":{
      color: palette.grey[500],
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
    }
  },
  icon:{
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
  list: {
    paddingTop:0,
    paddingBottom:0,
    background:'white',
    "& li.Mui-selected":{
      fontWeight:700
    }
  }
});

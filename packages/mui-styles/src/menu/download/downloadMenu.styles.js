import { blue } from '@material-ui/core/colors';

const minWidth = 140;

export default () => ({
  button: {
    minWidth:minWidth,
    background: 'white',
    fontWeight:500,
    textTransform:'capitalize',
    borderColor: blue[500],
    borderStyle:'solid',
    borderWidth: '2px',
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    "& > span": {
      fontSize:'0.9em'
    }
  },
  downloadIcon:{
    color: blue[400],
    userSelect: 'none',
    pointerEvents: 'none',
    marginRight:8
  },
  downIcon:{
    color: blue[400],
    userSelect: 'none',
    pointerEvents: 'none'
  },
  upIcon:{
    color: blue[400],
    userSelect: 'none',
    pointerEvents: 'none',
    transform: "rotate(180deg)"
  },
  paper: {
    minWidth:minWidth,
    borderRadius: 4,
    marginTop: 8
  }
});

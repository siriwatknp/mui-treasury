import { blueGrey } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

export default ({ palette }) => ({
  root: {
    borderRadius: 3,
    border: '2px solid',
    borderColor: blueGrey[200],
    '&:hover:not($disabled)': {
      borderColor: blueGrey[500],
    },
    '& > svg': {
      color: blueGrey[300],
    },
  },
  adornedStart: {
    paddingLeft: '0.5rem',
  },
  adornedEnd: {
    paddingRight: '0.5rem',
  },
  focused: {
    borderColor: blue[700],
    '&:hover:not($disabled)': {
      borderColor: blue[700],
    },
  },
  error: {
    borderColor: palette.error.main,
    '&:hover:not($disabled)': {
      borderColor: palette.error.main,
    },
  },
  input: {
    padding: '0.625rem 0.5rem',
  },
  disabled: {
    borderColor: blueGrey[300],
    backgroundColor: blueGrey[100],
  },
});

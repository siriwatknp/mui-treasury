import makeStyles from '@material-ui/styles/makeStyles';
import gmailListItemStyles from './gmailListItem.styles';

const useGmailListItemStyles = makeStyles(gmailListItemStyles, {
  name: 'GmailListItem',
});

export { gmailListItemStyles, useGmailListItemStyles };

export { default } from './gmailListItem.styles';

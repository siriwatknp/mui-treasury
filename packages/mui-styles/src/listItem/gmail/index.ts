import makeStyles from '@material-ui/core/styles/makeStyles';
import gmailListItemStyles from './gmailListItem.styles';

const useGmailListItemStyles = makeStyles(gmailListItemStyles, { name: "GmailListItem" });

export { gmailListItemStyles, useGmailListItemStyles };

export { default } from './gmailListItem.styles';

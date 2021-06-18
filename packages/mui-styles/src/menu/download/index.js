import makeStyles from '@material-ui/styles/makeStyles';
import downloadMenuStyles from './downloadMenu.styles';

const useDownloadMenuStyles = makeStyles(downloadMenuStyles, {
  name: 'DownloadMenu',
});

export { downloadMenuStyles, useDownloadMenuStyles };

export { default } from './downloadMenu.styles';

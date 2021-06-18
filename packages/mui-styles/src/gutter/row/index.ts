import makeStyles from '@material-ui/styles/makeStyles';
import rowGutterStyles, {
  RowGutterClassKey,
  RowGutterStyleProps,
} from './rowGutter.styles';
import { ClassNameMap } from '@material-ui/styles';

const useRowGutterStyles: (
  props?: RowGutterStyleProps
) => ClassNameMap<RowGutterClassKey> = makeStyles(rowGutterStyles, {
  name: 'RowGutter',
});

export { rowGutterStyles, useRowGutterStyles };
export * from './rowGutter.styles';

export { default } from './rowGutter.styles';

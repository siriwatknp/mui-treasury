import { mergeStyleCreators } from '../../src';
import { createStyles as createParentStyles } from '../Parent';

export default mergeStyleCreators(createParentStyles, () => ({
  root: {},
}));

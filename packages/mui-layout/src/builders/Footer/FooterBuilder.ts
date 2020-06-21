import { createSingleObjBuilder } from '../../shared/BuilderCreator';
import { DEFAULT_FOOTER_ID } from '../../utils';

const FooterBuilder = createSingleObjBuilder({
  defaultId: DEFAULT_FOOTER_ID,
  component: 'Footer',
});

export default FooterBuilder

import { createSingleObjBuilder } from '../../shared/BuilderCreator';
import { DEFAULT_CONTENT_ID } from '../../utils';

const ContentBuilder = createSingleObjBuilder({
  defaultId: DEFAULT_CONTENT_ID,
  component: 'Content',
});

export default ContentBuilder

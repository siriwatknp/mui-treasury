import { HeaderConfig } from '../../types';
import { DEFAULT_HEADER_ID } from '../../utils';
import { HeaderRegistry } from '../../Header';
import { SingleObjData } from '../../shared/State';
import { createSingleObjBuilder } from '../../shared/BuilderCreator'

export type HeaderData = SingleObjData<HeaderConfig>;

const HeaderBuilder = createSingleObjBuilder<typeof HeaderRegistry, HeaderConfig>({
  defaultId: DEFAULT_HEADER_ID,
  Registry: HeaderRegistry,
  component: 'Header'
});

export default HeaderBuilder;

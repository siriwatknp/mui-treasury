import { HeaderConfig } from '../../types';
import { createMultiObjBuilder } from '../../shared/BuilderCreator/MultiObjects';
import { HeaderRegistry } from '../../Header';

export type ISubheaderBuilder = ReturnType<typeof SubheaderBuilder>;

const SubheaderBuilder = createMultiObjBuilder<
  typeof HeaderRegistry,
  HeaderConfig
>({
  component: 'Subheader',
  Registry: HeaderRegistry,
});

export default SubheaderBuilder;

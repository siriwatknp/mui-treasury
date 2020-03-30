import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@material-ui/core/OverridableComponent';
import { ElementType, ReactNode } from 'react';

export interface InsetContainerTypeMap<P = {}, D extends ElementType = 'div'> extends OverridableTypeMap {
  props: P & {
    omitHeaderOffset?: boolean;
    children: ReactNode | (() => ReactNode);
  };
  defaultComponent: D;
  classKey: string;
}

declare const InsetContainer: OverridableComponent<InsetContainerTypeMap>;

export type InsetContainerProps<
  D extends ElementType = InsetContainerTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<InsetContainerTypeMap<P, D>, D>;

export default InsetContainer;

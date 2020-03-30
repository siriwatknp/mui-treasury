import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@material-ui/core/OverridableComponent';
import { ElementType, ReactNode } from 'react';

export interface ContentTypeMap<P = {}, D extends ElementType = 'main'> extends OverridableTypeMap {
  props: P & {
    omitHeaderOffset?: boolean;
    children: ReactNode | (() => ReactNode);
  };
  defaultComponent: D;
  classKey: string;
}

declare const Content: OverridableComponent<ContentTypeMap>;

export type ContentProps<
  D extends ElementType = ContentTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ContentTypeMap<P, D>, D>;

export default Content;

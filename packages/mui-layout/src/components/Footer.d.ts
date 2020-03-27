import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@material-ui/core/OverridableComponent';
import { ElementType } from 'react';

export interface FooterTypeMap<P = {}, D extends ElementType = 'footer'> extends OverridableTypeMap {
  props: P;
  defaultComponent: D;
  classKey: string;
}

declare const Footer: OverridableComponent<FooterTypeMap>;

export type FooterProps<
  D extends ElementType = FooterTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<FooterTypeMap<P, D>, D>;

export default Footer;

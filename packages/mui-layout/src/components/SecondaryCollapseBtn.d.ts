import { ExtendButtonBase } from '@material-ui/core/ButtonBase';
import { OverrideProps } from '@material-ui/core/OverridableComponent';
import { ElementType } from 'react';
import useSidebarConfig from '../hooks/useSidebarConfig';
import { ExtendButtonTypeMap } from './internal/SharedCollapseBtn';

export type SecondaryCollapseBtnTypeMap<
  P = {},
  D extends ElementType = 'button'
> = ExtendButtonTypeMap<{
  props: P & {
    mapContext?: (ctx: ReturnType<typeof useSidebarConfig>) => Pick<ReturnType<typeof useSidebarConfig>, 'setCollapsed' | 'collapsed' | 'open' | 'sidebar'>;
    // useSidebarConfig?: typeof useSidebarConfig;
  };
  defaultComponent: D;
  classKey: string;
}>;

declare const SecondaryCollapseBtn: ExtendButtonBase<SecondaryCollapseBtnTypeMap>;

export type SecondaryCollapseBtnProps<
  D extends ElementType = SecondaryCollapseBtnTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<SecondaryCollapseBtnTypeMap<P, D>, D>;

export default SecondaryCollapseBtn;

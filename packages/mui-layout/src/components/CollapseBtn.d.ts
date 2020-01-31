import { ExtendButtonBase } from '@material-ui/core/ButtonBase';
import { OverrideProps } from '@material-ui/core/OverridableComponent';
import { ElementType } from 'react';
import useSidebarConfig from '../hooks/useSidebarConfig';
import { ExtendButtonTypeMap } from './internal/SharedCollapseBtn';

export type CollapseBtnTypeMap<
  P = {},
  D extends ElementType = 'button'
> = ExtendButtonTypeMap<{
  props: P & {
    mapContext?: (ctx: ReturnType<typeof useSidebarConfig>) => Pick<ReturnType<typeof useSidebarConfig>, 'setCollapsed' | 'collapsed' | 'opened' | 'sidebar'>;
    // useSidebarConfig?: typeof useSidebarConfig;
  };
  defaultComponent: D;
  classKey: string;
}>;

declare const CollapseBtn: ExtendButtonBase<CollapseBtnTypeMap>;

export type CollapseBtnProps<
  D extends ElementType = CollapseBtnTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<CollapseBtnTypeMap<P, D>, D>;

export default CollapseBtn;

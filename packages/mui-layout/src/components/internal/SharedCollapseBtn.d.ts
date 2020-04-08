import { ButtonTypeMap } from '@material-ui/core/Button';
import { ExtendButtonBase } from '@material-ui/core/ButtonBase';
import { OverridableTypeMap, OverrideProps } from '@material-ui/core/OverridableComponent';
import { ElementType } from 'react';
import useSidebarConfig from '../../hooks/useSidebarConfig';

export interface ExtendButtonTypeMap<M extends OverridableTypeMap> {
  props: ButtonTypeMap['props'] & M['props'];
  defaultComponent: M['defaultComponent'];
  classKey: M['classKey'];
}

export type SharedCollapseBtnTypeMap<
  P = {},
  D extends ElementType = 'button'
> = ExtendButtonTypeMap<{
  props: P & {
    mapContext?: (ctx: ReturnType<typeof useSidebarConfig>) => Pick<ReturnType<typeof useSidebarConfig>, 'setCollapsed' | 'collapsed' | 'open' | 'sidebar'>;
    useSidebarConfig: typeof useSidebarConfig;
  };
  defaultComponent: D;
  classKey: string;
}>;

export interface ExtendSharedCollapseBtnTypeMap<M extends OverridableTypeMap> {
  props: SharedCollapseBtnTypeMap['props'] & M['props'];
  defaultComponent: M['defaultComponent'];
  classKey: M['classKey'];
}

declare const SharedCollapseBtn: ExtendButtonBase<SharedCollapseBtnTypeMap>;

export type SharedCollapseBtnProps<
  D extends ElementType = SharedCollapseBtnTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<SharedCollapseBtnTypeMap<P, D>, D>;

export default SharedCollapseBtn;

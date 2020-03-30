import { AppBarProps } from '@material-ui/core/AppBar';
import { ComponentType, ReactNode } from 'react';
import { ILayoutContext } from '../core/layoutContext';

declare const Header: ComponentType<AppBarProps & {
  children: ReactNode & ((ctx: ILayoutContext) => ReactNode);
}>;

export default Header;

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ComponentType, Consumer, Context, ReactNode } from 'react';
import { Config } from '../utils/ConfigGenerator/ConfigGenerator';

export interface ILayoutContext extends ReturnType<Config<true>['get']> {
  screen?: Breakpoint;
  opened: boolean;
  setOpened: (value: boolean) => void;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  secondaryOpened: boolean;
  setSecondaryOpened: (value: boolean) => void;
  secondaryCollapsed: boolean;
  setSecondaryCollapsed: (value: boolean) => void;
}

export interface LayoutProviderProps {
  initialOpened?: boolean;
  initialCollapsed?: boolean;
  initialSecondaryOpened?: boolean;
  initialSecondaryCollapsed?: boolean;
  config?: Partial<Config<true>>;
  children: ReactNode;
  parseConfig?: (config: Config) => Config;
}

export declare const LayoutProvider: ComponentType<LayoutProviderProps>;

export declare const LayoutConsumer: Consumer<ILayoutContext>;

declare const LayoutCtx: Context<ILayoutContext>;

export default LayoutCtx;

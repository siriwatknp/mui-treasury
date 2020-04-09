import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ComponentType, Consumer, Context, ReactNode } from 'react';
import { Config } from '../utils/ConfigGenerator/ConfigGenerator';

export interface ILayoutContext extends ReturnType<Config<true>['get']> {
  screen?: Breakpoint;
  open: boolean;
  opened: boolean; // removed in next major changed #555
  setOpen: (value: boolean) => void;
  setOpened: (value: boolean) => void; // removed in next major changed #555
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  secondaryOpen: boolean;
  secondaryOpened: boolean; // removed in next major changed #555
  setSecondaryOpen: (value: boolean) => void;
  setSecondaryOpened: (value: boolean) => void; // removed in next major changed #555
  secondaryCollapsed: boolean;
  setSecondaryCollapsed: (value: boolean) => void;
}

export interface LayoutProviderProps {
  initialOpen?: boolean;
  initialOpened?: boolean; // removed in next major changed #555
  initialCollapsed?: boolean;
  initialSecondaryOpen?: boolean;
  initialSecondaryOpened?: boolean; // removed in next major changed #555
  initialSecondaryCollapsed?: boolean;
  config?: Partial<Config<true>>;
  children: ReactNode;
  parseConfig?: (config: Config) => Config;
}

export declare const LayoutProvider: ComponentType<LayoutProviderProps>;

export declare const LayoutConsumer: Consumer<ILayoutContext>;

declare const LayoutCtx: Context<ILayoutContext>;

export default LayoutCtx;

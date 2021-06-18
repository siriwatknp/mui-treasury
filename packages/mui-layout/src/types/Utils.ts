import { Breakpoint } from '@material-ui/system';

export type Dictionary<T> = {
  [key: string]: T;
};

export type AppendDictionary<T> = T | Dictionary<T>;

export type MapBreakpoint<T> = {
  [key in Breakpoint]?: T;
};

export type SidebarVariant = 'persistent' | 'temporary' | 'permanent';

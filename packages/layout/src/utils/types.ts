import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type Responsive<T = any> = Partial<Record<Breakpoint, T>>;

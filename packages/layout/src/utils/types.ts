import { Breakpoint } from "@material-ui/system";

export type Responsive<T = any> = Partial<Record<Breakpoint, T>>;

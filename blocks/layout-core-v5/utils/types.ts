import { Breakpoint } from "@mui/system";

export type Responsive<T = any> = Partial<Record<Breakpoint, T>>;

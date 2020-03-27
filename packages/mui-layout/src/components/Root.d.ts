import { ThemeProviderProps } from '@material-ui/styles/ThemeProvider';
import { ComponentType } from 'react';
import { LayoutProviderProps } from '../core/layoutContext';

export interface RootProps  extends LayoutProviderProps {
  theme?: ThemeProviderProps['theme'];
  omitThemeProvider?: boolean;
}

declare const Root: ComponentType<RootProps>;

export default Root;

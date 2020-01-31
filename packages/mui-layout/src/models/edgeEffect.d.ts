import { Theme } from '@material-ui/core';
import { CSSProperties } from 'react';
import { ILayoutContext } from '../core/layoutContext';
import { PersistentBehavior } from '../utils/ConfigGenerator/BehaviorGenerator';
import createWidth from './width';

interface IEdgeEffect {
  getHeaderZIndexStyle: (theme: Theme) => Pick<CSSProperties, 'zIndex'> | undefined;
  getMarginStyle(behavior?: { persistentBehavior: PersistentBehavior }): Pick<CSSProperties, 'marginLeft' | 'marginRight'> | undefined;
  getWidthObj(behavior?: { persistentBehavior: PersistentBehavior }): ReturnType<typeof createWidth>;
  getWidthStyle(behavior?: { persistentBehavior: PersistentBehavior }): ReturnType<ReturnType<this['getWidthObj']>['getStyle']>;
}

declare const edgeEffect: (ctx?: ILayoutContext) => IEdgeEffect;

export default edgeEffect;

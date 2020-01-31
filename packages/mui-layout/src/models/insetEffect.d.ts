import { CSSProperties } from 'react';
import { ILayoutContext } from '../core/layoutContext';
import { InsetBehavior } from '../utils/ConfigGenerator/BehaviorGenerator';
import createWidth from './width';

interface IInsetEffect {
  getWidthObj(): ReturnType<typeof createWidth>;
  getHeaderZIndexStyle: () => void;
  getMarginStyle: (behavior?: { insetBehavior: InsetBehavior }) => Pick<CSSProperties, 'marginLeft' | 'marginRight'> | undefined;
  getWidthStyle(): ReturnType<ReturnType<this['getWidthObj']>['getStyle']>;
}

declare const insetEffect: (ctx?: ILayoutContext) => IInsetEffect;

export default insetEffect;

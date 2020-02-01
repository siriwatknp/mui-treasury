import { CSSProperties } from 'react';
import { ILayoutContext } from '../core/layoutContext';
import { InsetBehavior } from '../utils/ConfigGenerator/BehaviorGenerator';
import { Width } from './width';

interface IInsetEffect {
  getWidthObj(): Width;
  getHeaderZIndexStyle: () => void;
  getMarginStyle: (behavior?: { insetBehavior: InsetBehavior }) => Pick<CSSProperties, 'marginLeft' | 'marginRight'> | undefined;
  getWidthStyle(): ReturnType<Width['getStyle']>;
}

declare const insetEffect: (ctx?: ILayoutContext) => IInsetEffect;

export default insetEffect;

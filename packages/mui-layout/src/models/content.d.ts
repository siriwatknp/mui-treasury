import { ILayoutContext } from '../core/layoutContext';
import combineMargin from '../utils/combineMargin';
import { reduceWidths } from './width';

export interface IContent {
  getMarginStyle(): ReturnType<typeof combineMargin> | undefined;
  getWidthStyle(): ReturnType<ReturnType<typeof reduceWidths>['getStyle']> | undefined;
  getStyle(): ReturnType<this['getMarginStyle']> & ReturnType<this['getWidthStyle']>;
}

declare const content: (ctx?: ILayoutContext) => IContent;

export default content;

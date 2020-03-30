import { ILayoutContext } from '../core/layoutContext';
import combineMargin from '../utils/combineMargin';
import { reduceWidths } from './width';

interface IHeader {
  getMarginStyle(): ReturnType<typeof combineMargin>;
  getWidthStyle(): ReturnType<ReturnType<typeof  reduceWidths>['getStyle']>;
  getStyle(): ReturnType<this['getMarginStyle']> & ReturnType<this['getWidthStyle']>;
}

declare const header: (ctx?: ILayoutContext) => IHeader;

export default header;

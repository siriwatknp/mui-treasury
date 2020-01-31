import { CSSProperties } from 'react';

type Margin = Pick<CSSProperties, 'marginLeft' | 'marginRight'>;

declare const combineMargin: (m1?: Margin, m2?: Margin) => Margin;

export default combineMargin;

import { CSSProperties } from 'react';

export interface Width {
  gap: CSSProperties['width'];
  getStyle: (defaultValue: CSSProperties['width']) => Pick<CSSProperties, 'width'>;
}

declare const createWidth: (gap: CSSProperties['width']) => Width;

export declare const reduceWidths: (widths: CSSProperties['width'][]) => ReturnType<typeof createWidth>;

export default createWidth;

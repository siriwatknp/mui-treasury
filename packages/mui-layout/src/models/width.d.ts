import { CSSProperties } from 'react';

type CSSProperties_Width = CSSProperties['width'];

export interface Width {
  gap: CSSProperties_Width;
  getStyle: (defaultValue: CSSProperties_Width) => Pick<CSSProperties, 'width'>;
}

declare const createWidth: (gap: CSSProperties_Width) => Width;

export declare const reduceWidths: (widths: CSSProperties_Width[]) => ReturnType<typeof createWidth>;

export default createWidth;

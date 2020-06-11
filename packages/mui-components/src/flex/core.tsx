import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { gapToCss, resolveGap } from './utils';

type FlexContextValue = 'row' | 'column' | 'row-column' | 'column-row';
export type At = Breakpoint | number;

const FlexContext = React.createContext<FlexContextValue>(undefined);
const GapContext = React.createContext<Gap>(undefined);
const BreakpointContext = React.createContext<At>(undefined);

export const FlexProvider = FlexContext.Provider;
export const GapProvider = GapContext.Provider;

export type Position =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'middle'
  | 'middle-right'
  | 'center'
  | string;

export const positionInsideRow = (position: Position) => {
  if (position === 'left') return undefined;
  if (position === 'right') return { marginLeft: 'auto' };
  if (position === 'top') return { alignSelf: 'flex-start' };
  if (position === 'bottom') return { alignSelf: 'flex-end' };
  if (position === 'middle') return { alignSelf: 'center' };
  if (position === 'middle-right')
    return { alignSelf: 'center', marginLeft: 'auto' };
  if (position === 'center')
    return { alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto' };
};

export const positionInsideColumn = (position: Position) => {
  if (position === 'left') return { alignSelf: 'flex-start' };
  if (position === 'right') return { alignSelf: 'flex-end' };
  if (position === 'top') return undefined;
  if (position === 'bottom') return { marginTop: 'auto' };
  if (position === 'middle') return { marginTop: 'auto', marginBottom: 'auto' };
  if (position === 'middle-right')
    return { alignSelf: 'flex-end', marginTop: 'auto', marginBottom: 'auto' };
  if (position === 'center')
    return { alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto' };
};

export const useGapCtx = () => React.useContext(GapContext);

export const useGapLookup = (gap: Gap) => {
  const isValidGap = typeof gap !== 'undefined';
  const inheritedGap = useGapCtx();
  const hasInheritedGap = typeof inheritedGap !== 'undefined';
  let calculatedGap = gap;
  if (!isValidGap) {
    calculatedGap = inheritedGap;
  }
  const theme = useTheme();
  return {
    isValidGap,
    hasInheritedGap,
    calculatedGap,
    itemProps: {
      ...(!hasInheritedGap && {
        // need to do this, otherwise cannot test calc() with .toHaveStyle
        p: gapToCss(theme)(calculatedGap),
      }),
      ...(hasInheritedGap &&
        isValidGap && {
          p: gapToCss(theme)(inheritedGap),
          m: gapToCss(theme, value =>
            resolveGap(typeof value === 'number' ? -value : `-${value}`)
          )(gap),
        }),
    },
  };
};

export const useGapItem = () => {
  const theme = useTheme();
  const gap = useGapCtx();
  return {
    p: gapToCss(theme)(gap),
  };
};

export const useFlexCtx = () => React.useContext(FlexContext);

export const useFlexStyles = (position: Position) => {
  const flex = React.useContext(FlexContext);
  if (flex === 'row') return positionInsideRow(position);
  if (flex === 'column') return positionInsideColumn(position);
};

export type Gap =
  | number
  | string
  | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>>;

export type ProviderProps = {
  flexDirection: FlexContextValue;
  gap: Gap;
};

export const Provider = ({
  flexDirection,
  gap,
  children,
}: React.PropsWithChildren<ProviderProps>) => {
  return (
    <FlexProvider value={flexDirection}>
      <GapProvider value={gap}>{children}</GapProvider>
    </FlexProvider>
  );
};

export const useBreakpointLookup = (at: At) => {
  const inheritedAt = React.useContext(BreakpointContext);
  return {
    calculatedAt: typeof at !== 'undefined' ? at : inheritedAt,
  };
};

export const BreakpointProvider = ({
  at,
  children,
}: React.PropsWithChildren<{ at: At }>) => {
  return (
    <BreakpointContext.Provider value={at}>
      {children}
    </BreakpointContext.Provider>
  );
};

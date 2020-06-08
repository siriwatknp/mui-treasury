import { useScreen } from '@mui-treasury/layout';
import { ShowcaseProps, SpanProp } from 'website/src/components/Showcase';
import { Breakpoint, keys } from '@material-ui/core/styles/createBreakpoints';

const getNearestBreakpointValue = (
  value: Partial<Record<Breakpoint, any>>,
  breakpoint: Breakpoint
) => {
  const possibleBreakpoints = keys.slice(0, keys.indexOf(breakpoint) + 1);
  return possibleBreakpoints.reduceRight((result, currentBreakpoint) => {
    if (result) return result;
    return value[currentBreakpoint];
  }, value[breakpoint]);
};

const useShowcaseVariant = (colSpan: SpanProp): ShowcaseProps['variant'] => {
  const screen = useScreen();
  let result = colSpan;
  if (typeof colSpan === 'object') {
    result = getNearestBreakpointValue(colSpan, screen);
  }
  const map = { sm: 9, md: 8, lg: 8, xl: 8 }
  return result >= map[screen] ? 'row' : 'column';
};

export const ShowcaseVariant = ({
  children,
  colSpan,
}: {
  children: (variant: ShowcaseProps['variant']) => JSX.Element;
  colSpan: SpanProp;
}) => {
  const variant = useShowcaseVariant(colSpan);
  return children(variant);
};

export default useShowcaseVariant;

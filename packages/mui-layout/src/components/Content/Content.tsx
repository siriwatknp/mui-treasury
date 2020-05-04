import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { createHeaderOffset } from '../HeaderOffset';
import { useLayoutCtx } from '../../core';
import { createBreakpointStyles } from '../../utils';
import ContentCompiler from '../../compilers/ContentCompiler';
import { useFullscreenCtx } from '../../core/Context/FullscreenContext';
import styledProxy from '../Shared/StyledProxy';

const StyledMain = styledProxy('main');
const Div = styledProxy('div');

export const createContent = (StyledComponent = StyledMain, StyledDiv = Div) => {
  const HeaderOffset = createHeaderOffset(StyledDiv)
  const Content = ({
    children,
    ...props
  }: React.PropsWithChildren<{ className?: string }>) => {
    const { breakpoints } = useTheme();
    const { data, state } = useLayoutCtx();
    const styles = createBreakpointStyles(
      ContentCompiler(state, data.edgeSidebar).getResultStyle(data.content.id),
      breakpoints
    );
    const isFullscreen = useFullscreenCtx();
    return (
      <StyledComponent
        {...props}
        styles={{
          transition: 'all 300ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
          ...styles,
          ...(isFullscreen && { flexGrow: 1, minHeight: 0, display: 'flex' }),
        }}
      >
        <HeaderOffset />
        {children}
      </StyledComponent>
    );
  };
  return Content;
};

export default createContent();

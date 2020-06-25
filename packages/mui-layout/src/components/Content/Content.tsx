import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useLayoutCtx } from '../../contexts';
import { createBreakpointStyles, CSS_TRANSITION } from '../../utils';
import ContentCompiler from '../../compilers/ContentCompiler';
import { useFullscreenCtx } from '../../contexts/FullscreenContext';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Main = styledProxy('main');

  const Content = ({
    children,
    ...props
  }: React.PropsWithChildren<{ className?: string }>) => {
    const theme = useTheme();
    const { data, state } = useLayoutCtx();
    const styles = createBreakpointStyles(
      ContentCompiler(state, data.edgeSidebar).getResultStyle(data.content.id),
      theme
    );
    const isFullscreen = useFullscreenCtx();
    return (
      <Main
        {...props}
        styles={{
          transition: CSS_TRANSITION,
          ...styles,
          ...(isFullscreen && { flexGrow: 1, minHeight: 0, display: 'flex' }),
        }}
      >
        {children}
      </Main>
    );
  };
  return Content;
};

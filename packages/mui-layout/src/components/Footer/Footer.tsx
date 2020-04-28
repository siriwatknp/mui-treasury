import React from 'react';
import { useLayoutCtx } from '../../core';
import { useTheme } from '@material-ui/core';
import { createBreakpointStyles } from '../../utils';
import ContentCompiler from '../../compilers/ContentCompiler';
import createStyledProxy from '../Shared/StyledProxy';

const StyledFooter = createStyledProxy('footer');

export const createFooter = (StyledComponent = StyledFooter) => {
  const Footer = (props: React.PropsWithChildren<{ className?: string }>) => {
    const { breakpoints } = useTheme();
    const { data, state } = useLayoutCtx();
    const styles = createBreakpointStyles(
      // can reuse content compiler at this point
      ContentCompiler(state, data.edgeSidebar).getResultStyle(data.footer.id),
      breakpoints
    );
    return (
      <StyledComponent
        {...props}
        styles={{ transition: 'all 225ms', ...styles }}
      />
    );
  };
  return Footer
}

export default createFooter();

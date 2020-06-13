import React from 'react';
import { useTheme } from '@material-ui/core';
import { useLayoutCtx } from '../../contexts';
import { createBreakpointStyles } from '../../utils';
import ContentCompiler from '../../compilers/ContentCompiler';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledFooter = styledProxy('footer');

  const Footer = (props: React.PropsWithChildren<{ className?: string }>) => {
    const theme = useTheme();
    const { data, state } = useLayoutCtx();
    const styles = createBreakpointStyles(
      // can reuse content compiler at this point
      ContentCompiler(state, data.edgeSidebar).getResultStyle(data.footer.id),
      theme
    );
    return (
      <StyledFooter
        {...props}
        styles={{ transition: 'all 225ms', ...styles }}
      />
    );
  };
  return Footer
}


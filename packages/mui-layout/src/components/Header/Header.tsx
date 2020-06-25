import React from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import { Theme, useTheme } from '@material-ui/core/styles';
import getHeaderOffset from '../HeaderOffset';
import { useLayoutCtx } from '../../contexts';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import HeaderCompiler from '../../compilers/HeaderCompiler';
import { createBreakpointStyles, CSS_TRANSITION } from '../../utils';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledAppBar = styledProxy<AppBarProps>(AppBar);
  const HeaderOffset = getHeaderOffset(styled);

  const Header: React.FC<AppBarProps> = props => {
    const { data, state } = useLayoutCtx();
    const theme = useTheme<Theme>();
    const styles = createBreakpointStyles(
      HeaderCompiler(state, data.header, data.edgeSidebar).getResultStyle(),
      theme
    );
    return (
      <>
        <StyledAppBar
          color={'default'}
          elevation={0}
          mui-layout={data.headerId}
          {...props}
          styles={{
            transition: CSS_TRANSITION,
            ...styles,
          }}
        />
        <HeaderOffset />
      </>
    );
  };

  return Header;
};

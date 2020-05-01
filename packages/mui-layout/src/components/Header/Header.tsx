import React from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import { Theme, useTheme } from '@material-ui/core/styles';
import { useLayoutCtx } from '../../core';
import createHiddenProxyComponent from '../Shared/StyledProxy';
import HeaderCompiler from '../../compilers/HeaderCompiler';
import { createBreakpointStyles } from '../../utils';

const StyledProxyAppBar = createHiddenProxyComponent<AppBarProps>(AppBar);

export const createHeader = (StyledComponent = StyledProxyAppBar) => {
  const Header: React.FC<AppBarProps> = props => {
    const { data, state } = useLayoutCtx();
    const { breakpoints } = useTheme<Theme>();
    const styles = createBreakpointStyles(
      HeaderCompiler(state, data.header, data.edgeSidebar).getResultStyle(),
      breakpoints
    );
    return (
      <StyledComponent
        color={'default'}
        elevation={0}
        mui-layout={data.headerId}
        {...props}
        styles={{
          transition: 'all 300ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
          ...styles,
        }}
      />
    );
  };

  return Header
}

export default createHeader();

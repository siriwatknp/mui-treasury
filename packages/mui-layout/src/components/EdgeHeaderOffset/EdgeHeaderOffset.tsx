import React from 'react';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useLayoutCtx } from '../../contexts';
import EdgeHeaderOffsetCompiler from '../../compilers/EdgeHeaderOffsetCompiler';
import { useEdgeHeaderMagnet } from '../../hooks';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import { transitionStyles } from '../../styles';
import { createBreakpointStyles } from '../../utils';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');

  const useTransitionStyles = makeStyles(transitionStyles);

  const EdgeHeaderOffset = ({ sidebarId }: { sidebarId: string }) => {
    const theme = useTheme();
    const transition = useTransitionStyles();
    const { data } = useLayoutCtx();
    const compiler = EdgeHeaderOffsetCompiler(data.edgeSidebar, data.header);
    const styles = createBreakpointStyles(
      compiler.getResultStyle(sidebarId),
      theme
    );
    const inlineStyle = useEdgeHeaderMagnet(sidebarId);
    return (
      <Div
        className={cx('EdgeHeaderOffset', transition.smooth)}
        styles={{ ...styles, flexShrink: 0 }}
        style={inlineStyle}
      />
    );
  };
  return EdgeHeaderOffset;
};

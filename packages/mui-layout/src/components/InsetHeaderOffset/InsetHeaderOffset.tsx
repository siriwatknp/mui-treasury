import React from 'react';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useLayoutCtx } from '../../contexts';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import InsetHeaderOffsetCompiler from '../../compilers/InsetHeaderOffsetCompiler';
import { createBreakpointStyles } from '../../utils';
import { useInsetHeaderMagnet } from '../../hooks/useInsetHeaderMagnet';
import { transitionStyles } from '../../styles';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');

  const useTransitionStyles = makeStyles(transitionStyles);

  const InsetHeaderOffset = ({ sidebarId }: { sidebarId: string }) => {
    const theme = useTheme();
    const transition = useTransitionStyles();
    const { data } = useLayoutCtx();
    const compiler = InsetHeaderOffsetCompiler(
      data.insetSidebar,
      data.header,
      data.subheader
    );
    const styles = createBreakpointStyles(
      compiler.getResultStyle(sidebarId),
      theme
    );
    const inlineStyle = useInsetHeaderMagnet(sidebarId);
    return (
      <Div
        className={cx('InsetHeaderOffset', transition.smooth)}
        styles={{ ...styles, flexShrink: 0 }}
        style={inlineStyle}
      />
    );
  };
  return InsetHeaderOffset;
};

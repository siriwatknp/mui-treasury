import React from 'react';
import cx from 'clsx';
import useTheme from '@material-ui/core/styles/useTheme';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import { createBreakpointStyles, CSS_TRANSITION } from '../../utils';
import { useLayoutCtx } from '../../contexts';
import SubheaderCompiler from '../../compilers/SubheaderCompiler';
import HeaderOffsetCompiler from '../../compilers/HeaderOffsetCompiler';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');

  const Subheader = ({
    className,
    subheaderId,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & { subheaderId: string }) => {
    if (!subheaderId) {
      throw new Error('You must provide "subheaderId" prop to <Subheader />');
    }
    const theme = useTheme();
    const { data, state } = useLayoutCtx();
    const compiler = SubheaderCompiler(state, data.subheader, data.edgeSidebar);
    const styles = createBreakpointStyles(
      compiler.getResultStyle(subheaderId),
      theme
    );
    const offsetCompiler = HeaderOffsetCompiler(
      data.subheader.configMapById[subheaderId]
    );
    const offsetStyles = createBreakpointStyles(
      offsetCompiler.getResultStyle(),
      theme
    );
    return (
      <>
        <Div
          className={cx('Subheader', className)}
          mui-layout={subheaderId}
          styles={{ zIndex: 1000, transition: CSS_TRANSITION, ...styles }}
          {...props}
        />
        <Div
          className={cx('SubheaderOffset', className)}
          styles={{ transition: CSS_TRANSITION, height: 0, ...offsetStyles }}
        />
      </>
    );
  };
  return Subheader;
};

import React from 'react';
import cx from 'clsx';
import useTheme from '@material-ui/core/styles/useTheme';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import { createBreakpointStyles } from '../../utils';
import { useLayoutCtx } from '../../contexts';
import SubheaderCompiler from '../../compilers/SubheaderCompiler';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const Subheader = ({
    className,
    subheaderId,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & { subheaderId: string }) => {
    const theme = useTheme();
    const { data, state } = useLayoutCtx();
    const compiler = SubheaderCompiler(state, data.subheader, data.edgeSidebar);
    const styles = createBreakpointStyles(
      compiler.getResultStyle(subheaderId),
      theme
    );
    return (
      <Div className={cx('Subheader', className)} styles={styles} {...props} />
    );
  };
  return Subheader;
};

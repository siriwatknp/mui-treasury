import React from 'react';
import cx from 'clsx';
import useTheme from '@material-ui/core/styles/useTheme';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import { createBreakpointStyles } from '../../utils';

export default (styled: any) => {
  const theme = useTheme();
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const styles = createBreakpointStyles({}, theme);
  const Subheader = ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <Div className={cx('Subheader', className)} styles={styles} {...props} />
    );
  };
  return Subheader;
};

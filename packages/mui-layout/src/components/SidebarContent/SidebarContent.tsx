import React, { HTMLProps } from 'react';
import cx from 'clsx';

export default (styled: any) => {
  const Div = styled('div')`
    min-height: 0;
    flex-grow: 1;
    overflow: auto;
  `;

  const SidebarContent: React.FC<HTMLProps<HTMLDivElement>> = ({
    className,
    ...props
  }) => {
    return (
      <Div
        className={cx('SidebarContent', className)}
        {...props}
      />
    );
  };

  return SidebarContent;
};

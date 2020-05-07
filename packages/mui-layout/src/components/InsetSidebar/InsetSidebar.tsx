import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import getInsetHeaderOffset from '../InsetHeaderOffset';
import { useInsetSidebar } from '../../core';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'relative',
    flexShrink: 0,
  },
  paper: {
    backgroundColor: palette.grey[100],
  },
}));

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const InsetHeaderOffset = getInsetHeaderOffset(styled);

  const InsetSidebar = ({
    sidebarId,
    children,
    ...props
  }: React.PropsWithChildren<{
    sidebarId: string;
    classes?: { root?: string; paper?: string };
  }>) => {
    const classes = useStyles(props);
    const { rootStyles, bodyStyles } = useInsetSidebar(sidebarId);
    return (
      <Div
        className={`InsetSidebar-root ${classes.root}`}
        styles={rootStyles}
      >
        <Div
          className={`InsetSidebar-paper ${classes.paper}`}
          styles={bodyStyles}
        >
          <InsetHeaderOffset sidebarId={sidebarId} />
          {children}
        </Div>
      </Div>
    );
  };
  return InsetSidebar;
};

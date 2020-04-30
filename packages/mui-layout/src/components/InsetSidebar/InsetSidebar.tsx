import React from 'react';
import styledProxy from '../Shared/StyledProxy';
import { makeStyles } from '@material-ui/core/styles';
import { createInsetHeaderOffset } from '../InsetHeaderOffset';
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

const Div = styledProxy('div');

export const createInsetSidebar = (StyledComponent = Div) => {
  const InsetHeaderOffset = createInsetHeaderOffset(StyledComponent);

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
      <StyledComponent
        className={`InsetSidebar-root ${classes.root}`}
        styles={rootStyles}
      >
        <StyledComponent
          className={`InsetSidebar-paper ${classes.paper}`}
          styles={bodyStyles}
        >
          <InsetHeaderOffset sidebarId={sidebarId} />
          {children}
        </StyledComponent>
      </StyledComponent>
    );
  };
  return InsetSidebar;
};

export default createInsetSidebar();

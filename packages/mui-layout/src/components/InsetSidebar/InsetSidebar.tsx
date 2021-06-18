import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { useTheme } from '@material-ui/core/styles';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import getInsetHeaderOffset from '../InsetHeaderOffset';
import { useInsetSidebar } from '../../hooks';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const Div = styledProxy('div');
  const InsetHeaderOffset = getInsetHeaderOffset(styled);

  const useStyles = makeStyles(({ palette }: Theme) => ({
    root: {
      position: 'relative',
      flexShrink: 0,
    },
    paper: {
      backgroundColor:
        palette.mode === 'dark' ? palette.background.paper : palette.grey[100],
    },
  }));

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
      <Div className={`InsetSidebar-root ${classes.root}`} styles={rootStyles}>
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

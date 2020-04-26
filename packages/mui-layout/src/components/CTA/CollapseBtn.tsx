import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import EdgeCollapseCompiler from '../../compilers/EdgeCollapseCompiler';
import createHiddenProxyComponent from '../Shared/StyledProxy';
import { CtaProps } from '../../types';
import { useSidebarCta } from '../../core';
import { createDisplayNone } from '../../utils';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    backgroundColor: palette.grey[50],
    textAlign: 'center',
    borderRadius: 0,
    borderTop: '1px solid',
    borderColor: palette.action.hover,
    [breakpoints.up('sm')]: {
      minHeight: 40,
    },
  },
}));

const StyledProxyButton = createHiddenProxyComponent<ButtonProps>(Button);

const CollapseBtn = ({
  children,
  sidebarId,
  onClick,
  SvgIconProps,
  ...props
}: ButtonProps & CtaProps) => {
  const classes = useStyles(props);
  const {
    id,
    anchor,
    breakpoints,
    edgeSidebar,
    state,
    setCollapsed,
  } = useSidebarCta(sidebarId, 'CollapseBtn');
  const arrowR = <ArrowRight {...SvgIconProps} />;
  const arrowL = <ArrowLeft {...SvgIconProps} />;
  const getArrow = () => {
    if (anchor === 'left') {
      return state.collapsed ? arrowR : arrowL;
    }
    if (anchor === 'right') {
      return state.collapsed ? arrowL : arrowR;
    }
    return null;
  };
  const hiddenStyles = createDisplayNone(
    EdgeCollapseCompiler(edgeSidebar).getHiddenBreakpoints(id),
    breakpoints
  );
  return (
    <StyledProxyButton
      {...props}
      classes={classes}
      styles={hiddenStyles}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (typeof onClick === 'function') onClick(e);
        setCollapsed(id, !state.collapsed);
      }}
    >
      {typeof children === 'function'
        ? children({ anchor, ...state })
        : getArrow()}
    </StyledProxyButton>
  );
};

export default CollapseBtn;

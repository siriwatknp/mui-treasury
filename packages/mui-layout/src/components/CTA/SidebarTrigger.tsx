import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import EdgeTriggerCompiler from '../../compilers/EdgeTriggerCompiler';
import { useSidebarCta } from '../../core';
import { createDisplayNone } from '../../utils';
import { CtaProps } from '../../types';
import createHiddenProxyComponent from '../Shared/StyledProxy';

const useStyles = makeStyles(
  ({ spacing }) => ({
    // @ts-ignore
    root: ({ anchor }) => ({
      ...(anchor === 'left' && {
        marginLeft: spacing(-1),
        marginRight: spacing(1),
      }),
      ...(anchor === 'right' && {
        marginLeft: spacing(1),
        marginRight: spacing(-1),
      }),
    }),
  }),
  { name: 'SidebarTrigger' }
);

const StyledProxyIconBtn = createHiddenProxyComponent<IconButtonProps>(
  IconButton
);

export const createSidebarTrigger = (StyledComponent = StyledProxyIconBtn) => {
  const SidebarTrigger = ({
    children,
    sidebarId,
    onClick,
    SvgIconProps,
    ...props
  }: IconButtonProps & CtaProps) => {
    const {
      id,
      anchor,
      breakpoints,
      edgeSidebar,
      state,
      setOpen,
    } = useSidebarCta(sidebarId, 'SidebarTrigger');
    const classes = useStyles({ ...props, anchor });
    const getArrow = () => {
      if (!state) return null;
      if (!state.open) return <MenuRounded {...SvgIconProps} />;
      if (anchor === 'left') return <ArrowLeft {...SvgIconProps} />;
      if (anchor === 'right') return <ArrowRight {...SvgIconProps} />;
      return null;
    };
    const styles = createDisplayNone(
      EdgeTriggerCompiler(edgeSidebar).getHiddenBreakpoints(id),
      breakpoints
    );
    return (
      <StyledComponent
        {...props}
        styles={styles}
        classes={classes}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (typeof onClick === 'function') onClick(e);
          setOpen(id, !state.open);
        }}
      >
        {typeof children === 'function'
          ? children({ anchor, ...state })
          : getArrow()}
      </StyledComponent>
    );
  };
  return SidebarTrigger;
};

export default createSidebarTrigger;

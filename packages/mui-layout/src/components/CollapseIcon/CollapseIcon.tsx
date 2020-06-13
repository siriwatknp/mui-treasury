import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import { CtaProps, DrawerAnchor } from '../../types';
import { useSidebarCollapse } from '../../hooks';
import { switchDirection } from '../../utils/resolveDirection';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledIconButton = styledProxy<IconButtonProps>(IconButton);

  const CollapseIcon = ({
    children,
    sidebarId,
    onClick,
    SvgIconProps,
    ...props
  }: IconButtonProps & CtaProps) => {
    const {
      id,
      anchor,
      hiddenStyles,
      state,
      setCollapsed,
    } = useSidebarCollapse(sidebarId, 'CollapseIcon');
    const theme = useTheme();
    const arrowR = <ArrowRight {...SvgIconProps} />;
    const arrowL = <ArrowLeft {...SvgIconProps} />;
    const getArrow = (direction: 'left' | 'right') => {
      if (direction === 'left') {
        return state.collapsed ? arrowR : arrowL;
      }
      if (direction === 'right') {
        return state.collapsed ? arrowL : arrowR;
      }
      return null;
    };
    return (
      <StyledIconButton
        {...props}
        styles={hiddenStyles}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (typeof onClick === 'function') onClick(e);
          setCollapsed(id, !state.collapsed);
        }}
      >
        {typeof children === 'function'
          ? children({ anchor, ...state })
          : getArrow(
              theme.direction === 'rtl'
                ? (switchDirection(anchor) as DrawerAnchor)
                : anchor
            )}
      </StyledIconButton>
    );
  };
  return CollapseIcon;
};

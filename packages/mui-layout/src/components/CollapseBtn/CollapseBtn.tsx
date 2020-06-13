import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import { CtaProps, DrawerAnchor } from '../../types';
import { useSidebarCollapse } from '../../hooks';
import { switchDirection } from '../../utils/resolveDirection';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledButton = styledProxy<ButtonProps>(Button);

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
      hiddenStyles,
      state,
      setCollapsed,
    } = useSidebarCollapse(sidebarId, 'CollapseBtn');
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
      <StyledButton
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
          : getArrow(
              theme.direction === 'rtl'
                ? (switchDirection(anchor) as DrawerAnchor)
                : anchor
            )}
      </StyledButton>
    );
  };
  return CollapseBtn;
};

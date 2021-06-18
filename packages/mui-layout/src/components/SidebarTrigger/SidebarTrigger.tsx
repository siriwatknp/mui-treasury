import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { useTheme } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import { useSidebarTrigger } from '../../hooks';
import { CtaProps } from '../../types';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledIconBtn = styledProxy<IconButtonProps>(IconButton);

  const useStyles = makeStyles(
    ({ spacing, direction }) => ({
      // @ts-ignore
      root: ({ anchor }) => ({
        ...(anchor === 'left' && {
          marginLeft: spacing(direction === 'rtl' ? 1 : -1),
          marginRight: spacing(direction === 'rtl' ? -1 : 1),
        }),
        ...(anchor === 'right' && {
          marginLeft: spacing(direction === 'rtl' ? -1 : 1),
          marginRight: spacing(direction === 'rtl' ? 1 : -1),
        }),
      }),
    }),
    { name: 'SidebarTrigger' }
  );

  const SidebarTrigger = ({
    children,
    sidebarId,
    onClick,
    SvgIconProps,
    ...props
  }: IconButtonProps & CtaProps) => {
    const { id, anchor, hiddenStyles, state, setOpen } = useSidebarTrigger(
      sidebarId,
      'SidebarTrigger'
    );
    const theme = useTheme();
    const classes = useStyles({ ...props, anchor });
    const getArrow = () => {
      if (!state) return null;
      if (!state.open) return <MenuRounded {...SvgIconProps} />;
      if (theme.direction === 'rtl' && anchor === 'left')
        return <ArrowRight {...SvgIconProps} />;
      if (theme.direction === 'rtl' && anchor === 'right')
        return <ArrowLeft {...SvgIconProps} />;
      if (anchor === 'left') return <ArrowLeft {...SvgIconProps} />;
      if (anchor === 'right') return <ArrowRight {...SvgIconProps} />;
      return null;
    };
    return (
      <StyledIconBtn
        {...props}
        styles={hiddenStyles}
        classes={classes}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (typeof onClick === 'function') onClick(e);
          setOpen(id, !state.open);
        }}
      >
        {typeof children === 'function'
          ? children({ anchor, ...state })
          : getArrow()}
      </StyledIconBtn>
    );
  };
  return SidebarTrigger;
};

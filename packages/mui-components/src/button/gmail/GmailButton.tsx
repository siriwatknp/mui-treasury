import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { Theme } from '@material-ui/core';

export type GmailButtonStyleProps = {
  collapsed: boolean
}
export type GmailButtonClassKey = 'root' | 'label' | 'img' | 'startIcon'

export const gmailButtonStyles = ({ palette }: Theme) => {
  return {
    root: ({ collapsed }: GmailButtonStyleProps) => ({
      minWidth: collapsed ? 56 : 64,
      minHeight: collapsed ? 56 : 48,
      backgroundColor: palette.common.white,
      padding: `8px ${collapsed ? '8px' : '24px'} 8px ${
        collapsed ? '8px' : '16px'
      }`,
      borderRadius: 40,
      boxShadow:
        '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
      '&:hover': {
        boxShadow:
          '0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)',
        backgroundColor: '#fafafb',
      },
      '&:active': {
        backgroundColor: '#f1f3f4',
      },
    }),
    label: {
      fontFamily:
        "'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
      color: '#3c4043',
      textTransform: 'none' as const,
      fontWeight: 500,
    },
    img: {
      width: 32,
      height: 32,
    },
    startIcon: ({ collapsed }: GmailButtonStyleProps) => ({
      margin: collapsed ? 0 : '',
    }),
  };
};

export type GmailButtonProps = {
  collapsed: boolean;
  classes?: Partial<Record<GmailButtonClassKey, string>>;
} & ButtonProps

const useStyles = makeStyles(gmailButtonStyles, { name: 'GmailButton' })

const GmailButton = ({ collapsed, classes, ...props }: GmailButtonProps) => {
  const styles = useStyles({ collapsed, ...props })
  const { img: imgClassName, ...buttonClasses } = styles;
  return (
    <Button
      disableRipple
      {...props}
      classes={buttonClasses}
      startIcon={
        <Avatar
          className={imgClassName}
          src={
            'https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png'
          }
        />
      }
    >
      {!collapsed && 'Compose'}
    </Button>
  );
}

export default GmailButton;

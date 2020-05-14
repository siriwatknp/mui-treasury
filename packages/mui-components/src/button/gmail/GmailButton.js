import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export const gmailButtonStyles = ({ palette }) => {
  return {
    root: ({ collapsed }) => ({
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
      textTransform: 'none',
      fontWeight: 500,
    },
    startIcon: ({ collapsed }) => ({
      ...(collapsed && { margin: 0 }),
    }),
    img: {
      width: 32,
      height: 32,
    },
  };
};

const GmailButton = withStyles(gmailButtonStyles, { name: 'GmailButton' })(
  ({ collapsed, classes, ...props }) => {
    const { img: imgClassName, ...buttonClasses } = classes;
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
);

export default GmailButton;

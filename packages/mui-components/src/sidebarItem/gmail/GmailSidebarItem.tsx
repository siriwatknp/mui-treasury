import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import styles, { GmailSidebarClassKey } from './gmailSidebarItem.styles';

export type GmailSidebarItemProps = {
  startIcon: React.ReactElement;
  label: React.ReactElement;
  amount?: React.ReactElement;
  collapsed?: boolean;
  dotOnCollapsed?: boolean;
  selected?: boolean;
  onClick: ButtonBaseProps['onClick'];
  color?: string;
  classes?: Partial<Record<GmailSidebarClassKey, string>>;
  className?: string;
  ButtonBaseProps?: ButtonBaseProps;
};

const useStyles = makeStyles(styles, { name: 'GmailSidebarItem' });

const GmailSidebarItem = ({
  color,
  startIcon,
  label,
  amount,
  ButtonBaseProps = {},
  classes = {},
  collapsed,
  dotOnCollapsed,
  selected,
  onClick,
}: GmailSidebarItemProps) => {
  const styles = useStyles({ classes, color });
  return (
    <ButtonBase
      {...ButtonBaseProps}
      onClick={onClick}
      classes={{
        ...ButtonBaseProps.classes,
        root: cx(styles.root, {
          [styles.selected]: selected,
          [styles.collapsed]: collapsed,
          [styles.dot]: collapsed && dotOnCollapsed && amount,
        }),
        focusVisible: styles.focusVisible,
      }}
    >
      <div className={'GmailSidebarItem-startIcon'}>{startIcon}</div>
      <div className={'GmailSidebarItem-label'}>{label}</div>
      {amount && (
        <div className={'GmailSidebarItem-amount'}>
          {amount}
        </div>
      )}
    </ButtonBase>
  );
};

export default GmailSidebarItem;

import React from 'react';
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList, { MenuListProps } from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { MenuProps } from '@material-ui/core/Menu';

export const arrowMenuStyles = {
  root: {
    display: 'inline-flex',
    borderRadius: 4,
  },
  button: {
    padding: '8px 2px',
    borderRadius: 4,
  },
  arrowBtn: {
    padding: 0,
    borderRadius: 4,
    width: 20,
    marginLeft: -2,
    fontSize: 20,
    '&:hover': {
      color: 'rgba(0,0,0,0.87)',
    },
  },
  open: {
    backgroundColor: 'rgba(0,0,0,0.12)',
  },
};

export type ArrowMenuClassKey = keyof typeof arrowMenuStyles;

const useStyles = makeStyles(arrowMenuStyles, { name: 'ArrowMenu' });

export type ArrowMenuProps = {
  renderElement: (props: {
    styles: Record<ArrowMenuClassKey, string>;
    onClose: () => void;
  }) => React.ReactNode;
  children:
    | ((props: {
        styles: Record<ArrowMenuClassKey, string>;
        onClose: () => void;
      }) => React.ReactNode)
    | React.ReactNode;
} & Omit<MenuProps, 'open'>;

const ArrowMenu = ({ children, renderElement, ...props }: ArrowMenuProps) => {
  const styles = useStyles(props);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown: MenuListProps['onKeyDown'] = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div ref={anchorRef} className={cx(styles.root, { [styles.open]: open })}>
      {renderElement && renderElement({ onClose: handleClose, styles })}
      <IconButton className={cx(styles.button, styles.arrowBtn)}>
        <ArrowDropDown fontSize={'inherit'} onClick={handleToggle} />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement={'bottom-start'}
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper elevation={4}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {typeof children === 'function'
                    ? // @ts-ignore
                      children({ onClose: handleClose, styles })
                    : children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default ArrowMenu;

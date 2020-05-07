import React from 'react';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@material-ui/core/SwipeableDrawer';
import { useSidebar, SidebarProvider, useWindow } from '../../core';
import { useBreakpointConfig, useSidebarAutoCollapse } from '../../core/hooks';
import { createEdgeHeaderOffset } from '../EdgeHeaderOffset';
import { CLS, createSwipeableVariant } from '../Shared/SharedSidebar';
import { get, createBreakpointStyles, createHiddenStyles } from '../../utils';
import { transitionStyles } from '../../styles';
import { EdgeSidebarConfig } from '../../types';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';

const useTransitionStyles = makeStyles(transitionStyles);

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledSwipeableDrawer = styledProxy<SwipeableDrawerProps>(
    SwipeableDrawer,
    CLS
  );
  const Div = styledProxy('div');
  const TemporarySwipeableDrawer = createSwipeableVariant(
    'temporary',
    StyledSwipeableDrawer
  );
  const PermanentSwipeableDrawer = createSwipeableVariant(
    'permanent',
    StyledSwipeableDrawer
  );
  const PersistentSwipeableDrawer = createSwipeableVariant(
    'persistent',
    StyledSwipeableDrawer
  );
  const EdgeHeaderOffset = createEdgeHeaderOffset(Div);

  const SwipeableSidebar = ({
    onClose,
    onOpen,
    children,
    PaperProps,
    ModalProps,
    SlideProps,
    ...props
  }: Omit<SwipeableDrawerProps, 'variant' | 'open' | 'onClose' | 'onOpen'> & {
    sidebarId: string;
    onClose?: SwipeableDrawerProps['onClose'];
    onOpen?: SwipeableDrawerProps['onOpen'];
  }) => {
    const { sidebarId } = props;
    useSidebarAutoCollapse(sidebarId);
    const { iDocument } = useWindow();
    const transition = useTransitionStyles();
    const [entered, setEntered] = React.useState(false);
    const { breakpoints } = useTheme();
    const {
      anchor,
      edgeSidebar,
      styles: { permanent, persistent, temporary },
      state,
      setOpen,
    } = useSidebar(sidebarId, 'SwipeableDrawer');
    const wrappedOnOpen: SwipeableDrawerProps['onOpen'] = (...args) => {
      if (typeof onOpen === 'function') onOpen(...args);
      setOpen(sidebarId, true);
    };
    const wrappedOnClose: SwipeableDrawerProps['onClose'] = (...args) => {
      if (typeof onOpen === 'function') onClose(...args);
      setOpen(sidebarId, false);
    };
    const config = useBreakpointConfig<EdgeSidebarConfig>(
      edgeSidebar.configMapById[sidebarId]
    );
    const commonProps = {
      ...props,
      PaperProps: {
        ...PaperProps,
        className: cx(
          (entered || get(config, 'variant') === 'permanent') &&
            transition.root,
          get(PaperProps, 'className')
        ),
      },
      ModalProps: {
        container: iDocument ? iDocument.body : undefined,
        ...ModalProps,
      },
      SlideProps: {
        ...SlideProps,
        // @ts-ignore
        onEntered: (...args) => {
          if (SlideProps && typeof SlideProps.onEntered === 'function')
            // @ts-ignore
            SlideProps.onEntered(...args);
          setEntered(true);
        },
        // @ts-ignore
        onExit: arg => {
          if (SlideProps && typeof SlideProps.onExit === 'function')
            // @ts-ignore
            SlideProps.onExit(arg);
          setEntered(false);
        },
      },
      anchor,
      open: state.open,
      onOpen: wrappedOnOpen,
      onClose: wrappedOnClose,
    };

    const headerAdjustment = <EdgeHeaderOffset sidebarId={sidebarId} />;

    return (
      <SidebarProvider id={sidebarId}>
        <TemporarySwipeableDrawer
          disableScrollLock
          {...commonProps}
          hiddenStyles={createHiddenStyles(
            temporary,
            [permanent, persistent],
            breakpoints
          )}
          styles={createBreakpointStyles(temporary, breakpoints)}
        >
          {children}
        </TemporarySwipeableDrawer>
        <PersistentSwipeableDrawer
          {...commonProps}
          hiddenStyles={createHiddenStyles(
            persistent,
            [temporary, permanent],
            breakpoints
          )}
          styles={createBreakpointStyles(persistent, breakpoints)}
        >
          {headerAdjustment}
          {children}
        </PersistentSwipeableDrawer>
        <PermanentSwipeableDrawer
          {...commonProps}
          hiddenStyles={createHiddenStyles(
            permanent,
            [temporary, persistent],
            breakpoints
          )}
          styles={createBreakpointStyles(permanent, breakpoints)}
        >
          {headerAdjustment}
          {children}
        </PermanentSwipeableDrawer>
      </SidebarProvider>
    );
  };
  return SwipeableSidebar;
};

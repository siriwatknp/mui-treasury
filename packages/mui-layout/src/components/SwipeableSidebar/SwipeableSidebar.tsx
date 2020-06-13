import React from 'react';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@material-ui/core/SwipeableDrawer';
import { SidebarProvider, SidebarConsumer, useWindowCtx } from '../../contexts';
import {
  useBreakpointConfig,
  useSidebarAutoCollapse,
  useSidebar,
} from '../../hooks';
import getEdgeHeaderOffset from '../EdgeHeaderOffset';
import { CLS, createSwipeableVariant } from '../Shared/SharedSidebar';
import { get, createBreakpointStyles, createHiddenStyles } from '../../utils';
import { transitionStyles } from '../../styles';
import { EdgeSidebarConfig } from '../../types';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledSwipeableDrawer = styledProxy<SwipeableDrawerProps>(
    SwipeableDrawer,
    CLS
  );
  const EdgeHeaderOffset = getEdgeHeaderOffset(styled);
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

  const useTransitionStyles = makeStyles(transitionStyles);

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
    const { iDocument } = useWindowCtx();
    const transition = useTransitionStyles();
    const theme = useTheme();
    const { breakpoints } = theme;
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

    const headerAdjustment = <EdgeHeaderOffset sidebarId={sidebarId} />;

    return (
      <SidebarProvider id={sidebarId} config={config} sidebarState={state}>
        <SidebarConsumer>
          {({
            entered,
            inlineStyle,
            wrapOnEntered,
            wrapOnExit,
            wrapOnMouseEnter,
            wrapOnMouseLeave,
          }) => {
            const commonProps = {
              ...props,
              PaperProps: {
                ...PaperProps,
                style: {
                  ...get(PaperProps, 'style'),
                  ...inlineStyle,
                },
                className: cx(
                  (entered || get(config, 'variant') === 'permanent') &&
                    transition.root,
                  get(PaperProps, 'className')
                ),
                onMouseEnter: wrapOnMouseEnter(PaperProps),
                onMouseLeave: wrapOnMouseLeave(PaperProps),
              },
              ModalProps: {
                container: iDocument ? iDocument.body : undefined,
                ...ModalProps,
              },
              SlideProps: {
                ...SlideProps,
                onEntered: wrapOnEntered(SlideProps),
                onExit: wrapOnExit(SlideProps),
              },
              anchor,
              open: state.open,
              onOpen: wrappedOnOpen,
              onClose: wrappedOnClose,
            };
            return (
              <>
                <TemporarySwipeableDrawer
                  disableScrollLock
                  {...commonProps}
                  hiddenStyles={createHiddenStyles(
                    temporary,
                    [permanent, persistent],
                    breakpoints
                  )}
                  styles={createBreakpointStyles(temporary, theme)}
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
                  styles={createBreakpointStyles(persistent, theme)}
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
                  styles={createBreakpointStyles(permanent, theme)}
                >
                  {headerAdjustment}
                  {children}
                </PermanentSwipeableDrawer>
              </>
            );
          }}
        </SidebarConsumer>
      </SidebarProvider>
    );
  };
  return SwipeableSidebar;
};

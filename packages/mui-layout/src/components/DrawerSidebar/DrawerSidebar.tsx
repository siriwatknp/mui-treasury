import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import { DrawerProps } from '@material-ui/core/Drawer';
import { SidebarProvider, SidebarConsumer, useWindowCtx } from '../../contexts';
import {
  useSidebar,
  useBreakpointConfig,
  useSidebarAutoCollapse,
} from '../../hooks';
import getEdgeHeaderOffset from '../EdgeHeaderOffset';
import { CLS, createDrawerVariant } from '../Shared/SharedSidebar';
import { generateStyledProxyCreator } from '../Shared/StyledProxy';
import { get, createBreakpointStyles, createHiddenStyles } from '../../utils';
import { transitionStyles } from '../../styles';
import { EdgeSidebarConfig } from '../../types';
import Drawer from '@material-ui/core/Drawer/Drawer';

export default (styled: any) => {
  const styledProxy = generateStyledProxyCreator(styled);
  const StyledDrawer = styledProxy<DrawerProps>(Drawer, CLS);
  const EdgeHeaderOffset = getEdgeHeaderOffset(styled);

  const TemporaryDrawer = createDrawerVariant('temporary', StyledDrawer);
  const PermanentDrawer = createDrawerVariant('permanent', StyledDrawer);
  const PersistentDrawer = createDrawerVariant('persistent', StyledDrawer);

  const useTransitionStyles = makeStyles(transitionStyles);

  const DrawerSidebar = ({
    sidebarId,
    onClose,
    children,
    PaperProps,
    ModalProps,
    SlideProps,
    ...props
  }: Omit<DrawerProps, 'variant'> & {
    sidebarId: string;
  }) => {
    useSidebarAutoCollapse(sidebarId);
    const { iDocument } = useWindowCtx();
    const transition = useTransitionStyles();
    const { breakpoints } = useTheme();
    const {
      anchor,
      edgeSidebar,
      styles: { permanent, persistent, temporary },
      state,
      setOpen,
    } = useSidebar(sidebarId, 'DrawerSidebar');
    const wrappedOnClose: DrawerProps['onClose'] = (...args) => {
      if (typeof onClose === 'function') onClose(...args);
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
              onClose: wrappedOnClose,
            };
            return (
              <>
                <TemporaryDrawer
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
                </TemporaryDrawer>
                <PersistentDrawer
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
                </PersistentDrawer>
                <PermanentDrawer
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
                </PermanentDrawer>
              </>
            );
          }}
        </SidebarConsumer>
      </SidebarProvider>
    );
  };

  return DrawerSidebar;
};
